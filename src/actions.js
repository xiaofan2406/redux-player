import { getFrames, getCurrent, getIsLooping, getIsPlaying, getIsEnd, getIsShuffle } from './selectors';

export const actionTypes = {
  SET_FRAMES: 'SET_FRAMES',
  TOGGLE_SHUFFLE: 'TOGGLE_SHUFFLE',
  TOGGLE_LOOP: 'TOGGLE_LOOP',
  START: 'START',
  PAUSE: 'PAUSE',
  RESET: 'RESET',
  NEXT: 'NEXT',
  PREVIOUS: 'PREVIOUS'
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

const reset = () => ({
  type: actionTypes.RESET
});

const play = () => async (dispatch, getState) => {
  // start playing list
  if (getIsEnd(getState())) { // restart if list is exhausted
    dispatch(reset());
  }
  dispatch(start());

  while (getIsPlaying(getState())) {
    const state = getState();
    const frames = getFrames(state);
    const current = getCurrent(state);
    const currentFrame = frames[current];

    // start playing frame
    await currentFrame.action();
    // finish playing frame

    const newState = getState();

    if (getIsPlaying(newState)) {
      dispatch(next());
    }

    if (getIsEnd(newState)) {
      if (getIsLooping(newState) && !getIsShuffle(newState)) {
        dispatch(reset());
      } else {
        dispatch(pause());
      }
    }
  }
};

const stop = () => (dispatch) => {
  dispatch(pause());
  dispatch(reset());
};

export default {
  setFrames,
  toggleShuffle,
  toggleLoop,
  next,
  previous,
  start,
  pause,
  reset,
  play,
  stop
};
