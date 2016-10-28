const getFrames = state => state.frames;

const getCurrent = state => state.current;

const getCurrentFrame = state => state.frames[getCurrent(state)];

const getIsLooping = state => state.isLooping;

const getIsShuffle = state => state.isShuffle;

const getIsPlaying = state => state.isPlaying;

const getHistory = state => state.history;

const getIsEnd = (state) => {
  const framesLength = getFrames(state).length;
  if (getIsShuffle(state)) {
    return !getIsLooping(state);
  }
  return getCurrent(state) > framesLength - 1;
};

const getCanNext = state =>
  !getIsPlaying(state) && (getIsShuffle(state) || state.current < state.frames.length);

const getCanPrevious = state =>
  !getIsPlaying(state) && getHistory(state).length > 0;


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
