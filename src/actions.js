const selectors = require('./selectors');
const actionTypes = require('./constants');


const { getFrames, getCurrent, getIsLooping, getIsPlaying, getIsEnd, getIsShuffle }
  = selectors;

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

const beginFrame = () => ({
  type: actionTypes.BEGIN_FRAME
});

const endFrame = () => ({
  type: actionTypes.END_FRAME
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

    // dispatch(beginFrame()); // FIXME this doesnt do anything yet
    await currentFrame.action();

    if (getIsPlaying(getState())) { // if FINISH was issued during frame playing
      dispatch(endFrame());
      dispatch(next());
    }

    const newState = getState();

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


exports.setFrames = setFrames;
exports.toggleShuffle = toggleShuffle;
exports.toggleLoop = toggleLoop;
exports.beginFrame = beginFrame;
exports.endFrame = endFrame;
exports.next = next;
exports.previous = previous;
exports.start = start;
exports.pause = pause;
exports.reset = reset;
exports.play = play;
exports.stop = stop;
