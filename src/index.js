import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import PathRoute from "./consts/path/PathRoute";

import Commerce from './commerce/Commerce';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path={PathRoute.COMMERCE()} component={() => <Commerce />} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
