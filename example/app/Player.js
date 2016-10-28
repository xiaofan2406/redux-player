import React from 'react';

import PlayerList from './PlayerList';
import PlayerDisplay from './PlayerDisplay';
import PlayerControl from './PlayerControl';
import './Player.css';


function Player() {
  return (
    <div className="Player">
      <div className="Player-list">
        <PlayerList />
      </div>
      <div className="Player-main">
        <div className="Player-display">
          <PlayerDisplay />
        </div>
        <div className="Player-control">
          <PlayerControl />
        </div>
      </div>
    </div>
  );
}


export default Player;
