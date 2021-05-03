export function loginAction(params) {
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
export function registerAction(params) {
    console.log("params: ", params)
    return {
        type: 'REGISTER_REQUEST',
        payload: params,
    }
}
export function logoutAction(params) {
    return {
        type: 'LOGOUT',
    }
}