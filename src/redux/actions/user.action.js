export function loginAction(params) {
  console.log("params: ", params)
  return {
    type: 'LOGIN_REQUEST',
    payload: params,
  }
}

export function getUserInfoAction(params) {
  return {
    type: 'GET_USER_INFO_REQUEST',
    payload: params,
  }
}

