import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import App from 'compoents/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

ReactDOM.render(<App name="react" />, document.getElementById('app'));
