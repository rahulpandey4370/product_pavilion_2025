
'use client';

import type { CSSProperties } from 'react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, RotateCcw, Puzzle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme/ThemeProvider';
import { useIsMobile } from '@/hooks/use-mobile';

type WordData = {
  word: string;
  found: boolean;
  foundTimestamp?: number;
  lineCoords?: { start: { r: number; c: number }; end: { r: number; c: number } } | null;
};

type DifficultySetting = {
  rows: number;
  cols: number;
  name: 'easy' | 'medium' | 'hard';
};

const DIFFICULTIES: Record<'easy' | 'medium' | 'hard', DifficultySetting> = {
  easy: { rows: 10, cols: 10, name: 'easy' },
  medium: { rows: 12, cols: 12, name: 'medium' },
  hard: { rows: 15, cols: 15, name: 'hard' },
};

const ALL_WORDS_LIST = [
  'KINETIC', 'PRISM', 'MATTEC', 'QUICKSHIP', 'TROPOS',
  'EPICONNECT', 'DOCUMATCH', 'ITRACE', 'IMAGEN', 'ASCEND',
  'CLOUD', 'AUTOMATION', 'INTEGRATION', 'ANALYTICS', 'MOBILE',
  'SECURITY', 'PLATFORM', 'MODULE', 'SOLUTION', 'SUPPORT'
];

const getShuffledWords = (count: number): WordData[] => {
  const shuffled = [...ALL_WORDS_LIST].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(word => ({ word, found: false, lineCoords: null }));
};

export default function SimpleWordGame() {
  const [words, setWords] = useState<WordData[]>(() => getShuffledWords(DIFFICULTIES.easy.rows));
  const [grid, setGrid] = useState<string[][]>([]);
  const [selectedLetters, setSelectedLetters] = useState<{ row: number; col: number }[]>([]);
  const [message, setMessage] = useState<string>('');
  const [completionPercent, setCompletionPercent] = useState<number>(0);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<DifficultySetting>(DIFFICULTIES.easy);
  
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const gameRef = useRef<HTMLDivElement>(null);
  const scrollableGridContainerRef = useRef<HTMLDivElement>(null);
  const [originalBodyOverflow, setOriginalBodyOverflow] = useState<string>('');

  const { theme } = useTheme();
  const isMobile = useIsMobile();

  const randomLetter = useCallback(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.charAt(Math.floor(Math.random() * letters.length));
  }, []);

  const isValidPlacement = useCallback((
    currentGrid: string[][],
    word: string,
    row: number,
    col: number,
    rowDelta: number,
    colDelta: number
  ): boolean => {
    if (row < 0 || row >= difficulty.rows || col < 0 || col >= difficulty.cols) return false;
    if (row + (word.length - 1) * rowDelta < 0 || row + (word.length - 1) * rowDelta >= difficulty.rows) return false;
    if (col + (word.length - 1) * colDelta < 0 || col + (word.length - 1) * colDelta >= difficulty.cols) return false;

    for (let i = 0; i < word.length; i++) {
      const r = row + i * rowDelta;
      const c = col + i * colDelta;
      if (currentGrid[r][c] !== '' && currentGrid[r][c] !== word[i]) {
        return false;
      }
    }
    return true;
  }, [difficulty.rows, difficulty.cols]);

  const placeWord = useCallback((
    currentGrid: string[][],
    word: string
  ): {
    grid: string[][];
    position: { start: { r: number; c: number }; end: { r: number; c: number } } | null;
  } => {
    const directions = [
      { rowDelta: 0, colDelta: 1, name: 'H' }, // Horizontal
      { rowDelta: 1, colDelta: 0, name: 'V' }, // Vertical
      { rowDelta: 1, colDelta: 1, name: 'DDR' }, // Diagonal down-right
      { rowDelta: 1, colDelta: -1, name: 'DDL' }, // Diagonal down-left
      ...(difficulty.name !== 'easy' ? [ // No reverse for easy
        { rowDelta: 0, colDelta: -1, name: 'HR' },  // Horizontal Reverse
        { rowDelta: -1, colDelta: 0, name: 'VR' },  // Vertical Reverse
        ...(difficulty.name === 'hard' ? [ // More reverse for hard
            { rowDelta: -1, colDelta: -1, name: 'DULR'}, // Diagonal Up-Left Reverse
            { rowDelta: -1, colDelta: 1, name: 'DURR'}   // Diagonal Up-Right Reverse
        ] : [])
      ] : [])
    ];

    const availableDirections = difficulty.name === 'easy'
      ? directions.filter(d => ['H', 'V'].includes(d.name))
      : difficulty.name === 'medium'
        ? directions.filter(d => ['H', 'V', 'DDR'].includes(d.name)) // DDR for medium
        : directions; // All for hard

    const maxAttempts = 150;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const { rowDelta, colDelta } = availableDirections[Math.floor(Math.random() * availableDirections.length)];
      const startRow = Math.floor(Math.random() * difficulty.rows);
      const startCol = Math.floor(Math.random() * difficulty.cols);

      if (isValidPlacement(currentGrid, word, startRow, startCol, rowDelta, colDelta)) {
        const newGrid = currentGrid.map(r => [...r]);
        const endRow = startRow + (word.length - 1) * rowDelta;
        const endCol = startCol + (word.length - 1) * colDelta;

        for (let i = 0; i < word.length; i++) {
          newGrid[startRow + i * rowDelta][startCol + i * colDelta] = word[i];
        }
        return {
          grid: newGrid,
          position: { start: { r: startRow, c: startCol }, end: { r: endRow, c: endCol } }
        };
      }
    }
    return { grid: currentGrid, position: null };
  }, [difficulty.rows, difficulty.cols, difficulty.name, isValidPlacement]);

  const generateGrid = useCallback(() => {
    let newGrid = Array(difficulty.rows).fill(null).map(() => Array(difficulty.cols).fill(''));
    const currentWordPositions: Record<string, { start: { r: number; c: number }; end: { r: number; c: number } }> = {};

    const wordsToPlace = words.map(w => w.word).sort((a, b) => b.length - a.length);

    for (const word of wordsToPlace) {
      const result = placeWord(newGrid, word);
      newGrid = result.grid;
      if (result.position) {
        currentWordPositions[word] = result.position;
      } else {
        console.warn(`Could not place word: ${word}`);
      }
    }

    for (let r = 0; r < difficulty.rows; r++) {
      for (let c = 0; c < difficulty.cols; c++) {
        if (newGrid[r][c] === '') {
          newGrid[r][c] = randomLetter();
        }
      }
    }
    setWords(prevWords => prevWords.map(w => ({
        ...w,
        lineCoords: currentWordPositions[w.word] || null
    })));
    return newGrid;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty.rows, difficulty.cols, placeWord, randomLetter, words.map(w => w.word).join(',')]); // Depend on word strings for regeneration

  const resetGame = useCallback(() => {
    setWords(getShuffledWords(difficulty.rows).map(w => ({ ...w, found: false, foundTimestamp: undefined, lineCoords: null })));
    setSelectedLetters([]);
    setMessage('');
    setGameComplete(false);
    setCompletionPercent(0);

    if (timerRef.current) clearInterval(timerRef.current);
    setStartTime(null);
    setElapsedTime(0);
    setTimerActive(isVisible && !gameComplete); // Restart timer only if visible
    if(isVisible && !gameComplete) setStartTime(Date.now());

    // generateGrid will be called by the useEffect below
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty.rows, isVisible, gameComplete]);


  useEffect(() => {
    if (isVisible) {
       setGrid(generateGrid());
       if (!gameComplete) {
         setStartTime(Date.now());
         setTimerActive(true);
       }
    } else {
        setTimerActive(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty, isVisible, generateGrid, gameComplete, resetGame]); // Added resetGame

  useEffect(() => {
    if (timerActive && startTime && isVisible && !gameComplete) {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      timerRef.current = setInterval(() => {
        if (startTime) {
          setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
        }
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive, startTime, isVisible, gameComplete]);

  useEffect(() => {
    if (!gameRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(gameRef.current);
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const foundCount = words.filter(w => w.found).length;
    const newPercent = Math.floor((foundCount / words.length) * 100);
    setCompletionPercent(newPercent);

    if (newPercent === 100 && words.length > 0 && !gameComplete) {
      setGameComplete(true);
      setTimerActive(false);
      setMessage(`🎉 All words found in ${formatTime(elapsedTime)}!`);
    }
  }, [words, elapsedTime, gameComplete]);


  // Prevent page scroll on mobile during word selection
  useEffect(() => {
    if (isMobile && isSelecting) {
      if(document.body.style.overflow !== 'hidden') {
        setOriginalBodyOverflow(document.body.style.overflow);
        document.body.style.overflow = 'hidden';
      }
      if (scrollableGridContainerRef.current) {
        scrollableGridContainerRef.current.style.overflowX = 'hidden';
      }
    } else {
      if (document.body.style.overflow === 'hidden') {
         document.body.style.overflow = originalBodyOverflow || '';
      }
      if (scrollableGridContainerRef.current) {
        scrollableGridContainerRef.current.style.overflowX = 'auto';
      }
    }
    // Cleanup function to restore original overflow style
    return () => {
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = originalBodyOverflow || '';
      }
    };
  }, [isMobile, isSelecting, originalBodyOverflow]);


  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectionStart = (row: number, col: number) => {
    if (gameComplete) return;
    setIsSelecting(true);
    setSelectedLetters([{ row, col }]);
  };
  
  const handleSelectionMove = (row: number, col: number) => {
    if (!isSelecting || gameComplete) return;
    if (selectedLetters.length === 0) return;

    const lastSelected = selectedLetters[selectedLetters.length - 1];
    if (lastSelected.row === row && lastSelected.col === col) return; // No change

    // Check if the new cell is adjacent (horizontally, vertically, or diagonally)
    const rowDiff = Math.abs(row - lastSelected.row);
    const colDiff = Math.abs(col - lastSelected.col);

    if (rowDiff <= 1 && colDiff <= 1) { // Adjacent
        // Check if already selected
        if (!selectedLetters.some(p => p.row === row && p.col === col)) {
            setSelectedLetters(prev => [...prev, { row, col }]);
        } else if (selectedLetters.length > 1 && selectedLetters[selectedLetters.length - 2].row === row && selectedLetters[selectedLetters.length - 2].col === col) {
             // Moving back, deselect last letter
            setSelectedLetters(prev => prev.slice(0, -1));
        }
    }
  };

  const handleSelectionEnd = () => {
    if (!isSelecting || gameComplete) return;
    setIsSelecting(false);

    if (selectedLetters.length < 2) {
      setSelectedLetters([]);
      return;
    }

    let currentSelectedWord = '';
    selectedLetters.forEach(pos => {
      currentSelectedWord += grid[pos.row][pos.col];
    });
    
    const foundWordIndex = words.findIndex(w => {
      if (w.found) return false;
      // Check forward and backward
      return w.word === currentSelectedWord || w.word === currentSelectedWord.split('').reverse().join('');
    });

    if (foundWordIndex !== -1) {
      const wordObj = words[foundWordIndex];
      setMessage(`Found: ${wordObj.word}!`);
      setWords(prevWords => {
        const newWords = [...prevWords];
        newWords[foundWordIndex] = {
          ...newWords[foundWordIndex],
          found: true,
          foundTimestamp: Date.now(),
          lineCoords: { start: selectedLetters[0], end: selectedLetters[selectedLetters.length -1] }
        };
        return newWords;
      });
      if (!timerActive && !startTime) {
        setStartTime(Date.now());
        setTimerActive(true);
      }
    } else {
      if (currentSelectedWord.length > 1) {
         setMessage(`Not a word: ${currentSelectedWord}`);
         setTimeout(() => setMessage(''), 1500);
      }
    }
    setSelectedLetters([]);
  };

  // Touch handlers
  const handleGridTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (gameComplete) return;
    const touch = event.touches[0];
    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    const cellData = targetElement?.getAttribute('data-cell');
    if (cellData) {
      const [row, col] = cellData.split('-').map(Number);
      handleSelectionStart(row, col);
    }
  };

  const handleGridTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isSelecting || gameComplete) return;
    // event.preventDefault(); // Already handled by parent div's onTouchMove and touch-action CSS
    const touch = event.touches[0];
    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    const cellData = targetElement?.getAttribute('data-cell');
    if (cellData) {
      const [row, col] = cellData.split('-').map(Number);
      if (selectedLetters.length > 0) {
        const lastSelected = selectedLetters[selectedLetters.length - 1];
        if (lastSelected.row !== row || lastSelected.col !== col) {
          handleSelectionMove(row, col);
        }
      }
    }
  };
  
  // Mouse handlers
  const handleGridMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (gameComplete || !(event.target instanceof HTMLElement)) return;
    const cellData = event.target.getAttribute('data-cell');
    if (cellData) {
      const [row, col] = cellData.split('-').map(Number);
      handleSelectionStart(row, col);
    }
  };

  const handleGridMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isSelecting || gameComplete || !(event.target instanceof HTMLElement)) return;
     const cellData = event.target.getAttribute('data-cell');
    if (cellData) {
      const [row, col] = cellData.split('-').map(Number);
      handleSelectionMove(row, col);
    }
  };

  const handleChangeDifficulty = (newDifficultyName: 'easy' | 'medium' | 'hard') => {
    const newDiffSetting = DIFFICULTIES[newDifficultyName];
    setDifficulty(newDiffSetting);
    setWords(getShuffledWords(newDiffSetting.rows).map(w => ({ ...w, found: false, foundTimestamp: undefined, lineCoords: null })));
    setGameComplete(false);
    setMessage('');
    setCompletionPercent(0);

    if (timerRef.current) clearInterval(timerRef.current);
    setStartTime(Date.now()); // Reset start time for new difficulty
    setElapsedTime(0);
    setTimerActive(isVisible && !gameComplete); // Restart timer only if visible
  };

  const getCellStyle = (row: number, col: number): CSSProperties => {
    const isSelected = selectedLetters.some(p => p.row === row && p.col === col);
    const foundWord = words.find(w => w.found && w.lineCoords && isCellInFoundWordLine(row, col, w.lineCoords.start, w.lineCoords.end));
    
    let style: CSSProperties = {
      transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
      MozUserSelect: 'none',
      width: '2.2rem', // Slightly larger cells
      height: '2.2rem',
    };

    if (isSelected) {
      style.backgroundColor = 'var(--primary)';
      style.color = 'var(--primary-foreground)';
      style.transform = 'scale(1.1)';
      style.boxShadow = '0 0 10px var(--primary)';
      style.zIndex = 10;
    } else if (foundWord) {
      const timeSinceFound = foundWord.foundTimestamp ? Date.now() - foundWord.foundTimestamp : 3000;
      const isRecentlyFound = timeSinceFound < 2000; // 2 seconds highlight
      style.backgroundColor = isRecentlyFound ? 'hsla(var(--accent-hsl), 0.7)' : 'hsla(var(--accent-hsl), 0.4)';
      style.color = isRecentlyFound ? 'var(--accent-foreground)' : 'hsl(var(--foreground-hsl), 0.8)';
      if(isRecentlyFound) style.transform = 'scale(1.05)';
    } else {
      style.backgroundColor = theme === 'dark' ? 'hsl(var(--muted-hsl))' : 'hsl(var(--card-hsl))';
      style.color = 'hsl(var(--foreground-hsl))';
    }
    return style;
  };

  const isCellInFoundWordLine = (
    cellRow: number, cellCol: number,
    start: { r: number, c: number },
    end: { r: number, c: number }
  ) => {
    // Check if cell is on the line segment between start and end
    const minR = Math.min(start.r, end.r);
    const maxR = Math.max(start.r, end.r);
    const minC = Math.min(start.c, end.c);
    const maxC = Math.max(start.c, end.c);

    if (cellRow < minR || cellRow > maxR || cellCol < minC || cellCol > maxC) {
        return false;
    }

    // Horizontal line
    if (start.r === end.r) return cellRow === start.r && cellCol >= minC && cellCol <= maxC;
    // Vertical line
    if (start.c === end.c) return cellCol === start.c && cellRow >= minR && cellRow <= maxR;
    // Diagonal line
    if (Math.abs(end.r - start.r) === Math.abs(end.c - start.c)) {
        return Math.abs(cellRow - start.r) === Math.abs(cellCol - start.c) && 
               (cellRow - start.r) * (end.c - start.c) === (cellCol - start.c) * (end.r - start.r);
    }
    return false;
  };
  
  if (!isVisible && !isMobile) { // Don't render if not visible on desktop to save resources
    return <div ref={gameRef} className="w-full min-h-[300px] flex items-center justify-center text-muted-foreground">Scroll down to play...</div>;
  }


  return (
    <div ref={gameRef} className="w-full flex flex-col items-center space-y-6 p-2 md:p-0 select-none">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl gap-4">
        <h3 className="text-xl font-semibold text-center gradient-text">
          Epicor Word Search
        </h3>
        {isVisible && (
          <div className={cn("flex items-center rounded-lg px-3 py-1.5 shadow-md border",
            theme === 'dark' ? "bg-slate-800 border-primary/50" : "bg-slate-100 border-primary/30"
          )}>
            <Clock className="h-5 w-5 text-primary mr-2" />
            <span className="font-mono font-medium">{formatTime(elapsedTime)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-2">
        {(!isMobile || difficulty.name === 'easy') && <Button onClick={() => handleChangeDifficulty('easy')} variant={difficulty.name === 'easy' ? 'default' : 'outline'} size="sm">Easy</Button>}
        {!isMobile && <Button onClick={() => handleChangeDifficulty('medium')} variant={difficulty.name === 'medium' ? 'default' : 'outline'} size="sm">Medium</Button>}
        {!isMobile && <Button onClick={() => handleChangeDifficulty('hard')} variant={difficulty.name === 'hard' ? 'default' : 'outline'} size="sm">Hard</Button>}
        <Button onClick={resetGame} variant="secondary" size="sm"><RotateCcw className="mr-2 h-4 w-4" />New Puzzle</Button>
      </div>
      
      <div className="w-full max-w-md">
        <div className="text-sm mb-1 flex justify-between">
          <span className="font-medium">Progress</span>
          <span className="font-semibold text-primary">{completionPercent}%</span>
        </div>
        <Progress value={completionPercent} className="h-2.5" />
      </div>

      <AnimatePresence>
        {message && (
          <motion.div
            className={cn("px-4 py-2 rounded-lg shadow-md border text-sm text-center", 
                gameComplete ? "bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-300" 
                             : "bg-blue-500/10 border-blue-500/50 text-blue-700 dark:text-blue-300"
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={cn("flex flex-col items-center gap-6 w-full", isMobile ? "md:flex-col" : "md:flex-row md:items-start md:justify-center")}>
        <div 
            ref={scrollableGridContainerRef}
            className={cn(
                "p-2 md:p-3 rounded-lg shadow-xl border-2",
                theme === 'dark' ? "border-primary/60 bg-slate-800/80" : "border-primary/40 bg-white/90",
                "backdrop-blur-sm overflow-x-auto max-w-full" 
            )}
            style={{ touchAction: isMobile && isSelecting ? 'none' : 'auto' }}
            onTouchMove={(e) => { if (isMobile && isSelecting) { e.preventDefault(); } }}
        >
            <div
                className="grid min-w-max" // min-w-max ensures grid doesn't collapse with few columns
                style={{ 
                    gridTemplateColumns: `repeat(${difficulty.cols}, minmax(0, 1fr))`,
                    gap: '0.2rem', // Reduced gap
                }}
                onMouseDown={handleGridMouseDown}
                onMouseMove={handleGridMouseOver}
                onMouseUp={handleSelectionEnd}
                onMouseLeave={() => { if (isSelecting) handleSelectionEnd();}}
                onTouchStart={handleGridTouchStart}
                onTouchMove={handleGridTouchMove}
                onTouchEnd={handleSelectionEnd}
            >
            {grid.map((row, rIndex) =>
                row.map((letter, cIndex) => (
                <div
                    key={`${rIndex}-${cIndex}`}
                    data-cell={`${rIndex}-${cIndex}`}
                    className={cn(
                        "flex items-center justify-center font-medium text-base md:text-lg rounded-sm cursor-pointer aspect-square",
                        "border", theme === 'dark' ? "border-slate-700" : "border-slate-200"
                    )}
                    style={getCellStyle(rIndex, cIndex)}
                >
                    {letter}
                </div>
                ))
            )}
            {/* Drawing lines for found words */}
            {words.filter(w => w.found && w.lineCoords).map(word => {
                 const { start, end } = word.lineCoords!;
                 const cellSize = 35.2; // approx (2.2rem * 16px/rem)
                 const gap = 3.2; // approx (0.2rem * 16px/rem)
                 
                 const x1 = start.c * (cellSize + gap) + cellSize / 2;
                 const y1 = start.r * (cellSize + gap) + cellSize / 2;
                 const x2 = end.c * (cellSize + gap) + cellSize / 2;
                 const y2 = end.r * (cellSize + gap) + cellSize / 2;

                 return (
                    <svg key={word.word} className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{zIndex: 5}}>
                        <motion.line
                            x1={x1} y1={y1}
                            x2={x2} y2={y2}
                            stroke={theme === 'dark' ? "hsla(var(--accent-hsl), 0.9)" : "hsla(var(--primary-hsl), 0.9)"}
                            strokeWidth="5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0.5 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        />
                    </svg>
                 );
            })}
            </div>
        </div>
        
        <div className={cn(
            "p-3 md:p-4 rounded-lg shadow-xl border-2 w-full",
            theme === 'dark' ? "border-primary/60 bg-slate-800/80" : "border-primary/40 bg-white/90",
            "backdrop-blur-sm",
            isMobile ? "max-w-full mt-0" : "max-w-xs md:max-w-sm sticky top-24" // Sticky for desktop
        )}>
          <h4 className="text-lg font-semibold mb-3 text-primary flex items-center"><Puzzle className="mr-2 h-5 w-5"/>Words to Find</h4>
          <div className={cn("grid gap-2", difficulty.cols < 12 || isMobile ? "grid-cols-2" : "grid-cols-2")}>
            {words.map((wordData) => (
              <motion.div
                key={wordData.word}
                className={cn(
                  "p-1.5 rounded-md text-sm flex items-center transition-all duration-300",
                  wordData.found
                    ? "bg-green-500/20 dark:bg-green-600/30 border-green-500/40"
                    : theme === 'dark' ? "bg-slate-700/50 border-slate-600/50" : "bg-slate-100/70 border-slate-300/70",
                   "border"
                )}
                initial={{ opacity: 0.8 }}
                animate={wordData.found ? { 
                    opacity: 1, 
                    scale: [1, 1.03, 1], 
                    transition: { duration: 0.5, times: [0, 0.5, 1] } 
                } : { opacity: 1 }}
              >
                {wordData.found ? (
                  <CheckCircle className="w-4 h-4 mr-1.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                ) : (
                  <span className="w-4 h-4 mr-1.5 flex-shrink-0"></span> // Placeholder for alignment
                )}
                <span className={cn(
                  "font-medium truncate",
                  wordData.found ? 'line-through text-green-700 dark:text-green-400/80 opacity-70' : 
                                   theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                )}>
                  {wordData.word}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

