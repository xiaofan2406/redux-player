import React from 'react';
import { connect } from 'react-redux';
import actions from 'src/actions';
import { getIsLooping, getIsShuffle, getCanPrevious, getCanNext, getIsPlaying } from 'src/selectors';
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
    canNext: React.PropTypes.bool.isRequired,
    canPrevious: React.PropTypes.bool.isRequired,
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
      { action: () => delay(1000).then(console.log('playing 0...')), name: 'Frame number 0', duration: 1000 },
      { action: () => delay(1000).then(console.log('playing 1...')), name: 'Frame number 1', duration: 1000 },
      { action: () => delay(1000).then(console.log('playing 2...')), name: 'Frame number 2', duration: 1000 },
      { action: () => delay(1000).then(console.log('playing 3...')), name: 'Frame number 3', duration: 1000 },
      { action: () => delay(1000).then(console.log('playing 4...')), name: 'Frame number 4', duration: 1000 }
    ]);
  }

  render() {
    const {
      isPlaying, isShuffle, isLooping, canPrevious, canNext,
      next, previous, pause, stop, toggleLoop, toggleShuffle, play
    } = this.props;

    return (
      <div>
        <IconButton title="Previous" onClick={previous} disabled={!canPrevious}><i className="fa fa-step-backward" aria-hidden="true" /></IconButton>

        {isPlaying
          ? <IconButton onClick={pause} size={8}><i className="fa fa-pause-circle" aria-hidden="true" /></IconButton>
          : <IconButton onClick={play} size={8}><i className="fa fa-play-circle" aria-hidden="true" /></IconButton>
        }
        <IconButton onClick={stop}><i className="fa fa-stop-circle" aria-hidden="true" /></IconButton>
        <IconButton title="Next" onClick={next} disabled={!canNext}><i className="fa fa-step-forward" aria-hidden="true" /></IconButton>
        <IconButton title="Shuffle" onClick={toggleShuffle} active={isShuffle}><i className="fa fa-random" aria-hidden="true" /></IconButton>
        <IconButton title="Loop" onClick={toggleLoop} active={isLooping}><i className="fa fa-refresh" aria-hidden="true" /></IconButton>
      </div>
    );
  }
}


const mapStateToProps = state => ({
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
