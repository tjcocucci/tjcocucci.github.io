import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Router from './components/Router.jsx';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <HashRouter >
          <Router />
        </HashRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
