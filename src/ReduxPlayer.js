import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';
import { getCurrent, getFrames, getIsLooping, getIsShuffle, getCanPrevious, getCanNext, getIsPlaying } from './selectors';


function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

class ReduxPlayer extends React.PureComponent {
  static propTypes = {
    // { action, duration }
    frames: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    current: React.PropTypes.number.isRequired,
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
    // start: React.PropTypes.func.isRequired,
    pause: React.PropTypes.func.isRequired,
    finish: React.PropTypes.func.isRequired,
    // reset: React.PropTypes.func.isRequired,
    play: React.PropTypes.func.isRequired
  };

  // constructor(props) {
  //   super(props);
  //
  //   this.play = this.play.bind(this);
  // }

  componentDidMount() {
    const { setFrames } = this.props;
    setFrames([
      { action: () => delay(1000).then(console.log(0)), duration: 1000 },
      { action: () => delay(2000).then(console.log(1)), duration: 2000 },
      { action: () => delay(3000).then(console.log(2)), duration: 3000 },
      { action: () => delay(4000).then(console.log(3)), duration: 4000 },
      { action: () => delay(5000).then(console.log(4)), duration: 5000 }
    ]);
  }

  // async play() {
  //   const { start, next, finish, reset } = this.props;
  //
  //   start();
  //   do {
  //     console.log(this.props.frames);
  //     const currentFrame = this.props.frames[this.props.current];
  //     await currentFrame.action();
  //     next();
  //     if (this.props.current === this.props.frames.length - 1) {
  //       if (this.props.isLooping) {
  //         reset();
  //       } else {
  //         finish();
  //       }
  //     }
  //   } while (this.props.isPlaying);
  // }

  render() {
    const {
      frames, current, canNext, canPrevious, isPlaying, isShuffle, isLooping,
      next, previous, pause, finish, toggleLoop, toggleShuffle, play
    } = this.props;

    return (
      <div>
        <br />
        {JSON.stringify(frames, '', 2)}
        <br />
        {JSON.stringify(frames[current])}
        <br />
        {JSON.stringify(isLooping)}
        <br />
        {isPlaying
          ? <button onClick={pause}>pause</button>
          : <button onClick={play}>play</button>
        }
        {isPlaying && <button onClick={finish}>finish</button> }
        <button onClick={next} disabled={!canNext}>next</button>
        <button onClick={previous} disabled={!canPrevious}>previous</button>
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
  finish: actions.finish,
  reset: actions.reset,
  play: actions.play
})(ReduxPlayer);
