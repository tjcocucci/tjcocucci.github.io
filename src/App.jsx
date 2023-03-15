import React from 'react';
import { HashRouter } from 'react-router-dom';
import Router from './components/Router.jsx';
import BackgroundImage from './components/BackgroundImage.jsx';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <HashRouter>
        <div className="main-column">
          <Router />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
