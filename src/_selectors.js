const getFrames = state => state.frames;

const getCurrent = state => state.current;

const getCurrentFrame = state => state.frames[getCurrent(state)];

const getIsLooping = state => state.isLooping;

const getIsShuffle = state => state.isShuffle;

const getIsPlaying = state => state.isPlaying;

const getHistory = state => state.history;

const getIsEnd = (state) => {
  if (getIsShuffle(state)) {
    return false;
  }

  const history = getHistory(state);
  return history[history.length - 1] >= getFrames(state).length - 1;
};

const getCanNext = (state) => {
  if (getIsPlaying(state)) {
    return false;
  }
  if (getIsShuffle(state)) {
    return true;
  }
  return getCurrent(state) < getFrames(state).length - 1;
};

const getCanPrevious = (state) => {
  if (getIsPlaying(state)) {
    return false;
  }
  if (getIsShuffle(state)) {
    return getHistory(state).length > 0;
  }
  return getCurrent(state) > 0;
};

// const getCanPrevious = state =>
//   !getIsPlaying(state) && getHistory(state).length > 0;


exports.getFrames = getFrames;
exports.getCurrent = getCurrent;
exports.getCurrentFrame = getCurrentFrame;
exports.getIsLooping = getIsLooping;
exports.getIsShuffle = getIsShuffle;
exports.getIsPlaying = getIsPlaying;
exports.getHistory = getHistory;
exports.getIsEnd = getIsEnd;
exports.getCanNext = getCanNext;
exports.getCanPrevious = getCanPrevious;
