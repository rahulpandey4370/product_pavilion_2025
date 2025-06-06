
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, XIcon, Lightbulb, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CrosswordEntry {
  id: number;
  word: string;
  clue: string;
  direction: 'across' | 'down';
  row: number;
  col: number;
  number: number;
}

interface CellState {
  char: string;
  isWritable: boolean;
  clueNumbers: { across?: number; down?: number };
  isHighlighted: boolean;
  isCurrentInput: boolean;
  isRevealed: boolean;
  isIncorrect: boolean;
}

const puzzleEntries: CrosswordEntry[] = [
  // Manually curated - aiming for some intersections
  // Clues inspired by booth_data.ts
  { id: 1, number: 1, word: 'KINETIC', clue: "Epicor's flagship ERP platform for intelligent operations.", direction: 'across', row: 2, col: 1 },
  { id: 2, number: 2, word: 'MOBILE', clue: "Enabling on-the-go access, like ECM's bulk approvals.", direction: 'across', row: 5, col: 3 },
  { id: 3, number: 3, word: 'PRISM', clue: "Epicor's AI toolkit for enhanced analytics and agents.", direction: 'across', row: 8, col: 7 },
  { id: 4, number: 4, word: 'REVIEW', clue: "AI can help ____ pull requests or summarize supplier interactions.", direction: 'across', row: 11, col: 1 },
  { id: 5, number: 5, word: 'MATTEC', clue: "Legacy MES product getting a new web-based UX.", direction: 'across', row: 13, col: 5 },

  { id: 6, number: 6, word: 'CLOUD', clue: "Modern deployment model for software like Kinetic.", direction: 'down', row: 0, col: 3 },
  { id: 7, number: 7, word: 'AGENT', clue: "AI helper, such as List, Metric, or Multimodal ____.", direction: 'down', row: 2, col: 6 },
  { id: 8, number: 8, word: 'INVOICE', clue: "E-____ing is a CSF focus for global financial transactions.", direction: 'down', row: 5, col: 0 },
  { id: 9, number: 9, word: 'MODULE', clue: "A distinct functional part of a software system.", direction: 'down', row: 7, col: 9 },
  { id: 10, number: 10, word: 'TROPOS', clue: "ERP solution designed for process manufacturers.", direction: 'down', row: 9, col: 3 },
];


const GRID_SIZE = 15;

const initialGrid = (): CellState[][] => {
  const grid = Array(GRID_SIZE)
    .fill(null)
    .map(() =>
      Array(GRID_SIZE)
        .fill(null)
        .map(() => ({
          char: '',
          isWritable: false,
          clueNumbers: {},
          isHighlighted: false,
          isCurrentInput: false,
          isRevealed: false,
          isIncorrect: false,
        }))
    );

  puzzleEntries.forEach(entry => {
    for (let i = 0; i < entry.word.length; i++) {
      const r = entry.direction === 'across' ? entry.row : entry.row + i;
      const c = entry.direction === 'across' ? entry.col + i : entry.col;
      if (r < GRID_SIZE && c < GRID_SIZE) {
        grid[r][c].isWritable = true;
        if (i === 0) {
          if (entry.direction === 'across') grid[r][c].clueNumbers.across = entry.number;
          else grid[r][c].clueNumbers.down = entry.number;
        }
      }
    }
  });
  return grid;
};


export default function CrosswordPuzzle() {
  const [grid, setGrid] = useState<CellState[][]>(initialGrid());
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);
  const [currentDirection, setCurrentDirection] = useState<'across' | 'down'>('across');
  const [selectedClue, setSelectedClue] = useState<CrosswordEntry | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[][]>(
    Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(null))
  );
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  const resetHighlights = useCallback(() => {
    setGrid(prevGrid =>
      prevGrid.map(row =>
        row.map(cell => ({ ...cell, isHighlighted: false, isCurrentInput: false, isIncorrect: false }))
      )
    );
  }, []);

  const highlightWordCells = useCallback((entry: CrosswordEntry | null, currentCell?: { row: number; col: number }) => {
    resetHighlights();
    if (!entry) return;

    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row =>
        row.map(cell => ({ ...cell, isHighlighted: false, isCurrentInput: false }))
      );
      for (let i = 0; i < entry.word.length; i++) {
        const r = entry.direction === 'across' ? entry.row : entry.row + i;
        const c = entry.direction === 'across' ? entry.col + i : entry.col;
        if (r < GRID_SIZE && c < GRID_SIZE && newGrid[r][c].isWritable) {
          newGrid[r][c].isHighlighted = true;
          if (currentCell && r === currentCell.row && c === currentCell.col) {
            newGrid[r][c].isCurrentInput = true;
          }
        }
      }
      return newGrid;
    });
  }, [resetHighlights]);


  const handleCellClick = (row: number, col: number) => {
    if (!grid[row][col].isWritable) return;

    let newDirection = currentDirection;
    let entryForCell: CrosswordEntry | undefined;

    if (selectedClue && selectedClue.direction === currentDirection) {
        // Check if the clicked cell is part of the currently selected clue
        let partOfSelectedClue = false;
        if (currentDirection === 'across' && row === selectedClue.row && col >= selectedClue.col && col < selectedClue.col + selectedClue.word.length) {
            partOfSelectedClue = true;
        } else if (currentDirection === 'down' && col === selectedClue.col && row >= selectedClue.row && row < selectedClue.row + selectedClue.word.length) {
            partOfSelectedClue = true;
        }
        if (partOfSelectedClue) {
            // If it is, keep the direction and clue
            entryForCell = selectedClue;
        }
    }
    
    // If not part of selected clue or no selected clue, determine new primary clue
    if (!entryForCell) {
        if (newDirection === 'across' && grid[row][col].clueNumbers.across) {
            entryForCell = puzzleEntries.find(e => e.number === grid[row][col].clueNumbers.across && e.direction === 'across');
        } else if (newDirection === 'down' && grid[row][col].clueNumbers.down) {
            entryForCell = puzzleEntries.find(e => e.number === grid[row][col].clueNumbers.down && e.direction === 'down');
        } else { // Try other direction if primary not available or not starting point
            if (newDirection === 'across' && grid[row][col].clueNumbers.down) {
                newDirection = 'down';
                entryForCell = puzzleEntries.find(e => e.number === grid[row][col].clueNumbers.down && e.direction === 'down');
            } else if (newDirection === 'down' && grid[row][col].clueNumbers.across) {
                newDirection = 'across';
                entryForCell = puzzleEntries.find(e => e.number === grid[row][col].clueNumbers.across && e.direction === 'across');
            }
        }
    }

     // If still no entry, try to find any word that passes through this cell in current direction
    if (!entryForCell) {
        entryForCell = puzzleEntries.find(e => e.direction === newDirection && (
            (e.direction === 'across' && e.row === row && col >= e.col && col < e.col + e.word.length) ||
            (e.direction === 'down' && e.col === col && row >= e.row && row < e.row + e.word.length)
        ));
    }
    // If STILL no entry, flip direction and try again
    if (!entryForCell) {
        newDirection = newDirection === 'across' ? 'down' : 'across';
        entryForCell = puzzleEntries.find(e => e.direction === newDirection && (
            (e.direction === 'across' && e.row === row && col >= e.col && col < e.col + e.word.length) ||
            (e.direction === 'down' && e.col === col && row >= e.row && row < e.row + e.word.length)
        ));
    }


    setActiveCell({ row, col });
    setSelectedClue(entryForCell || null);
    setCurrentDirection(newDirection);
    highlightWordCells(entryForCell || null, { row, col });
    inputRefs.current[row][col]?.focus();
    inputRefs.current[row][col]?.select();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const char = e.target.value.toUpperCase();
    const newGrid = grid.map(r => r.map(c => ({...c, isIncorrect: false }))); // Clear previous incorrect flags
    if (newGrid[row][col].isWritable) {
      newGrid[row][col].char = char.length > 0 ? char[0] : '';
      setGrid(newGrid);

      if (char.length > 0 && selectedClue) {
        let nextRow = row;
        let nextCol = col;

        if (currentDirection === 'across') {
          nextCol++;
        } else {
          nextRow++;
        }

        // Check if next cell is within the selected clue's bounds
        let inBounds = false;
        if (currentDirection === 'across' && nextCol < selectedClue.col + selectedClue.word.length) {
            inBounds = true;
        } else if (currentDirection === 'down' && nextRow < selectedClue.row + selectedClue.word.length) {
            inBounds = true;
        }

        if (inBounds && nextRow < GRID_SIZE && nextCol < GRID_SIZE && grid[nextRow][nextCol].isWritable) {
          setActiveCell({ row: nextRow, col: nextCol });
          highlightWordCells(selectedClue, { row: nextRow, col: nextCol });
          inputRefs.current[nextRow][nextCol]?.focus();
          inputRefs.current[nextRow][nextCol]?.select();
        } else {
            // End of current word, remove highlight or focus next word
            highlightWordCells(null);
            setActiveCell(null);
        }
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, row: number, col: number) => {
    let nextRow = row;
    let nextCol = col;
    let newDirection = currentDirection;
    let newSelectedClue = selectedClue;

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      nextRow = Math.max(0, row - 1);
      newDirection = 'down';
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      nextRow = Math.min(GRID_SIZE - 1, row + 1);
      newDirection = 'down';
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextCol = Math.max(0, col - 1);
      newDirection = 'across';
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextCol = Math.min(GRID_SIZE - 1, col + 1);
      newDirection = 'across';
    } else if (e.key === 'Backspace') {
        if (grid[row][col].char === '') { // If current cell is empty, move to previous
            if (currentDirection === 'across') {
                nextCol = Math.max(0, col - 1);
            } else {
                nextRow = Math.max(0, row - 1);
            }
        } else { // If current cell has char, just clear it, don't move focus yet
            const newGrid = [...grid];
            newGrid[row][col].char = '';
            setGrid(newGrid);
            // setActiveCell({row,col}); // Keep focus on current cell
            // highlightWordCells(selectedClue, {row,col});
            // inputRefs.current[row][col]?.focus();
            return; // Don't move focus on backspace if char was deleted
        }
    } else if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        // Try to find the next clue
        if (selectedClue) {
            const currentClueIndex = puzzleEntries.findIndex(p => p.id === selectedClue.id);
            const nextClue = puzzleEntries[(currentClueIndex + 1) % puzzleEntries.length];
            if (nextClue) {
                handleClueSelect(nextClue);
                return;
            }
        }
    }


    if (grid[nextRow][nextCol]?.isWritable) {
        if (newDirection !== currentDirection || !selectedClue ||
            (newDirection === 'across' && (nextRow !== selectedClue.row || nextCol < selectedClue.col || nextCol >= selectedClue.col + selectedClue.word.length)) ||
            (newDirection === 'down' && (nextCol !== selectedClue.col || nextRow < selectedClue.row || nextRow >= selectedClue.row + selectedClue.word.length))
        ) {
             // Find the new clue based on the new active cell and direction
            newSelectedClue = puzzleEntries.find(entry =>
                entry.direction === newDirection &&
                (newDirection === 'across' ? (entry.row === nextRow && nextCol >= entry.col && nextCol < entry.col + entry.word.length)
                                       : (entry.col === nextCol && nextRow >= entry.row && nextRow < entry.row + entry.word.length))
            );
             if (!newSelectedClue && grid[nextRow][nextCol].clueNumbers[newDirection]) {
                newSelectedClue = puzzleEntries.find(e => e.number === grid[nextRow][nextCol].clueNumbers[newDirection] && e.direction === newDirection);
            }
        }


      setActiveCell({ row: nextRow, col: nextCol });
      setCurrentDirection(newDirection);
      setSelectedClue(newSelectedClue || null);
      highlightWordCells(newSelectedClue || null, { row: nextRow, col: nextCol });
      inputRefs.current[nextRow][nextCol]?.focus();
      inputRefs.current[nextRow][nextCol]?.select();
    }
  };


  const handleClueSelect = (entry: CrosswordEntry) => {
    setSelectedClue(entry);
    setCurrentDirection(entry.direction);
    setActiveCell({ row: entry.row, col: entry.col });
    highlightWordCells(entry, {row: entry.row, col: entry.col});
    inputRefs.current[entry.row][entry.col]?.focus();
    inputRefs.current[entry.row][entry.col]?.select();
  };

  const checkAnswers = () => {
    setShowIncorrect(true);
    let allCorrect = true;
    const newGrid = grid.map(row => row.map(cell => ({ ...cell, isIncorrect: false })));

    puzzleEntries.forEach(entry => {
      for (let i = 0; i < entry.word.length; i++) {
        const r = entry.direction === 'across' ? entry.row : entry.row + i;
        const c = entry.direction === 'across' ? entry.col + i : entry.col;
        if (r < GRID_SIZE && c < GRID_SIZE && newGrid[r][c].isWritable) {
          if (newGrid[r][c].char !== entry.word[i]) {
            newGrid[r][c].isIncorrect = true;
            allCorrect = false;
          }
        }
      }
    });
    setGrid(newGrid);
    // Remove incorrect highlights after a delay
    setTimeout(() => {
        setGrid(prevGrid => prevGrid.map(row => row.map(cell => ({ ...cell, isIncorrect: false }))));
        setShowIncorrect(false);
    }, 3000);
    return allCorrect;
  };

  const revealAllAnswers = () => {
    setIsRevealing(true);
    const newGrid = grid.map(r => r.map(c => ({...c, isRevealed: false})));
     puzzleEntries.forEach(entry => {
      for (let i = 0; i < entry.word.length; i++) {
        const r = entry.direction === 'across' ? entry.row : entry.row + i;
        const c = entry.direction === 'across' ? entry.col + i : entry.col;
        if (r < GRID_SIZE && c < GRID_SIZE && newGrid[r][c].isWritable) {
          newGrid[r][c].char = entry.word[i];
          newGrid[r][c].isRevealed = true; // Mark as revealed for animation
        }
      }
    });
    setGrid(newGrid);
    setSelectedClue(null);
    setActiveCell(null);
    resetHighlights();
    setTimeout(() => { // Remove revealed flag after animation
        setGrid(prevGrid => prevGrid.map(row => row.map(cell => ({ ...cell, isRevealed: false }))));
        setIsRevealing(false);
    }, puzzleEntries.reduce((max, entry) => Math.max(max, entry.word.length), 0) * 100 + 500); // Animation duration based on longest word
  };

  const resetPuzzle = () => {
    setGrid(initialGrid());
    setActiveCell(null);
    setSelectedClue(null);
    setCurrentDirection('across');
    setShowIncorrect(false);
    setIsRevealing(false);
  };

  const getCellClasses = (cell: CellState, row: number, col: number) => {
    const baseSizeClasses = "w-6 h-6 text-xs sm:w-7 sm:h-7 sm:text-sm"; // Adjusted for mobile first
    let classes = cn(
      baseSizeClasses,
      'border border-muted/30 flex items-center justify-center relative transition-all duration-150 ease-in-out',
      'focus-within:ring-2 focus-within:ring-primary focus-within:z-10'
    );
    if (!cell.isWritable) {
      classes = cn(classes, 'bg-background/30 pointer-events-none');
    } else {
      classes = cn(classes, 'bg-card hover:bg-muted/20');
      if (cell.isCurrentInput) {
        classes = cn(classes, 'bg-primary/20 ring-2 ring-primary sm:scale-105');
      } else if (cell.isHighlighted) {
        classes = cn(classes, 'bg-primary/10');
      }
      if (cell.isIncorrect && showIncorrect) {
        classes = cn(classes, '!bg-destructive/70 text-destructive-foreground sm:scale-105');
      }
      if (cell.isRevealed) {
        classes = cn(classes, 'animate-pulse bg-accent/30');
      }
    }
    return classes;
  };
  
  const acrossClues = puzzleEntries.filter(e => e.direction === 'across').sort((a,b) => a.number - b.number);
  const downClues = puzzleEntries.filter(e => e.direction === 'down').sort((a,b) => a.number - b.number);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full py-12"
    >
      <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start justify-center">
        {/* Grid */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-3 sm:p-4 bg-card/80 rounded-xl shadow-2xl border border-border/20 backdrop-blur-sm w-full max-w-md mx-auto lg:max-w-lg lg:mx-0"
        >
          <div className="overflow-x-auto">
            <div 
              className="grid gap-[2px] min-w-max" // min-w-max allows grid to size to content, overflow-x-auto handles scrolling
              style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
            >
              {grid.map((rowArr, rowIndex) =>
                rowArr.map((cell, colIndex) => (
                  <motion.div
                    key={`${rowIndex}-${colIndex}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (rowIndex * GRID_SIZE + colIndex) * 0.01 }}
                    className={getCellClasses(cell, rowIndex, colIndex)}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {cell.clueNumbers.across || cell.clueNumbers.down ? (
                      <span className="absolute top-[1px] left-[2px] text-muted-foreground text-[0.6rem] leading-none font-medium">
                        {cell.clueNumbers.across || cell.clueNumbers.down}
                      </span>
                    ) : null}
                    <input
                      ref={el => (inputRefs.current[rowIndex][colIndex] = el)}
                      type="text"
                      maxLength={1}
                      value={cell.char}
                      onChange={e => handleInputChange(e, rowIndex, colIndex)}
                      onKeyDown={e => handleKeyDown(e, rowIndex, colIndex)}
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                      onFocus={() => handleCellClick(rowIndex, colIndex)}
                      className={cn(
                        "w-full h-full text-center uppercase bg-transparent outline-none p-0",
                        "font-semibold text-foreground",
                        "focus:text-primary" 
                      )}
                      disabled={!cell.isWritable}
                      aria-label={`Cell ${rowIndex}, ${colIndex}`}
                    />
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </motion.div>

        {/* Clues & Controls */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full lg:w-[450px] xl:w-[500px] space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 max-h-[300px] md:max-h-[380px] overflow-y-auto pr-2 rounded-lg bg-card/50 p-4 border border-border/10">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary gradient-text">Across</h3>
              <ul className="space-y-1.5">
                {acrossClues.map(entry => (
                  <li
                    key={`across-${entry.id}`}
                    onClick={() => handleClueSelect(entry)}
                    className={cn(
                      "cursor-pointer p-1.5 rounded-md transition-all text-sm",
                      "hover:bg-primary/10",
                      selectedClue?.id === entry.id && selectedClue.direction === 'across' ? 'bg-primary/20 text-primary-foreground font-medium ring-1 ring-primary' : 'text-muted-foreground'
                    )}
                  >
                    <span className="font-bold mr-1.5">{entry.number}.</span> {entry.clue}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary gradient-text">Down</h3>
              <ul className="space-y-1.5">
                {downClues.map(entry => (
                  <li
                    key={`down-${entry.id}`}
                    onClick={() => handleClueSelect(entry)}
                     className={cn(
                      "cursor-pointer p-1.5 rounded-md transition-all text-sm",
                      "hover:bg-primary/10",
                      selectedClue?.id === entry.id && selectedClue.direction === 'down' ? 'bg-primary/20 text-primary-foreground font-medium ring-1 ring-primary' : 'text-muted-foreground'
                    )}
                  >
                    <span className="font-bold mr-1.5">{entry.number}.</span> {entry.clue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
           <div className="flex flex-wrap gap-2 justify-center pt-2">
            <Button onClick={checkAnswers} variant="outline" size="sm" className="hover:bg-green-500/80 hover:text-white border-green-500/50 text-green-600">
              <Check className="mr-2 h-4 w-4" /> Check
            </Button>
            <Button onClick={revealAllAnswers} variant="outline" size="sm" className="hover:bg-sky-500/80 hover:text-white border-sky-500/50 text-sky-600">
              <Lightbulb className="mr-2 h-4 w-4" /> Reveal
            </Button>
            <Button onClick={resetPuzzle} variant="outline" size="sm" className="hover:bg-destructive/80 hover:text-white border-destructive/50 text-destructive/80">
              <RefreshCcw className="mr-2 h-4 w-4" /> Reset
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Ensure Motion H3 is defined if you plan to use it this way (or just use motion.h3)
// const MotionH3 = motion.h3;
// Style tag removed, assuming global styles cover these aspects or they are handled by Tailwind.
// Focus styles might need to be carefully managed if inputs are small on mobile.
// Consider touch interactions for clue selection if not already handled well by onClick.
