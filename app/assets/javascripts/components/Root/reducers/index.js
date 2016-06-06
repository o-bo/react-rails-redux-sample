import { combineReducers } from 'redux';
import counter from '../../Counter/reducers/counter';
import usersStore from '../../Users/reducers/users';

const rootReducer = combineReducers({
  counter,
  usersStore
});

export default rootReducer;
