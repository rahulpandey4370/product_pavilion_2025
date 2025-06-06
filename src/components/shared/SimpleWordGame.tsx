
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [size, setSize] = useState<{rows: number, cols: number}>({rows: 15, cols: 15});

  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const scrollableGridContainerRef = useRef<HTMLDivElement>(null);


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
    grid: string[][],
    word: string,
    row: number,
    col: number,
    rowDelta: number,
    colDelta: number
  ): boolean => {
    if (row < 0 || row + (word.length - 1) * rowDelta >= size.rows) return false;
    if (col < 0 || col + (word.length - 1) * colDelta >= size.cols) return false;

    for (let i = 0; i < word.length; i++) {
      const r = row + i * rowDelta;
      const c = col + i * colDelta;

      if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
        return false;
      }
    }

    return true;
  };

  const placeWord = (grid: string[][], word: string): {
    grid: string[][],
    position: {row: number, col: number, rowDelta: number, colDelta: number} | null
  } => {
    const directions = [
      {rowDelta: 0, colDelta: 1},
      {rowDelta: 1, colDelta: 0},
      {rowDelta: 1, colDelta: 1},
      {rowDelta: 1, colDelta: -1},
    ];

    const availableDirections = difficulty === 'easy'
      ? directions.slice(0, 2)
      : difficulty === 'medium'
        ? directions.slice(0, 3)
        : directions;

    const maxAttempts = 100;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const direction = availableDirections[Math.floor(Math.random() * availableDirections.length)];
      const { rowDelta, colDelta } = direction;

      let row = Math.floor(Math.random() * size.rows);
      let col = Math.floor(Math.random() * size.cols);

      if (isValidPlacement(grid, word, row, col, rowDelta, colDelta)) {
        const newGrid = [...grid.map(row => [...row])];

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

    return { grid, position: null };
  };

  const generateGrid = () => {
    let newGrid = Array(size.rows).fill('').map(() => Array(size.cols).fill(''));
    const wordPositions: {
      word: string,
      position: {row: number, col: number, rowDelta: number, colDelta: number}
    }[] = [];

    const shuffledWords = [...words]
      .sort((a, b) => b.word.length - a.word.length)
      .map(w => w.word);

    for (const word of shuffledWords) {
      const { grid: updatedGrid, position } = placeWord(newGrid, word);
      if (position) {
        newGrid = updatedGrid;
        wordPositions.push({ word, position });
      } else {
        console.log(`Could not place word: ${word}`);
      }
    }

    for (let r = 0; r < size.rows; r++) {
      for (let c = 0; c < size.cols; c++) {
        if (newGrid[r][c] === '') {
          newGrid[r][c] = randomLetter();
        }
      }
    }

    console.log("Word positions:", wordPositions);
    return newGrid;
  };

  useEffect(() => {
    setGrid(generateGrid());
    setWords(words => words.map(w => ({...w, found: false, foundTimestamp: undefined})));
    setGameComplete(false);
    setMessage('');

    if (timerRef.current) clearInterval(timerRef.current);
    setStartTime(Date.now());
    setElapsedTime(0);
    setTimerActive(isVisible);
  }, [difficulty, isVisible, size]);

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
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          if (startTime && !gameComplete && !timerRef.current) {
            setTimerActive(true);
          }
        } else {
          if (timerRef.current) {
            setTimerActive(false);
          }
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(gameContainerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [startTime, gameComplete]);

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
    if (gameComplete) return;
    setIsSelecting(true);
    setSelectedLetters([{row, col}]);
    setSelectedWord(grid[row][col]);
  };

  const handleCellHover = (row: number, col: number) => { // Renamed from handleMouseOver for clarity
    if (!isSelecting || gameComplete) return;
    if (selectedLetters.length === 0) return;

    const lastSelected = selectedLetters[selectedLetters.length - 1];
    if (lastSelected.row === row && lastSelected.col === col) return;

    const rowDiff = row - lastSelected.row;
    const colDiff = col - lastSelected.col;

    if (!((rowDiff === 0 && Math.abs(colDiff) === 1) || (colDiff === 0 && Math.abs(rowDiff) === 1) || (Math.abs(rowDiff) === 1 && Math.abs(colDiff) === 1))) {
      return;
    }

    if (selectedLetters.length > 1) {
      const prevRowDiff = lastSelected.row - selectedLetters[selectedLetters.length - 2].row;
      const prevColDiff = lastSelected.col - selectedLetters[selectedLetters.length - 2].col;
      if (prevRowDiff !== rowDiff || prevColDiff !== colDiff) {
        return;
      }
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

      if (!timerActive && !startTime) {
        setStartTime(Date.now());
        setTimerActive(true);
      }

      setTimeout(() => {
        setSelectedLetters([]);
        setSelectedWord('');
      }, 1500);
    } else {
      setSelectedLetters([]);
      setSelectedWord('');
      if (wordIndex !== -1 && words[wordIndex].found) {
        setMessage(`You already found ${words[wordIndex].word}!`);
      } else if (word.length > 2) {
        setMessage(`'${word}' is not in the list!`);
        setTimeout(() => {
          if (message === `'${word}' is not in the list!`) {
            setMessage('');
          }
        }, 2000);
      } else {
        setMessage('');
      }
    }
  };

  const handleGridTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isSelecting || gameComplete) return;

    event.preventDefault(); // Prevent page scrolling during selection

    const touch = event.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element) {
      const cellCoords = element.getAttribute('data-cell');
      if (cellCoords) {
        const [r, c] = cellCoords.split('-').map(Number);
        if (selectedLetters.length > 0) {
          const lastSelected = selectedLetters[selectedLetters.length - 1];
          // Call handleCellHover only if it's a new cell
          if (lastSelected.row !== r || lastSelected.col !== c) {
            handleCellHover(r, c);
          }
        }
      }
    }
  };

  const handleChangeDifficulty = (newDifficulty: 'easy' | 'medium' | 'hard') => {
    setDifficulty(newDifficulty);
    setWords(words.map(w => ({...w, found: false, foundTimestamp: undefined})));
    setGameComplete(false);
    setMessage('');

    if (timerRef.current) clearInterval(timerRef.current);
    setStartTime(Date.now());
    setElapsedTime(0);
    setTimerActive(true);

    if (newDifficulty === 'easy') setSize({rows: 10, cols: 10});
    else if (newDifficulty === 'medium') setSize({rows: 15, cols: 15});
    else setSize({rows: 18, cols: 18});
  };

  const resetGame = () => {
    setWords(words.map(w => ({...w, found: false, foundTimestamp: undefined})));
    setGrid(generateGrid());
    setSelectedLetters([]);
    setSelectedWord('');
    setMessage('');
    setGameComplete(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setStartTime(Date.now());
    setElapsedTime(0);
    setTimerActive(isVisible);
  };

  const isCellSelected = (row: number, col: number) => {
    return selectedLetters.some(pos => pos.row === row && pos.col === col);
  };

  const isPartOfFoundWord = (row: number, col: number) => {
    for (const wordData of words) {
      if (!wordData.found) continue;
      const word = wordData.word;
      const directions = [
        {rowDelta: 0, colDelta: 1}, {rowDelta: 1, colDelta: 0},
        {rowDelta: 1, colDelta: 1}, {rowDelta: 1, colDelta: -1},
        {rowDelta: 0, colDelta: -1}, {rowDelta: -1, colDelta: 0},
        {rowDelta: -1, colDelta: -1}, {rowDelta: -1, colDelta: 1},
      ];
      for (let rStart = 0; rStart < size.rows; rStart++) {
        for (let cStart = 0; cStart < size.cols; cStart++) {
          for (const {rowDelta, colDelta} of directions) {
            if (rStart + (word.length - 1) * rowDelta < 0 || rStart + (word.length - 1) * rowDelta >= size.rows ||
                cStart + (word.length - 1) * colDelta < 0 || cStart + (word.length - 1) * colDelta >= size.cols) {
              continue;
            }
            let matches = true;
            for (let i = 0; i < word.length; i++) {
              if (grid[rStart + i * rowDelta][cStart + i * colDelta] !== word[i]) {
                matches = false; break;
              }
            }
            if (matches) {
              for (let i = 0; i < word.length; i++) {
                if (rStart + i * rowDelta === row && cStart + i * colDelta === col) return wordData;
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
      return `${baseClasses} ${responsiveSizeClasses} bg-gradient-to-br from-primary to-purple-500 dark:from-primary dark:to-indigo-700 text-white shadow-md transform sm:scale-105`;
    } else if (foundWordData) {
      const timeSinceFound = foundWordData.foundTimestamp ? Date.now() - foundWordData.foundTimestamp : 3000;
      const isRecentlyFound = timeSinceFound < 3000;
      return `${baseClasses} ${responsiveSizeClasses} ${isRecentlyFound ? 'bg-gradient-to-br from-green-400 to-green-600 text-white sm:scale-105' : 'bg-gradient-to-br from-green-400/70 to-green-500/70 dark:from-green-500/60 dark:to-green-600/60 text-white'}`;
    } else {
      return `${baseClasses} ${responsiveSizeClasses} bg-white/90 hover:bg-secondary/40 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 hover:shadow-sm`;
    }
  };

  return (
    <div ref={gameContainerRef} className="w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mb-6 px-2">
        <h3 className="text-xl font-semibold text-center bg-gradient-to-br from-primary to-purple-600 dark:from-primary dark:to-indigo-400 text-transparent bg-clip-text">
          Find Epicor product words in the grid!
        </h3>
        {isVisible && (
          <div className="flex items-center bg-white dark:bg-slate-800 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-md border border-primary/30 dark:border-indigo-500/30 mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-primary dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-mono font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">{formatTime(elapsedTime)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 px-2">
        {['easy', 'medium', 'hard'].map((d) => (
          <button
            key={d}
            onClick={() => handleChangeDifficulty(d as 'easy' | 'medium' | 'hard')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-lg transition-all ${difficulty === d
              ? `bg-gradient-to-r ${d === 'easy' ? 'from-green-400 to-green-600' : d === 'medium' ? 'from-blue-400 to-blue-600' : 'from-red-400 to-red-600'} text-white shadow-md`
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
          <span className="font-medium text-gray-700 dark:text-gray-300">Progress</span>
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
              : 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-800 dark:text-blue-300'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring" }}
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
          className="p-2 sm:p-3 md:p-4 rounded-lg shadow-lg border-2 border-indigo-400/30 dark:border-indigo-600/30 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm relative"
          onMouseLeave={() => { // Handle mouse leaving the grid area while selecting
            if (isSelecting) {
              handleMouseUp();
            }
          }}
        >
          <div ref={scrollableGridContainerRef} className="overflow-x-auto"> {/* Allows horizontal scrolling for the grid if it's too wide */}
            <div
              className="grid min-w-max gap-[2px]" // min-w-max ensures grid takes up at least its content size
              style={{ gridTemplateColumns: `repeat(${size.cols}, minmax(0, 1fr))` }}
              onMouseUp={handleMouseUp} // Centralized mouse up handler for the grid
              onTouchEnd={handleMouseUp} // Centralized touch end handler for the grid
              onTouchMove={handleGridTouchMove} // Centralized touch move handler for the grid
            >
              {grid.map((row, rowIndex) => (
                row.map((letter, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={getCellClass(rowIndex, colIndex)}
                    data-cell={`${rowIndex}-${colIndex}`} // Used by elementFromPoint
                    onMouseDown={() => handleMouseDown(rowIndex, colIndex)} // Mouse down initiates selection
                    onMouseOver={() => handleCellHover(rowIndex, colIndex)} // Mouse drag over cells
                    onTouchStart={() => handleMouseDown(rowIndex, colIndex)} // Touch start initiates selection
                  >
                    {letter}
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:max-w-xs lg:max-w-sm p-3 sm:p-4 rounded-lg shadow-lg border-2 border-indigo-400/30 dark:border-indigo-600/30 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
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
                animate={wordData.foundTimestamp ? {
                  scale: [1, 1.05, 1],
                  borderColor: ['rgba(74, 222, 128, 0.5)', 'rgba(74, 222, 128, 0.8)', 'rgba(74, 222, 128, 0.3)'],
                  transition: {
                    duration: 1.5,
                    repeat: 0,
                    ease: "easeInOut"
                  }
                } : {}}
              >
                <div className="flex items-center">
                  {wordData.found ? (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <span className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"></span>
                  )}
                  <span className={`font-medium ${wordData.found ? 'line-through text-green-700 dark:text-green-400' : 'text-gray-800 dark:text-gray-200'}`}>
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

