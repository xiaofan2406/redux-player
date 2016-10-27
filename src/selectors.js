export const getFrames = state => state.reduxPlayer.frames;

export const getCurrent = state => state.reduxPlayer.current;

export const getCurrentFrame = state => state.reduxPlayer.frames[getCurrent(state)];

export const getIsLooping = state => state.reduxPlayer.isLooping;

export const getIsShuffle = state => state.reduxPlayer.isShuffle;

export const getIsPlaying = state => state.reduxPlayer.isPlaying;


export const getCanNext = state =>
  !(getIsPlaying(state) || state.reduxPlayer.current >= state.reduxPlayer.frames.length);


export const getCanPrevious = state =>
  !(getIsPlaying(state) || state.reduxPlayer.current <= 0);


export default {
  getFrames,
  getCurrent,
  getCurrentFrame,
  getIsLooping,
  getIsShuffle,
  getIsPlaying,
  getCanNext,
  getCanPrevious
};
