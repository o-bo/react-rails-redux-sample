import { combineReducers } from 'redux';
import counter from './counter';
import usersStore from './users';

const rootReducer = combineReducers({
  counter,
  usersStore
});

export default rootReducer;
