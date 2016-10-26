import { combineReducers } from 'redux';

// import other reducers for this appliction
// this file should not define any new reducers
import helloReducer, * as fromHello from './hello/hello-reducers';


export default combineReducers({
  hello: helloReducer
});


/* selectors for all states */
export const getWhatToSay = state => fromHello.getWhatToSay(state.hello);
