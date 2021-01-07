import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
require('dotenv').config()



ReactDOM.render(
  
    <React.StrictMode>
      <Router>
        <App />
      </Router>
      
  
    </React.StrictMode>
  ,
  document.getElementById('root')
);

