import { combineReducers } from 'redux';

// import other reducers for this appliction
// this file should not define any new reducers
import reduxPlayerReducer from 'src';


export default combineReducers({
  reduxPlayer: reduxPlayerReducer
});
