import {
  USERS_FETCH_REQUEST, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE,
  USERS_POST_REQUEST, USERS_POST_SUCCESS, USERS_POST_FAILURE
} from '../actions/users'

// The users reducer
export default function usersStore(state = {
  isFetching: false,
  users: [],
}, action) {
  switch (action.type) {
    case USERS_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case USERS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        users: action.response.users
      })
    case USERS_FETCH_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })

    case USERS_POST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case USERS_POST_SUCCESS:
      const users = state.users;

      return Object.assign({}, state, {
        isFetching: false,
        users: [...users, action.response.user]
      })
    case USERS_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}
