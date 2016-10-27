import { actionTypes } from './actions';

function shuffleArray(array) {
  for (let i = array.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [array[i - 1], array[j]] = [array[j], array[i - 1]];
  }
}

const initialState = {
  _frames: [],
  frames: [],
  current: 0,
  isLooping: false,
  isShuffle: false,
  isPlaying: false
};


export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_FRAMES:
      return {
        ...state,
        _frames: action.payload,
        frames: action.payload
      };
    case actionTypes.TOGGLE_LOOP:
      return {
        ...state,
        isLooping: !state.isLooping
      };
    case actionTypes.TOGGLE_SHUFFLE: {
      if (state.isShuffle) {
        return {
          ...state,
          frames: state._frames,
          isShuffle: false
        };
      }
      const temp = Array.from(state.frames);
      shuffleArray(temp);
      return {
        ...state,
        frames: temp,
        isShuffle: true
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
    case actionTypes.FINISH:
      return {
        ...state,
        current: 0,
        isPlaying: false
      };
    case actionTypes.NEXT:
      return {
        ...state,
        current: state.current === state.frames.length - 1 ? state.current : state.current + 1
      };
    case actionTypes.PREVIOUSE:
      return {
        ...state,
        current: state.current === 0 ? state.current : state.current - 1
      };
    case actionTypes.RESET: {
      if (!state.isShuffle) {
        return {
          ...state,
          current: 0
        };
      }
      const temp = Array.from(state.frames);
      shuffleArray(temp);
      return {
        ...state,
        current: 0,
        frames: temp

      };
    }
    default:
      return state;
  }
}
