import * as _selectors from './_selectors';

export const getFrames = state => _selectors.getFrames(state.reduxPlayer);
export const getCurrent = state => _selectors.getCurrent(state.reduxPlayer);
export const getCurrentFrame = state => _selectors.getCurrentFrame(state.reduxPlayer);

export const getIsLooping = state => _selectors.getIsLooping(state.reduxPlayer);

export const getIsShuffle = state => _selectors.getIsShuffle(state.reduxPlayer);

export const getIsPlaying = state => _selectors.getIsPlaying(state.reduxPlayer);

export const getHistory = state => _selectors.getHistory(state.reduxPlayer);

export const getIsEnd = state => _selectors.getIsEnd(state.reduxPlayer);

export const getCanNext = state => _selectors.getCanNext(state.reduxPlayer);

export const getCanPrevious = state => _selectors.getCanPrevious(state.reduxPlayer);
