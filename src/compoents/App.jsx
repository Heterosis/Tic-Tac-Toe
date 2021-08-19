import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Game from './Game';
import style from './App.module.css';

const App = () => (
  <div>
    <div className={`${style.ReverseRow}`}>
      <a className={`${style.Link}`} href="https://github.com/Heterosis/Tic-Tac-Toe" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: 40 }} />
      </a>
    </div>
    <Game />
  </div>
);

export default App;
