import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Assets/Styles/index.css';
import './Assets/Styles/instruction.css';
import 'https://fonts.googleapis.com/css?family=Farsan'

// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.register();