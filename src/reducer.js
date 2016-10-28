const actionTypes = require('./constants');

// Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const initialState = {
  frames: [],
  current: 0,
  history: [],
  isLooping: false,
  isShuffle: false,
  isPlaying: false
};


module.exports = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FRAMES:
      return {
        ...state,
        frames: action.payload
      };
    case actionTypes.TOGGLE_LOOP:
      return {
        ...state,
        isLooping: !state.isLooping
      };
    case actionTypes.TOGGLE_SHUFFLE:
      return {
        ...state,
        isShuffle: !state.isShuffle
      };
    case actionTypes.NEXT: {
      if (state.isShuffle) {
        return {
          ...state,
          current: getRandomInt(0, state.frames.length),
          history: [...state.history, state.current]
        };
      }
      return {
        ...state,
        current: state.current === state.frames.length ? state.current : state.current + 1,
        history: state.current === state.frames.length
          ? state.history
          : [...state.history, state.current]
      };
    }

    case actionTypes.PREVIOUS:
      return {
        ...state,
        current: state.history.length > 0 ? state.history[state.history.length - 1] : state.current,
        history: state.history.length > 0
          ? [...state.history.slice(0, state.history.length - 1)]
          : state.history
      };
    case actionTypes.START:
      return {
        ...state,
        isPlaying: true
      };
    case actionTypes.PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    case actionTypes.RESET:
      return {
        ...state,
        current: 0,
        history: []
      };

    default:
      return state;
  }
};
