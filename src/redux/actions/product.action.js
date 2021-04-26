export function getProductListAction(params) {
  return {
    type: 'GET_PRODUCT_LIST_REQUEST',
    payload: params,
  }
}
export function addProductAction(params) {
  return {
    type: 'ADD_PRODUCT_REQUEST',
    payload: params,
  }
}
