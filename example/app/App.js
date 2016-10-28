import React from 'react';

import Player from './Player';

/* Use functions rather than constant elements for better debugging */
function App() {
  return (
    <div className="App">
      <div className="App-header">
        header
      </div>
      <div className="App-main">
        <Player />
      </div>
      <div className="App-footer">
        footer
      </div>
    </div>
  );
}


export default App;
