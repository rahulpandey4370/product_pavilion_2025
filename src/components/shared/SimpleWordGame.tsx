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
  
  // Add timer state
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  
  // Add visibility state
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const gameRef = useRef<HTMLDivElement>(null);

  // Generate random letters to fill the grid
  const randomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.charAt(Math.floor(Math.random() * letters.length));
  };

  // Check if a placement is valid
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

  // Place a word in the grid
  const placeWord = (grid: string[][], word: string): {
    grid: string[][], 
    position: {row: number, col: number, rowDelta: number, colDelta: number} | null
  } => {
    const directions = [
      {rowDelta: 0, colDelta: 1}, // Horizontal
      {rowDelta: 1, colDelta: 0}, // Vertical
      {rowDelta: 1, colDelta: 1}, // Diagonal down-right
      {rowDelta: 1, colDelta: -1}, // Diagonal down-left
    ];
    
    // Only use horizontal and vertical for easy
    const availableDirections = difficulty === 'easy' 
      ? directions.slice(0, 2) 
      : difficulty === 'medium'
        ? directions.slice(0, 3)
        : directions;
    
    // Try to place the word multiple times
    const maxAttempts = 100;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const direction = availableDirections[Math.floor(Math.random() * availableDirections.length)];
      const { rowDelta, colDelta } = direction;
      
      let row = Math.floor(Math.random() * size.rows);
      let col = Math.floor(Math.random() * size.cols);
      
      if (isValidPlacement(grid, word, row, col, rowDelta, colDelta)) {
        const newGrid = [...grid.map(row => [...row])];
        
        // Place the word
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
    
    // Could not place the word
    return { grid, position: null };
  };

  // Generate the grid with words
  const generateGrid = () => {
    // Create empty grid
    let newGrid = Array(size.rows).fill('').map(() => Array(size.cols).fill(''));
    const wordPositions: {
      word: string,
      position: {row: number, col: number, rowDelta: number, colDelta: number}
    }[] = [];
    
    // Place each word
    const shuffledWords = [...words]
      .sort((a, b) => b.word.length - a.word.length) // Place longer words first
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
    
    // Fill remaining cells with random letters
    for (let r = 0; r < size.rows; r++) {
      for (let c = 0; c < size.cols; c++) {
        if (newGrid[r][c] === '') {
          newGrid[r][c] = randomLetter();
        }
      }
    }
    
    // Debug: Show where each word is placed
    console.log("Word positions:", wordPositions);
    return newGrid;
  };
  // Initialize the grid
  useEffect(() => {
    setGrid(generateGrid());
    
    // Reset found words and timer when difficulty changes
    setWords(words => words.map(w => ({...w, found: false, foundTimestamp: undefined})));
    setGameComplete(false);
    setMessage('');
    
    // Reset timer
    if (timerRef.current) clearInterval(timerRef.current);
    setStartTime(Date.now());
    setElapsedTime(0);
    // Only activate timer if component is visible
    setTimerActive(isVisible);
  }, [difficulty, isVisible]);

  // Timer function with improved accuracy
  useEffect(() => {
    if (timerActive && startTime && isVisible) {
      // Initial update for immediate display
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      
      // Set interval for updates
      timerRef.current = window.setInterval(() => {
        if (startTime) {
          const now = Date.now();
          setElapsedTime(Math.floor((now - startTime) / 1000));
        }
      }, 1000);
    } else if ((!timerActive || !isVisible) && timerRef.current) {
      // Clean up timer if not active or not visible
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [timerActive, startTime, isVisible]);

  // Set up intersection observer to detect when game is in view
  useEffect(() => {
    if (!gameRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
        
        // Only handle timer when intersection status changes
        if (entry.isIntersecting) {
          // Game is visible, resume timer if needed
          if (startTime && !gameComplete && !timerRef.current) {
            setTimerActive(true);
          }
        } else {
          // Game is not visible, pause timer if it's running
          if (timerRef.current) {
            setTimerActive(false);
          }
        }
      },
      { threshold: 0.2 } // Trigger when at least 20% of the component is visible
    );
    
    observer.observe(gameRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, [startTime, gameComplete]);

  // Calculate completion percentage
  useEffect(() => {
    const foundCount = words.filter(w => w.found).length;
    const newPercent = Math.floor((foundCount / words.length) * 100);
    setCompletionPercent(newPercent);
    
    if (newPercent === 100 && !gameComplete) {
      setGameComplete(true);
      setTimerActive(false); // Stop the timer when game is complete
      setMessage(`Congratulations! You found all the words in ${formatTime(elapsedTime)}!`);
    }
  }, [words, elapsedTime, gameComplete]);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle mouse drag selection
  const handleMouseDown = (row: number, col: number) => {
    setIsSelecting(true);
    setSelectedLetters([{row, col}]);
    setSelectedWord(grid[row][col]);
  };
  const handleMouseOver = (row: number, col: number) => {
    if (!isSelecting) return;
    
    // Add safety check for empty selectedLetters array
    if (selectedLetters.length === 0) return;
    
    const lastSelected = selectedLetters[selectedLetters.length - 1];
    
    // Only allow straight line selection
    const rowDiff = row - lastSelected.row;
    const colDiff = col - lastSelected.col;
    
    // Is this a valid selection direction?
    if (!(
      // Horizontal
      (rowDiff === 0 && Math.abs(colDiff) === 1) ||
      // Vertical
      (colDiff === 0 && Math.abs(rowDiff) === 1) ||
      // Diagonal
      (Math.abs(rowDiff) === 1 && Math.abs(colDiff) === 1)
    )) {
      return;
    }
    
    // Check if we're following the same direction
    if (selectedLetters.length > 1) {
      const prevRowDiff = lastSelected.row - selectedLetters[selectedLetters.length - 2].row;
      const prevColDiff = lastSelected.col - selectedLetters[selectedLetters.length - 2].col;
      
      if (prevRowDiff !== rowDiff || prevColDiff !== colDiff) {
        return;
      }
    }
    
    // Add the new letter
    setSelectedLetters([...selectedLetters, {row, col}]);
    setSelectedWord(prevWord => prevWord + grid[row][col]);
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
    
    // If no letters selected, do nothing
    if (selectedLetters.length <= 1) {
      setSelectedLetters([]);
      setSelectedWord('');
      return;
    }
    
    // Check if the selected word matches any word in our list
    const word = selectedWord.toUpperCase();
    const reversedWord = word.split('').reverse().join('');
    
    const wordIndex = words.findIndex(w => 
      w.word === word || w.word === reversedWord
    );
    
    if (wordIndex !== -1 && !words[wordIndex].found) {
      // Word found! Update UI and provide feedback
      setMessage(`You found ${words[wordIndex].word}!`);
      
      // Mark the word as found with current timestamp
      const newWords = [...words];
      newWords[wordIndex].found = true;
      newWords[wordIndex].foundTimestamp = Date.now();
      setWords(newWords);
      
      // Start timer on first word found if not already started
      if (!timerActive && !startTime) {
        setStartTime(Date.now());
        setTimerActive(true);
      }
      
      // Keep the highlighted selection for visual feedback
      setTimeout(() => {
        setSelectedLetters([]);
        setSelectedWord('');
      }, 1500); // Increased time for better visibility
    } else {
      // Not a valid word or already found
      setSelectedLetters([]);
      setSelectedWord('');
      
      if (wordIndex !== -1 && words[wordIndex].found) {
        setMessage(`You already found ${words[wordIndex].word}!`);
      } else if (word.length > 2) {
        setMessage(`'${word}' is not in the list!`);
        
        // Display message only briefly for invalid words
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

  // Change difficulty
  const handleChangeDifficulty = (newDifficulty: 'easy' | 'medium' | 'hard') => {
    setDifficulty(newDifficulty);
    setWords(words.map(w => ({...w, found: false, foundTimestamp: undefined})));
    setGameComplete(false);
    setMessage('');
    
    // Reset timer
    if (timerRef.current) clearInterval(timerRef.current);
    setStartTime(Date.now());
    setElapsedTime(0);
    setTimerActive(true);
    
    // Adjust grid size based on difficulty
    if (newDifficulty === 'easy') {
      setSize({rows: 10, cols: 10});
    } else if (newDifficulty === 'medium') {
      setSize({rows: 15, cols: 15});
    } else {
      setSize({rows: 18, cols: 18});
    }
  };
  // Reset the game
  const resetGame = () => {
    // Reset all words to not found and clear their timestamps
    setWords(words.map(w => ({...w, found: false, foundTimestamp: undefined})));
    setGrid(generateGrid());
    setSelectedLetters([]);
    setSelectedWord('');
    setMessage('');
    setGameComplete(false);
    
    // Reset timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    // Start fresh timer
    setStartTime(Date.now());
    setElapsedTime(0);
    // Only activate timer if component is visible
    setTimerActive(isVisible);
  };

  // Check if a cell is selected
  const isCellSelected = (row: number, col: number) => {
    return selectedLetters.some(pos => pos.row === row && pos.col === col);
  };

  // Check if a cell is part of a found word
  const isPartOfFoundWord = (row: number, col: number) => {
    // Check each found word
    for (const wordData of words) {
      if (!wordData.found) continue;
      
      // Get all possible positions for this word in the grid
      const word = wordData.word;
      
      for (let r = 0; r < size.rows; r++) {
        for (let c = 0; c < size.cols; c++) {
          // Check all directions
          const directions = [
            {rowDelta: 0, colDelta: 1}, // Horizontal
            {rowDelta: 1, colDelta: 0}, // Vertical
            {rowDelta: 1, colDelta: 1}, // Diagonal down-right
            {rowDelta: 1, colDelta: -1}, // Diagonal down-left
            {rowDelta: 0, colDelta: -1}, // Horizontal reversed
            {rowDelta: -1, colDelta: 0}, // Vertical reversed
            {rowDelta: -1, colDelta: -1}, // Diagonal up-left
            {rowDelta: -1, colDelta: 1}, // Diagonal up-right
          ];
          
          // Check each direction
          for (const {rowDelta, colDelta} of directions) {
            // If this position is out of bounds for this word length, skip
            if (
              r + (word.length - 1) * rowDelta < 0 ||
              r + (word.length - 1) * rowDelta >= size.rows ||
              c + (word.length - 1) * colDelta < 0 ||
              c + (word.length - 1) * colDelta >= size.cols
            ) {
              continue;
            }
            
            // Check if word matches in this direction
            let matches = true;
            for (let i = 0; i < word.length; i++) {
              const checkRow = r + i * rowDelta;
              const checkCol = c + i * colDelta;
              if (grid[checkRow][checkCol] !== word[i]) {
                matches = false;
                break;
              }
            }
            
            // If word matches, check if current cell is part of it
            if (matches) {
              for (let i = 0; i < word.length; i++) {
                const checkRow = r + i * rowDelta;
                const checkCol = c + i * colDelta;
                if (checkRow === row && checkCol === col) {
                  return wordData;
                }
              }
            }
          }
        }
      }
    }
    
    return null;
  };

  // Cell styling
  const getCellClass = (row: number, col: number) => {
    const baseClasses = "w-8 h-8 flex items-center justify-center select-none rounded font-semibold border transition-all";
    
    // Check if cell is part of a found word
    const foundWordData = isPartOfFoundWord(row, col);
    
    if (isCellSelected(row, col)) {
      // Colorful gradient when selected
      return `${baseClasses} bg-gradient-to-br from-primary to-purple-500 dark:from-primary dark:to-indigo-700 text-white shadow-md transform scale-110`;
    } else if (foundWordData) {
      // Green gradient for found words with animation timing
      const timeSinceFound = foundWordData.foundTimestamp ? Date.now() - foundWordData.foundTimestamp : 3000;
      const isRecentlyFound = timeSinceFound < 3000;
      
      return `${baseClasses} ${
        isRecentlyFound 
          ? 'bg-gradient-to-br from-green-400 to-green-600 text-white scale-105' 
          : 'bg-gradient-to-br from-green-400/70 to-green-500/70 dark:from-green-500/60 dark:to-green-600/60 text-white'
      }`;
    } else {
      // Light/dark mode adaptive styling
      return `${baseClasses} bg-white/90 hover:bg-secondary/40 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 hover:shadow-sm`;
    }
  };
  return (
    <div ref={gameRef} className="w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mb-6">
        <h3 className="text-xl font-semibold text-center bg-gradient-to-br from-primary to-purple-600 dark:from-primary dark:to-indigo-400 text-transparent bg-clip-text">
          Find Epicor product words in the grid!
        </h3>
        
        {/* Timer display */}
        {isVisible && (
          <div className="flex items-center bg-white dark:bg-slate-800 rounded-lg px-4 py-2 shadow-md border border-primary/30 dark:border-indigo-500/30 mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-mono font-medium text-gray-800 dark:text-gray-200">{formatTime(elapsedTime)}</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button 
          onClick={() => handleChangeDifficulty('easy')} 
          className={`px-4 py-2 rounded-lg transition-all ${difficulty === 'easy' 
            ? 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md' 
            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
        >
          Easy
        </button>
        <button 
          onClick={() => handleChangeDifficulty('medium')} 
          className={`px-4 py-2 rounded-lg transition-all ${difficulty === 'medium' 
            ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md' 
            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
        >
          Medium
        </button>
        <button 
          onClick={() => handleChangeDifficulty('hard')} 
          className={`px-4 py-2 rounded-lg transition-all ${difficulty === 'hard' 
            ? 'bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md' 
            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
        >
          Hard
        </button>
        <button 
          onClick={resetGame} 
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md transition-all"
        >
          New Puzzle
        </button>
      </div>
      
      {/* Completion meter */}
      <div className="w-full max-w-md mb-6">
        <div className="text-sm mb-1 flex justify-between">
          <span className="font-medium text-gray-700 dark:text-gray-300">Progress</span>
          <span className="font-semibold text-primary dark:text-indigo-400">{completionPercent}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner overflow-hidden">
          <motion.div 
            className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 h-3 rounded-full shadow-sm"
            initial={{ width: 0 }}
            animate={{ width: `${completionPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      
      {/* Message */}
      <AnimatePresence mode="wait">
        {message && (
          <motion.div 
            className={`mb-6 px-6 py-3 rounded-lg shadow-md border ${
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
              <div className="text-sm mt-1 opacity-80">
                Your time: {formatTime(elapsedTime)}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full">
        {/* Word Search Grid */}
        <div 
          className="p-4 rounded-lg shadow-lg border-2 border-indigo-400/30 dark:border-indigo-600/30 bg-white/90 dark:bg-slate-800/90 backdrop-blur relative"
          style={{ touchAction: 'none' }}
          onTouchMove={(e) => e.preventDefault()}
          onMouseLeave={() => {
            if (isSelecting) {
              handleMouseUp();
            }
          }}
          ref={gameRef}
        >
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${size.cols}, minmax(0, 1fr))` }}>
            {grid.map((row, rowIndex) => (
              row.map((letter, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={getCellClass(rowIndex, colIndex)}
                  onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                  onMouseOver={() => handleMouseOver(rowIndex, colIndex)}
                  onMouseUp={handleMouseUp}
                  onTouchStart={() => handleMouseDown(rowIndex, colIndex)}
                  onTouchMove={(e) => {
                    // Get touch position and convert to grid coordinates
                    const touch = e.touches[0];
                    const element = document.elementFromPoint(touch.clientX, touch.clientY);
                    const cellCoords = element?.getAttribute('data-cell');
                    if (cellCoords) {
                      const [r, c] = cellCoords.split('-').map(Number);
                      handleMouseOver(r, c);
                    }
                  }}
                  onTouchEnd={handleMouseUp}
                  data-cell={`${rowIndex}-${colIndex}`}
                >
                  {letter}
                </div>
              ))
            ))}
          </div>
        </div>
        
        {/* Word List */}
        <div className="p-4 rounded-lg shadow-lg border-2 border-indigo-400/30 dark:border-indigo-600/30 bg-white/90 dark:bg-slate-800/90 backdrop-blur w-full max-w-md">
          <h4 className="text-lg font-semibold mb-3 text-primary dark:text-indigo-400">Words to Find</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {words.map((wordData, index) => (
              <motion.div 
                key={index}
                className={`p-2 rounded-md transition-all ${
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
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <span className="w-4 h-4 mr-2"></span>
                  )}
                  <span className={`font-medium ${wordData.found ? 'line-through text-green-700 dark:text-green-400' : ''}`}>
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
