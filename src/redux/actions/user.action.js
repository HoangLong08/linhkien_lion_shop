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
export function getUserListAction(params){
    return {
        type: 'GET_USER_LIST_REQUEST',
        payload: params,
    }
}
export function registerAction(params) {
    return {
        type: 'REGISTER_REQUEST',
        payload: params,
    }
}
export function logoutAction() {
    return {
        type: 'LOGOUT',
    }
}
export function removeUserAction(params) {
    return {
        type: 'REMOVE_USER_REQUEST',
        payload: params
    }
}
export function editUserAction(params) {
    return {
        type: 'EDIT_USER_REQUEST',
        payload: params
    }
}