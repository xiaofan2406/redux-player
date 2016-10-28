export const getFrames = state => state.frames;

export const getCurrent = state => state.current;

export const getCurrentFrame = state => state.frames[getCurrent(state)];

export const getIsLooping = state => state.isLooping;

export const getIsShuffle = state => state.isShuffle;

export const getIsPlaying = state => state.isPlaying;

export const getHistory = state => state.history;

export const getIsEnd = (state) => {
  const framesLength = getFrames(state).length;
  if (getIsShuffle(state)) {
    return !getIsLooping(state);
  }
  return getCurrent(state) > framesLength - 1;
};

export const getCanNext = state =>
  !(getIsPlaying(state) || state.current >= state.frames.length);

export const getCanPrevious = state =>
  !(getIsPlaying(state) || state.current <= 0);
