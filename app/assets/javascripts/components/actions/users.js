import { CALL_API } from '../middleware/api'

export const USERS_FETCH_REQUEST = 'USERS_FETCH_REQUEST'
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS'
export const USERS_FETCH_FAILURE = 'USERS_FETCH_FAILURE'

// Uses the API middlware to get a quote
export function fetchUsers() {
  return {
    [CALL_API]: {
      endpoint: 'users',
      types: [USERS_FETCH_REQUEST, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE]
    }
  }
}
