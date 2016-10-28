import { getFrames, getCurrent, getIsLooping, getIsPlaying, getIsEnd } from './selectors';

export const actionTypes = {
  SET_FRAMES: 'SET_FRAMES',
  TOGGLE_SHUFFLE: 'TOGGLE_SHUFFLE',
  TOGGLE_LOOP: 'TOGGLE_LOOP',
  SHUFFLE_ON: 'SHUFFLE_ON',
  SHUFFLE_OFF: 'SHUFFLE_OFF',
  LOOP_ON: 'LOOP_ON',
  LOOP_OFF: 'LOOP_OFF',
  START: 'START',
  PAUSE: 'PAUSE',
  FINISH: 'FINISH',
  NEXT: 'NEXT',
  PREVIOUS: 'PREVIOUS',
  RESET: 'RESET'
};


const setFrames = frames => ({
  type: actionTypes.SET_FRAMES,
  payload: frames
});

const toggleShuffle = () => ({
  type: actionTypes.TOGGLE_SHUFFLE
});

const toggleLoop = () => ({
  type: actionTypes.TOGGLE_LOOP
});

const shuffleOn = () => ({
  type: actionTypes.SHUFFLE_ON
});

const shuffleOff = () => ({
  type: actionTypes.SHUFFLE_OFF
});

const loopOn = () => ({
  type: actionTypes.LOOP_ON
});

const loopOff = () => ({
  type: actionTypes.LOOP_OFF
});

const next = () => ({
  type: actionTypes.NEXT
});

const previous = () => ({
  type: actionTypes.PREVIOUS
});

const start = () => ({
  type: actionTypes.START
});

const pause = () => ({
  type: actionTypes.PAUSE
});

const finish = () => ({
  type: actionTypes.FINISH
});

const reset = () => ({
  type: actionTypes.RESET
});

const play = () => async (dispatch, getState) => {
  dispatch(start());

  while (getIsPlaying(getState())) {
    const state = getState();
    const frames = getFrames(state);
    const current = getCurrent(state);
    const currentFrame = frames[current];
    await currentFrame.action();
    dispatch(next());
    if (getIsEnd(getState())) {
      if (getIsLooping(getState())) {
        dispatch(reset());
      } else {
        dispatch(finish());
      }
    }
  }
};


export default {
  setFrames,
  toggleShuffle,
  toggleLoop,
  shuffleOn,
  shuffleOff,
  loopOn,
  loopOff,
  next,
  previous,
  start,
  pause,
  finish,
  reset,
  play
};
