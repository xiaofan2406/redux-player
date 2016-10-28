import React from 'react';

import PlayerList from './PlayerList';
import PlayerDisplay from './PlayerDisplay';
import PlayerControl from './PlayerControl';


function Player() {
  return (
    <div className="Player">
      <PlayerList />
      <PlayerDisplay />
      <PlayerControl />
    </div>
  );
}


export default Player;
