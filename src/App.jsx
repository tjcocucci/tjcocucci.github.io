import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './components/Router.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/tjcocucci.github.io">
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
