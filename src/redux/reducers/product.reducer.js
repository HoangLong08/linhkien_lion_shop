const initialState = {
  productList: {
    data: [],
    load: false,
    error: '',
  },
  productDetail: {
    data: [],
    load: false,
    error: '',
  },
  productListSame: {
    data: [],
    load: false,
    error: '',
  },
  cart: {
    data: [],
    load: false,
    error: '',
  },
};

export default function productReducer(state = initialState, action) {
  
  switch (action.type) {
    case 'GET_PRODUCT_LIST_REQUEST': {
      return {
        ...state,
        productList: {
          ...state.productList,
          load: true,
        },
      }
    }
    case 'GET_PRODUCT_LIST_SUCCESS': {
      const { data } = action.payload;
      return {
        ...state,
        productList: {
          ...state.productList,
          data: data,
          load: false,
        },
      }
    }
    case 'GET_PRODUCT_LIST_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        productList: {
          ...state.productList,
          load: false,
          error: error,
        },
      }
    }
    case 'ADD_PRODUCT_ADMIN_REQUEST': {
      return {
        ...state,
        productList: {
          ...state.productList,
          load: true,
        }
      }
    }
    case 'ADD_PRODUCT_ADMIN_SUCCESS': {
      const { data } = action.payload
      return {
        ...state,
        productList: {
          ...state.productList,
          load: false,
          data: data
        }
      }
    }
    case 'ADD_PRODUCT_ADMIN_FAIL': {
      const { error } = action.payload
      return {
        ...state,
        productList: {
          ...state.productList,
          load: false,
          error: error
        }
      }
    }
    case 'EDIT_PRODUCT_ADMIN_REQUEST': {
      return {
        ...state,
        productList: {
          ...state.productList,
          load: true,
        }
      }
    }
    case 'EDIT_PRODUCT_ADMIN_SUCCESS': {
      const { id, name, price } = action.payload
      const newProductList = state.productList.data;
      const productIndex = newProductList.findIndex((item) => { return item.id === id });
      newProductList.splice(productIndex, 1, {id: id, name: name, price: price})
      return {
        ...state,
        productList: {
          ...newProductList,
          load: false,
          data: newProductList
        }
      }
    }
    case 'EDIT_PRODUCT_ADMIN_FAIL': {
      const { error } = action.payload
      return {
        ...state,
        productList: {
          ...state.productList,
          load: false,
          error: error
        }
      }
    }
    case 'REMOVE_PRODUCT_ADMIN_REQUEST': {
      return {
        ...state,
        productList: {
          ...state.productList,
          load: true,
        }
      }
    }
    case 'REMOVE_PRODUCT_ADMIN_SUCCESS': {
      const { id } = action.payload
      const newProductList = state.productList.data;
      const productIndex = newProductList.findIndex((item) => { return item.id === id });
      newProductList.splice(productIndex, 1)
      return {
        ...state,
        productList: {
          ...newProductList,
          load: false,
          data: newProductList
        }
      }
    }
    default: {
      return state;
    }
  }
}
