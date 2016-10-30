import React from 'react';

import Player from './Player';
import './App.css';


/* Use functions rather than constant elements for better debugging */
function App() {
  return (
    <div className="App">
      <div className="App-header" />
      <div className="App-main">
        <Player />
      </div>
      <div className="App-footer" />
    </div>
  );
}


export default App;
