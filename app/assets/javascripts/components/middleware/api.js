import fetch from 'isomorphic-fetch';

const BASE_URL = 'http://localhost:3000/'

function callApi(endpoint, method = 'get', body = null) {

  const config = {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method,
    body: JSON.stringify({
      ...body,
      authenticity_token: $('meta[name=csrf-token]').attr('content')
    })
  }
  console.log(config);

  return fetch(BASE_URL + endpoint, config)
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json)
    }
    return json
  })
  .catch(err => console.log(err))
}

export const CALL_API = Symbol('Call API')
export const GET = 'get'
export const POST = 'post'
export const PUT = 'put'
export const DELETE = 'delete'

export default store => next => action => {

  const callAPI = action[CALL_API]

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, types, method, body } = callAPI

  const [ requestType, successType, errorType ] = types

  // Passing the authenticated boolean back in our data will let us distinguish
  // between normal and secret quotes
  return callApi(endpoint, method, body).then(
    response =>
    next({
      response,
      type: successType
    }),
    error => next({
      error: error.message || 'There was an error.',
      type: errorType
    })
  )
}
