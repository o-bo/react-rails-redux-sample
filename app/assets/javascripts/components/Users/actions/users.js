import { CALL_API, GET, POST } from '../../middleware/api'

export const USERS_FETCH_REQUEST = 'USERS_FETCH_REQUEST'
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS'
export const USERS_FETCH_FAILURE = 'USERS_FETCH_FAILURE'

export function fetchUsers() {
  return {
    [CALL_API]: {
      endpoint: 'users',
      method: GET,
      types: [USERS_FETCH_REQUEST, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE]
    }
  }
}

export const USERS_POST_REQUEST = 'USERS_POST_REQUEST'
export const USERS_POST_SUCCESS = 'USERS_POST_SUCCESS'
export const USERS_POST_FAILURE = 'USERS_POST_FAILURE'

export function postUser(user) {
  return {
    [CALL_API]: {
      endpoint: 'users',
      method: POST,
      body: user,
      types: [USERS_POST_REQUEST, USERS_POST_SUCCESS, USERS_POST_FAILURE]
    }
  }
}
