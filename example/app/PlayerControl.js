import React from 'react';
import { connect } from 'react-redux';
import actions from 'src/actions';
import { getCurrent, getFrames, getIsLooping, getIsShuffle, getCanPrevious, getCanNext, getIsPlaying } from 'src/selectors';
import IconButton from 'widgets/IconButton';


function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

class PlayerControl extends React.PureComponent {
  static propTypes = {
    isShuffle: React.PropTypes.bool.isRequired,
    isLooping: React.PropTypes.bool.isRequired,
    // canNext: React.PropTypes.bool.isRequired,
    // canPrevious: React.PropTypes.bool.isRequired,
    isPlaying: React.PropTypes.bool.isRequired,
    setFrames: React.PropTypes.func.isRequired,
    toggleLoop: React.PropTypes.func.isRequired,
    toggleShuffle: React.PropTypes.func.isRequired,
    next: React.PropTypes.func.isRequired,
    previous: React.PropTypes.func.isRequired,
    pause: React.PropTypes.func.isRequired,
    stop: React.PropTypes.func.isRequired,
    play: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    const { setFrames } = this.props;
    setFrames([
      { action: () => delay(1000).then(console.log('playing 0...')), name: 'Frame number 0' },
      { action: () => delay(1000).then(console.log('playing 1...')), name: 'Frame number 1' },
      { action: () => delay(1000).then(console.log('playing 2...')), name: 'Frame number 2' },
      { action: () => delay(1000).then(console.log('playing 3...')), name: 'Frame number 3' },
      { action: () => delay(1000).then(console.log('playing 4...')), name: 'Frame number 4' }
    ]);
  }

  render() {
    const {
      isPlaying, isShuffle, isLooping,
      next, previous, pause, stop, toggleLoop, toggleShuffle, play
    } = this.props;

    return (
      <div>
        {isPlaying
          ? <IconButton onClick={pause} size={8} disabled><i className="fa fa-pause-circle" aria-hidden="true" /></IconButton>
          : <IconButton onClick={play} size={8}><i className="fa fa-play-circle" aria-hidden="true" /></IconButton>
        }
        <IconButton onClick={stop} size={4}><i className="fa fa-stop-circle" aria-hidden="true" /></IconButton>

        {JSON.stringify(isLooping)}
        <br />
        {isPlaying
          ? <button onClick={pause}>pause</button>
          : <button onClick={play}>play</button>
        }
        {isPlaying && <button onClick={stop}>stop</button> }
        <button onClick={next}>next</button>
        <button onClick={previous}>previous</button>
        <br />
        <button onClick={toggleLoop}>toggleLoop</button>
        <button onClick={toggleShuffle}>{isShuffle ? 'shuffled' : 'ordered'}</button>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  frames: getFrames(state),
  current: getCurrent(state),
  isLooping: getIsLooping(state),
  isShuffle: getIsShuffle(state),
  canNext: getCanNext(state),
  canPrevious: getCanPrevious(state),
  isPlaying: getIsPlaying(state)
});


export default connect(mapStateToProps, {
  setFrames: actions.setFrames,
  toggleLoop: actions.toggleLoop,
  toggleShuffle: actions.toggleShuffle,
  next: actions.next,
  previous: actions.previous,
  start: actions.start,
  pause: actions.pause,
  stop: actions.stop,
  play: actions.play
})(PlayerControl);
