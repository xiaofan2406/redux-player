import { actionTypes } from './actions';
import { getIsEnd } from './_selectors';

// function shuffleArray(array) {
//   for (let i = array.length; i; i--) {
//     const j = Math.floor(Math.random() * i);
//     [array[i - 1], array[j]] = [array[j], array[i - 1]];
//   }
// }

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
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


export default function (state = initialState, action) {
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
    case actionTypes.START: {
      if (getIsEnd(state)) {
        return {
          ...state,
          history: [],
          current: 0,
          isPlaying: true
        };
      }
      return {
        ...state,
        isPlaying: true
      };
    }
    case actionTypes.PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    case actionTypes.FINISH:
      return {
        ...state,
        isPlaying: false
      };
    case actionTypes.NEXT:
      return {
        ...state,
        current: state.isShuffle ? getRandomInt(0, state.frames.length) : state.current + 1,
        history: [...state.history, state.current]
      };
    case actionTypes.PREVIOUS:
      return {
        ...state,
        current: state.history[state.history.length - 1],
        history: [...state.history.slice(0, state.history.length - 1)]
      };
    case actionTypes.RESET:
      return {
        ...state,
        current: 0
      };
    default:
      return state;
  }
}
