const _selectors = require('./_selectors');

const getFrames = state => _selectors.getFrames(state.reduxPlayer);

const getCurrent = state => _selectors.getCurrent(state.reduxPlayer);

const getCurrentFrame = state => _selectors.getCurrentFrame(state.reduxPlayer);

const getIsLooping = state => _selectors.getIsLooping(state.reduxPlayer);

const getIsShuffle = state => _selectors.getIsShuffle(state.reduxPlayer);

const getIsPlaying = state => _selectors.getIsPlaying(state.reduxPlayer);

const getHistory = state => _selectors.getHistory(state.reduxPlayer);

const getIsEnd = state => _selectors.getIsEnd(state.reduxPlayer);

const getCanNext = state => _selectors.getCanNext(state.reduxPlayer);

const getCanPrevious = state => _selectors.getCanPrevious(state.reduxPlayer);


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
