import { SET_WHAT_TO_SAY } from './hello-actions';


function reducer(state = 'World', action) {
  switch (action.type) {
    case SET_WHAT_TO_SAY:
      return action.message;
    default:
      return state;
  }
}


export default reducer;

export const getWhatToSay = state => state;
