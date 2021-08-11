import React, { useMemo, useState } from 'react';
import hash from 'object-hash';

import Board from './Board';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [turnX, setTurnX] = useState(true);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    squares[i] = turnX ? 'X' : 'O';

    setHistory(newHistory.concat([{ squares }]));
    setStepNumber(newHistory.length);
    setTurnX(((pre) => !pre));
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setTurnX(step % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Back to the start';
    return (
      <li key={hash(move)}>
        <button type="button" onClick={() => jumpTo(move)}>
          {desc}
          , Player:
          {' '}
          {(move % 2) === 0 ? 'X' : 'O'}
        </button>
      </li>
    );
  });

  const status = useMemo(() => {
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    if (winner) {
      return `Winner: ${winner}`;
    } if (current.squares.indexOf(null) === -1) {
      return 'Call it a draw.';
    }
    return `Next player: ${turnX ? 'X' : 'O'}`;
  }, [history, stepNumber]);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={history[stepNumber].squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
