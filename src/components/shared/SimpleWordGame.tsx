
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile'; // Import useIsMobile

// Define data for the word search game
type WordData = {
  word: string;
  found: boolean;
  foundTimestamp?: number; // Track when the word was found
};

export default function SimpleWordGame() {
  // Words related to Epicor products (extracted from booth_data)
  const [words, setWords] = useState<WordData[]>([
    { word: 'KINETIC', found: false },
    { word: 'PRISM', found: false },
    { word: 'MATTEC', found: false },
    { word: 'QUICKSHIP', found: false },
    { word: 'TROPOS', found: false },
    { word: 'EPICONNECT', found: false },
    { word: 'DOCUMATCH', found: false },
    { word: 'ITRACE', found: false },
    { word: 'IMAGEN', found: false },
    { word: 'ASCEND', found: false },
  ]);

  const [grid, setGrid] = useState<string[][]>([]);
  const [selectedLetters, setSelectedLetters] = useState<{row: number, col: number}[]>([]);
  const [selectedWord, setSelectedWord] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [completionPercent, setCompletionPercent] = useState<number>(0);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy'); // Default to easy
  const [size, setSize] = useState<{rows: number, cols: number}>(() => {
    // Initial size based on default 'easy' difficulty
    return {rows: 10, cols: 10};
  });

  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const scrollableGridContainerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile(); // Hook to check for mobile screen size

  useEffect(() => {
    const scrollableElement = scrollableGridContainerRef.current;
    if (scrollableElement) {
      if (isSelecting && !gameComplete) {
        scrollableElement.style.overflowX = 'hidden';
      } else {
        scrollableElement.style.overflowX = 'auto';
      }
    }
  }, [isSelecting, gameComplete]);

  const randomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.charAt(Math.floor(Math.random() * letters.length));
  };

  const isValidPlacement = (
    currentGrid: string[][],
    word: string,
    row: number,
    col: number,
    rowDelta: number,
    colDelta: number
  ): boolean => {
    // Check bounds for the start of the word
    if (row < 0 || row >= size.rows || col < 0 || col >= size.cols) return false;
    // Check bounds for the end of the word
    if (row + (word.length - 1) * rowDelta < 0 || row + (word.length - 1) * rowDelta >= size.rows) return false;
    if (col + (word.length - 1) * colDelta < 0 || col + (word.length - 1) * colDelta >= size.cols) return false;

    for (let i = 0; i < word.length; i++) {
      const r = row + i * rowDelta;
      const c = col + i * colDelta;

      if (currentGrid[r][c] !== '' && currentGrid[r][c] !== word[i]) {
        return false;
      }
    }
    return true;
  };
  
  const placeWord = (currentGrid: string[][], word: string): {
    grid: string[][],
    position: {row: number, col: number, rowDelta: number, colDelta: number} | null
  } => {
    const directions = [
      {rowDelta: 0, colDelta: 1},  // Horizontal (Right)
      {rowDelta: 1, colDelta: 0},  // Vertical (Down)
      {rowDelta: 1, colDelta: 1},  // Diagonal (Down-Right)
      {rowDelta: 1, colDelta: -1}, // Diagonal (Down-Left) - Only for medium/hard
      // For Hard, we can also add reversed directions implicitly by trying to place reversed words
      // or explicitly add these:
      // {rowDelta: 0, colDelta: -1}, // Horizontal (Left)
      // {rowDelta: -1, colDelta: 0}, // Vertical (Up)
      // {rowDelta: -1, colDelta: -1},// Diagonal (Up-Left)
      // {rowDelta: -1, colDelta: 1}, // Diagonal (Up-Right)
    ];

    let availableDirections = difficulty === 'easy'
      ? directions.slice(0, 2) // Horizontal, Vertical
      : difficulty === 'medium'
        ? directions.slice(0, 3) // Horizontal, Vertical, Diagonal Down-Right
        : directions; // All defined directions for hard (or more if added)

    const maxAttempts = 100; // Increased attempts
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const direction = availableDirections[Math.floor(Math.random() * availableDirections.length)];
      const { rowDelta, colDelta } = direction;

      // Determine a random starting position for the word
      // Ensure the start position allows the word to fit given its length and direction
      let row, col;
      if (rowDelta >= 0) {
          row = Math.floor(Math.random() * (size.rows - Math.max(0, (word.length -1) * rowDelta) ));
      } else {
          row = Math.floor(Math.random() * (size.rows + (word.length -1) * rowDelta )) - (word.length -1) * rowDelta;
      }
      if (colDelta >= 0) {
          col = Math.floor(Math.random() * (size.cols - Math.max(0, (word.length -1) * colDelta) ));
      } else {
          col = Math.floor(Math.random() * (size.cols + (word.length -1) * colDelta )) - (word.length -1) * colDelta;
      }


      if (isValidPlacement(currentGrid, word, row, col, rowDelta, colDelta)) {
        const newGrid = [...currentGrid.map(r => [...r])]; // Ensure deep copy for modification

        for (let i = 0; i < word.length; i++) {
          const r = row + i * rowDelta;
          const c = col + i * colDelta;
          newGrid[r][c] = word[i];
        }

        return {
          grid: newGrid,
          position: {
            row,
            col,
            rowDelta,
            colDelta
          }
        };
      }
    }

    return { grid: currentGrid, position: null }; // Return original grid if placement fails
  };

  const generateGrid = useCallback(() => {
    let newGrid = Array(size.rows).fill(null).map(() => Array(size.cols).fill(''));

    const wordsToPlace = [...words] // Use a copy of the current words state
      .sort((a, b) => b.word.length - a.word.length) // Place longer words first
      .map(w => w.word);

    for (const word of wordsToPlace) {
      const { grid: updatedGrid, position } = placeWord(newGrid, word);
      if (position) {
        newGrid = updatedGrid;
      } else {
        // console.warn(`Could not place word: ${word} in a ${size.rows}x${size.cols} grid with difficulty ${difficulty}`);
      }
    }

    // Fill remaining empty cells with random letters
    for (let r = 0; r < size.rows; r++) {
      for (let c = 0; c < size.cols; c++) {
        if (newGrid[r][c] === '') {
          newGrid[r][c] = randomLetter();
        }
      }
    }
    return newGrid;
  }, [size.rows, size.cols, words, difficulty]); // Added difficulty and words here


  useEffect(() => {
    if (isVisible) { // Only generate grid if component is visible
        setGrid(generateGrid());
        setWords(currentWords => currentWords.map(w => ({...w, found: false, foundTimestamp: undefined})));
        setGameComplete(false);
        setMessage('');

        if (timerRef.current) clearInterval(timerRef.current);
        setStartTime(Date.now());
        setElapsedTime(0);
        setTimerActive(true);
    } else {
        // Optionally clear grid or stop timer when not visible
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            setTimerActive(false);
        }
    }
  }, [difficulty, isVisible, size, generateGrid]); // generateGrid is now a dependency

  useEffect(() => {
    if (timerActive && startTime && isVisible) {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      timerRef.current = window.setInterval(() => {
        if (startTime) {
          setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
        }
      }, 1000);
    } else if ((!timerActive || !isVisible) && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [timerActive, startTime, isVisible]);

  useEffect(() => {
    if (!gameContainerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isVisible) { // If becoming visible and wasn't before
            setIsVisible(true);
        } else if (!entry.isIntersecting && isVisible) { // If becoming not visible and was before
            setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );
    observer.observe(gameContainerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [isVisible]); // Added isVisible to dependencies


  useEffect(() => {
    const foundCount = words.filter(w => w.found).length;
    const newPercent = Math.floor((foundCount / words.length) * 100);
    setCompletionPercent(newPercent);

    if (newPercent === 100 && !gameComplete) {
      setGameComplete(true);
      setTimerActive(false);
      setMessage(`Congratulations! You found all the words in ${formatTime(elapsedTime)}!`);
    }
  }, [words, elapsedTime, gameComplete]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMouseDown = (row: number, col: number) => {
    if (gameComplete || grid.length === 0 || grid[row] === undefined || grid[row][col] === undefined) return;
    setIsSelecting(true);
    setSelectedLetters([{row, col}]);
    setSelectedWord(grid[row][col]);
  };

  const handleCellHover = (row: number, col: number) => {
    if (!isSelecting || gameComplete || grid.length === 0 || grid[row] === undefined || grid[row][col] === undefined) return;
    if (selectedLetters.length === 0) return;

    const lastSelected = selectedLetters[selectedLetters.length - 1];
    if (lastSelected.row === row && lastSelected.col === col) return;

    const rowDiff = row - lastSelected.row;
    const colDiff = col - lastSelected.col;

    // Allow only straight or diagonal lines
    if (!( (Math.abs(rowDiff) <= 1 && colDiff === 0) || // Vertical
           (Math.abs(colDiff) <= 1 && rowDiff === 0) || // Horizontal
           (Math.abs(rowDiff) === 1 && Math.abs(colDiff) === 1) // Diagonal
        )) {
      return;
    }

    // If continuing a line, ensure it's in the same direction
    if (selectedLetters.length > 1) {
      const secondLastSelected = selectedLetters[selectedLetters.length - 2];
      const prevRowDiff = lastSelected.row - secondLastSelected.row;
      const prevColDiff = lastSelected.col - secondLastSelected.col;

      // Normalize current diff to be unit (e.g., (2,0) -> (1,0))
      const unitRowDiff = rowDiff === 0 ? 0 : rowDiff / Math.abs(rowDiff);
      const unitColDiff = colDiff === 0 ? 0 : colDiff / Math.abs(colDiff);

      if (prevRowDiff !== unitRowDiff || prevColDiff !== unitColDiff) {
        return; // Not continuing in the same direction
      }
    }


    // Check if this cell is already selected to prevent re-adding
    if (selectedLetters.some(pos => pos.row === row && pos.col === col)) {
        // If the user is backtracking along the selection, remove the last cell
        if (selectedLetters.length > 1 && selectedLetters[selectedLetters.length - 2].row === row && selectedLetters[selectedLetters.length - 2].col === col) {
            setSelectedLetters(prev => prev.slice(0, -1));
            setSelectedWord(prevWord => prevWord.slice(0, -1));
        }
        return;
    }


    setSelectedLetters(prev => [...prev, {row, col}]);
    setSelectedWord(prevWord => prevWord + grid[row][col]);
  };

  const handleMouseUp = () => {
    if (!isSelecting || gameComplete) return;
    setIsSelecting(false);

    if (selectedLetters.length <= 1) {
      setSelectedLetters([]);
      setSelectedWord('');
      return;
    }

    const word = selectedWord.toUpperCase();
    const reversedWord = word.split('').reverse().join('');
    const wordIndex = words.findIndex(w => w.word === word || w.word === reversedWord);

    if (wordIndex !== -1 && !words[wordIndex].found) {
      setMessage(`You found ${words[wordIndex].word}!`);
      const newWords = [...words];
      newWords[wordIndex].found = true;
      newWords[wordIndex].foundTimestamp = Date.now();
      setWords(newWords);

      // Do not reset timer here; it should continue if game is not complete
      // if (!timerActive && !startTime) { 
      //   setStartTime(Date.now());
      //   setTimerActive(true);
      // }

      setTimeout(() => {
        setSelectedLetters([]);
        setSelectedWord('');
        // setMessage(''); // Clear message after a bit, or let next interaction clear it
      }, 1500); // Keep selection visible for a bit
    } else {
      // Clear selection immediately if not a new word or already found
      setSelectedLetters([]);
      setSelectedWord('');
      if (wordIndex !== -1 && words[wordIndex].found) {
        setMessage(`You already found ${words[wordIndex].word}!`);
      } else if (word.length > 2) { // Only show "not in list" for reasonably long words
        setMessage(`'${word}' is not in the list.`);
      } else {
        setMessage(''); // Clear message for very short non-words
      }
      // Clear message after a short delay if it's an error/info message
      if (wordIndex === -1 || words[wordIndex].found) {
        setTimeout(() => {
          if (message === (`'${word}' is not in the list.`) || message === (`You already found ${words[wordIndex]?.word}!`)) {
            setMessage('');
          }
        }, 2000);
      }
    }
  };

  const handleGridTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isSelecting || gameComplete) return;

    event.preventDefault();

    const touch = event.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element) {
      const cellCoords = element.getAttribute('data-cell');
      if (cellCoords) {
        const [r, c] = cellCoords.split('-').map(Number);
        if (selectedLetters.length > 0) {
          const lastSelected = selectedLetters[selectedLetters.length - 1];
          if (lastSelected.row !== r || lastSelected.col !== c) {
            handleCellHover(r, c);
          }
        }
      }
    }
  };

  const handleChangeDifficulty = useCallback((newDifficulty: 'easy' | 'medium' | 'hard') => {
    setDifficulty(newDifficulty);
    // setWords(currentWords => currentWords.map(w => ({...w, found: false, foundTimestamp: undefined})));
    // setGameComplete(false);
    // setMessage('');

    if (newDifficulty === 'easy') setSize({rows: 10, cols: 10});
    else if (newDifficulty === 'medium') setSize({rows: 15, cols: 15});
    else setSize({rows: 18, cols: 18});
    
    // Game reset logic is now primarily handled by the useEffect watching [difficulty, isVisible, size]
    // So, we just need to ensure isVisible might trigger a re-generation if it's already true.
    // Or, explicitly call reset parts here:
    setWords(currentWords => currentWords.map(w => ({...w, found: false, foundTimestamp: undefined})));
    setGameComplete(false);
    setMessage('');
    if (timerRef.current) clearInterval(timerRef.current);
    setStartTime(Date.now()); // Reset start time for new difficulty
    setElapsedTime(0);
    setTimerActive(isVisible); // Re-evaluate timer based on visibility
    // The useEffect watching [difficulty, isVisible, size] will call generateGrid.

  }, [isVisible, words]); // words dependency removed as it's reset inside

  // Effect to handle responsive difficulty changes
  useEffect(() => {
    if (isMobile && (difficulty === 'medium' || difficulty === 'hard')) {
      handleChangeDifficulty('easy');
    }
  }, [isMobile, difficulty, handleChangeDifficulty]);


  const resetGame = useCallback(() => {
    // Difficulty remains the same, but grid and words are reset
    setWords(currentWords => currentWords.map(w => ({...w, found: false, foundTimestamp: undefined})));
    setGrid(generateGrid()); // Regenerate grid with current difficulty/size
    setSelectedLetters([]);
    setSelectedWord('');
    setMessage('');
    setGameComplete(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setStartTime(Date.now());
    setElapsedTime(0);
    setTimerActive(isVisible);
  }, [generateGrid, isVisible]); // Added generateGrid and isVisible

  const isCellSelected = (row: number, col: number) => {
    return selectedLetters.some(pos => pos.row === row && pos.col === col);
  };

  // This function needs to be efficient or memoized if grid/words change frequently
  // For now, it's okay as it runs on cell render.
  const isPartOfFoundWord = (row: number, col: number) => {
    if (grid.length === 0) return null; // Ensure grid is initialized

    for (const wordData of words) {
        if (!wordData.found) continue;
        const word = wordData.word;

        // This logic assumes words are placed only in limited directions.
        // For a more robust solution, store word positions when generating the grid.
        // Or, implement a more exhaustive search (can be slow).
        // Simplified check: iterate through all possible start cells and directions for the found word.
        const directions = [
            {rD: 0, cD: 1}, {rD: 1, cD: 0}, {rD: 1, cD: 1}, {rD: 1, cD: -1}, // Standard
            {rD: 0, cD: -1}, {rD: -1, cD: 0}, {rD: -1, cD: -1}, {rD: -1, cD: 1} // Reversed
        ];

        for (let rStart = 0; rStart < size.rows; rStart++) {
            for (let cStart = 0; cStart < size.cols; cStart++) {
                for (const {rD, cD} of directions) {
                    let currentWord = '';
                    let path = [];
                    let match = true;
                    for (let i = 0; i < word.length; i++) {
                        const curR = rStart + i * rD;
                        const curC = cStart + i * cD;
                        if (curR < 0 || curR >= size.rows || curC < 0 || curC >= size.cols || grid[curR][curC] !== word[i]) {
                            match = false;
                            break;
                        }
                        path.push({r: curR, c: curC});
                    }
                    if (match) {
                        // Word found starting at (rStart, cStart) in direction (rD, cD)
                        // Check if (row, col) is part of this found word path
                        if (path.some(p => p.r === row && p.c === col)) {
                            return wordData; // Return the wordData object
                        }
                    }
                }
            }
        }
    }
    return null;
  };


  const getCellClass = (row: number, col: number) => {
    const baseClasses = "flex items-center justify-center select-none rounded font-semibold border transition-all";
    const responsiveSizeClasses = "w-6 h-6 text-xs sm:w-7 sm:h-7 sm:text-sm md:w-8 md:h-8 md:text-base";
    const foundWordData = isPartOfFoundWord(row, col);

    if (isCellSelected(row, col)) {
      return `${baseClasses} ${responsiveSizeClasses} bg-gradient-to-br from-primary to-purple-500 dark:from-primary dark:to-indigo-700 text-primary-foreground shadow-md transform sm:scale-105`;
    } else if (foundWordData) {
      const timeSinceFound = foundWordData.foundTimestamp ? Date.now() - foundWordData.foundTimestamp : 3001; // Default to >3s
      const isRecentlyFound = timeSinceFound < 3000;
      return `${baseClasses} ${responsiveSizeClasses} ${isRecentlyFound ? 'bg-gradient-to-br from-green-400 to-green-600 text-white sm:scale-105' : 'bg-gradient-to-br from-green-400/70 to-green-500/70 dark:from-green-500/60 dark:to-green-600/60 text-white'} cursor-default`;
    } else {
      return `${baseClasses} ${responsiveSizeClasses} bg-card hover:bg-secondary/40 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 hover:shadow-sm cursor-pointer`;
    }
  };
  
  if (!isVisible && !grid.length) { // If not visible and grid not yet generated (initial load)
    return (
        <div ref={gameContainerRef} className="w-full flex flex-col items-center p-8 min-h-[300px] justify-center">
            <p className="text-muted-foreground">Loading Word Search Game...</p>
        </div>
    );
  }


  return (
    <div ref={gameContainerRef} className="w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mb-6 px-2">
        <h3 className="text-xl font-semibold text-center bg-gradient-to-br from-primary to-purple-600 dark:from-primary dark:to-indigo-400 text-transparent bg-clip-text">
          Find Epicor product words in the grid!
        </h3>
        {isVisible && ( // Only show timer if game is visible
          <div className="flex items-center bg-card dark:bg-slate-800 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-md border border-primary/30 dark:border-indigo-500/30 mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-primary dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-mono font-medium text-foreground dark:text-gray-200 text-sm sm:text-base">{formatTime(elapsedTime)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 px-2">
        {['easy'].map((d) => (
          <button
            key={d}
            onClick={() => handleChangeDifficulty(d as 'easy')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-lg transition-all ${difficulty === d
              ? `bg-gradient-to-r ${d === 'easy' ? 'from-green-400 to-green-600' : d === 'medium' ? 'from-blue-400 to-blue-600' : 'from-red-400 to-red-600'} text-white shadow-md`
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
        {!isMobile && ['medium', 'hard'].map((d) => (
          <button
            key={d}
            onClick={() => handleChangeDifficulty(d as 'medium' | 'hard')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-lg transition-all ${difficulty === d
              ? `bg-gradient-to-r ${d === 'medium' ? 'from-blue-400 to-blue-600' : 'from-red-400 to-red-600'} text-white shadow-md`
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
        <button
          onClick={resetGame}
          className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md transition-all"
        >
          New Puzzle
        </button>
      </div>

      <div className="w-full max-w-sm sm:max-w-md mb-6 px-2">
        <div className="text-xs sm:text-sm mb-1 flex justify-between">
          <span className="font-medium text-muted-foreground">Progress</span>
          <span className="font-semibold text-primary dark:text-indigo-400">{completionPercent}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 sm:h-3 shadow-inner overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 h-full rounded-full shadow-sm"
            initial={{ width: 0 }}
            animate={{ width: `${completionPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            className={`mb-6 px-4 py-2 sm:px-6 sm:py-3 text-sm rounded-lg shadow-md border ${
              gameComplete
              ? 'bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30 text-green-800 dark:text-green-300'
              : message.startsWith('You found')
                ? 'bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30 text-green-800 dark:text-green-300'
                : 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-800 dark:text-blue-300'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="font-medium">{message}</div>
            {gameComplete && (
              <div className="text-xs sm:text-sm mt-1 opacity-80">
                Your time: {formatTime(elapsedTime)}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-start w-full px-2">
        <div
          className="p-2 sm:p-3 md:p-4 rounded-lg shadow-lg border-2 border-indigo-400/30 dark:border-indigo-600/30 bg-card/90 dark:bg-slate-900/90 backdrop-blur-sm relative"
          onMouseLeave={() => { 
            if (isSelecting) {
              handleMouseUp();
            }
          }}
        >
          <div ref={scrollableGridContainerRef} className="overflow-x-auto"> 
            <div
              className="grid min-w-max gap-[2px]" 
              style={{ gridTemplateColumns: `repeat(${size.cols}, minmax(0, 1fr))` }}
              onMouseUp={handleMouseUp} 
              onTouchEnd={handleMouseUp} 
              onTouchMove={handleGridTouchMove}
            >
              {grid.map((rowLetters, rowIndex) => (
                rowLetters.map((letter, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={getCellClass(rowIndex, colIndex)}
                    data-cell={`${rowIndex}-${colIndex}`} 
                    onMouseDown={() => handleMouseDown(rowIndex, colIndex)} 
                    onMouseOver={() => handleCellHover(rowIndex, colIndex)} 
                    onTouchStart={() => handleMouseDown(rowIndex, colIndex)} 
                  >
                    {letter}
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:max-w-xs lg:max-w-sm p-3 sm:p-4 rounded-lg shadow-lg border-2 border-indigo-400/30 dark:border-indigo-600/30 bg-card/90 dark:bg-slate-900/90 backdrop-blur-sm">
          <h4 className="text-base sm:text-lg font-semibold mb-3 text-primary dark:text-indigo-400">Words to Find</h4>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {words.map((wordData, index) => (
              <motion.div
                key={index}
                className={`p-1.5 sm:p-2 text-xs sm:text-sm rounded-md transition-all ${
                  wordData.found
                    ? 'bg-gradient-to-r from-green-400/20 to-green-500/20 dark:from-green-500/30 dark:to-green-600/30 border border-green-400/30 dark:border-green-500/30'
                    : 'bg-gray-100 dark:bg-gray-800 border border-transparent'
                }`}
                animate={wordData.found && wordData.foundTimestamp && (Date.now() - wordData.foundTimestamp < 3000) ? {
                  scale: [1, 1.05, 1],
                  borderColor: ['rgba(74, 222, 128, 0.3)', 'rgba(74, 222, 128, 0.7)', 'rgba(74, 222, 128, 0.3)'],
                  transition: {
                    duration: 1.5,
                    ease: "easeInOut"
                  }
                } : {}}
              >
                <div className="flex items-center">
                  {wordData.found ? (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <span className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 shrink-0"></span>
                  )}
                  <span className={`font-medium truncate ${wordData.found ? 'line-through text-green-700 dark:text-green-400' : 'text-foreground dark:text-gray-200'}`}>
                    {wordData.word}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

