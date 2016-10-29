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
    case actionTypes.BEGIN_FRAME:
      return state;
    case actionTypes.END_FRAME:
      return {
        ...state,
        history: [...state.history, state.current]
      };
    case actionTypes.NEXT: {
      let current = state.current;

      if (state.isShuffle) {
        current = getRandomInt(0, state.frames.length);
      } else {
        current = state.current === state.frames.length - 1 ? state.current : state.current + 1;
      }

      return {
        ...state,
        current
      };
    }
    case actionTypes.PREVIOUS: {
      let previous;
      if (state.isShuffle) {
        // FIXME need a previous count, or slice history
        previous = state.history[state.history.length - 1];
      } else {
        previous = state.current === 0 ? state.current : state.current - 1;
      }
      return {
        ...state,
        current: previous
      };
    }

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
