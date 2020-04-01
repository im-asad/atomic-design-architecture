import React from 'react';
import {BrowserRouter, Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from "./routes/routes";

import './App.css';

export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Router history={history}>
                <Routes />
            </Router>
        </BrowserRouter>
    </div>
  );
}

export default App;
