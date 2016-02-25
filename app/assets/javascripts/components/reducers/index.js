import { combineReducers } from 'redux';
import counterStore from './counter';
import usersStore from './users';

const rootReducer = combineReducers({
  counterStore,
  usersStore
});

export default rootReducer;
