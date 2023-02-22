import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Router from './components/Router.jsx';

function App() {
  return (
    <div className="App">
        <HashRouter >
          <Router />
        </HashRouter>
    </div>
  );
}

export default App;
