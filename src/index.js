import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter, Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Parent from './components/Parent'
import './style/index.css'


ReactDOM.render(<Parent/>,document.getElementById('root'));

serviceWorker.unregister();
