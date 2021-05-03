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
    case 'ADD_PRODUCT_REQUEST': {
      return {
        ...state,
        productList: {
          ...state.productList,
          load: true,
        }
      }
    }
    case 'ADD_PRODUCT_SUCCESS': {
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
    case 'ADD_PRODUCT_FAIL': {
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
    case 'EDIT_PRODUCT_REQUEST': {
      return {
        ...state,
        productList: {
          ...state.productList,
          load: true,
        }
      }
    }
    case 'EDIT_PRODUCT_SUCCESS': {
      const { id, name, price } = action.payload
      const newProductList = state.productList
      newProductList.data.splice(id, 1, {name: name, price: price})
      return {
        ...state,
        productList: {
          ...newProductList,
          load: false,
          data: newProductList.data
        }
      }
    }
    default: {
      return state;
    }
  }
}
