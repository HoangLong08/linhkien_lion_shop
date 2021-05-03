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
    case 'GET_PRODUCT_DETAIL_REQUEST': {
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          load: true,
        },
      }
    }
    case 'GET_PRODUCT_DETAIL_SUCCESS': {
      const { data } = action.payload;
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          data: data,
          load: false,
        },
      }
    }
    case 'GET_PRODUCT_DETAIL_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          load: false,
          error: error,
        },
      }
    }
    case 'GET_PRODUCT_SAME_REQUEST': {
      return {
        ...state,
        productListSame: {
          ...state.productListSame,
          load: true,
        },
      }
    }
    case 'GET_PRODUCT_SAME_SUCCESS': {
      const { data } = action.payload;
      console.log("state product reducer: ", data)
      return {
        ...state,
        productListSame: {
          ...state.productListSame,
          data: data,
          load: false,
        },
      }
    }
    case 'GET_PRODUCT_SAME_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        productListSame: {
          ...state.productListSame,
          load: false,
          error: error,
        },
      }
    }

    case 'ADD_PRODUCT_REQUEST': {
      return {
        ...state,
        cart: {
          ...state.cart,
          load: true,
        },
      }
    }

    default: {
      return state;
    }
  }
}
