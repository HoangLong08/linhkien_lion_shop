export function getProductListAction(params) {
  return {
    type: 'GET_PRODUCT_LIST_REQUEST',
    payload: params,
  }
}

export function getProductDetailAction(params){
  return {
    type: 'GET_PRODUCT_DETAIL_REQUEST',
    payload: params
  }
}
export function getProductSameAction(params) {
  console.log("params: ",params)
  return {
    type: 'GET_PRODUCT_SAME_REQUEST',
    payload: params,
  }
}
export function addProductCartAction(params) {
  console.log("params: ", params)
  return {
    type: 'ADD_PRODUCT_CART_REQUEST',
    payload: params,
  }
}
export function addProductAction(params) {
  console.log("params: ", params)
  return {
    type: 'ADD_PRODUCT_ADMIN_REQUEST',
    payload: params,
  }
}
export function editProductAction(params) {
  return {
    type: 'EDIT_PRODUCT_ADMIN_REQUEST',
    payload: params,
  }
}
export function removeProductAction(params) {
  return {
    type: 'REMOVE_PRODUCT_AMIN_REQUEST',
    payload: params,
  }
}
