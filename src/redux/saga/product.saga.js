import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getProductListSaga() {
  try {
    //const { page, limit } = action.payload;
    const result = yield axios({
      method: 'GET',
      url: 'http://localhost:3001/products'
    });
    yield put({
      type: "GET_PRODUCT_LIST_SUCCESS",
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({
      type: "GET_PRODUCT_LIST_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios({
      method: 'GET',
      url: `http://localhost:3001/products/${id}`,
      params: {
        _embed: 'productOptions',
        // _expand: 'category'
      }
    });
    yield put({
      type: "GET_PRODUCT_DETAIL_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({type: "GET_PRODUCT_DETAIL_FAIL", message: e.message});
  }
}

function* getProductListSameSaga(action) {
  try {
    
    const { categoryId } = action.payload;
    console.log("categoryId saga: ", categoryId)
    const result = yield axios({
      method: 'GET',
      url: `http://localhost:3001/products?categoryId=${categoryId}`
    });
    console.log("result list product: ", result)
    yield put({
      type: "GET_PRODUCT_SAME_SUCCESS",
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({
      type: "GET_PRODUCT_SAME_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

function* addProductSaga(action) {
   try {
    const { price, name } = action.payload;
    const result = yield axios.post('http://localhost:3001/products', {name, price})
    if (result.data) {
      yield put({ // đợi rồi mới chạy
        type: "ADD_PRODUCT_ADMIN_SUCCESS",
        payload: {
          // data: result.data[0],
          // data: result.data,
        },
      });
      // yield alert("Thành công");
    } else {
      yield put({
        type: "ADD_PRODUCT_ADMIN_FAIL",
        payload: {
          error: 'FAIL',
        },
      });
    }
   } catch (e) {
    yield put({
      type: "ADD_PRODUCT_ADMIN_FAIL",
      payload: {
        error: e.error,
      },
    });
   }
}

function* editProductSaga (action) {
  try {
    const {name,price,id} = action.payload
    const result = yield axios.post(`http://localhost:3001/products/${id}`, {name, price})
    if(result.data){
      yield put({
        type: 'EDIT_PRODUCT_ADMIN_SUCCESS',
        payload: result.data
      })
    } else {
      yield put({
        type: 'EDIT_PRODUCT_ADMIN_FAIL',
        payload: {
          error: 'FAIL'
        }
      })
    }
    } catch(e) {
      yield put({
        type: 'EDIT_PRODUCT_ADMIN_FAIL',
        payload: {
          error :e.error
        }
      })
    }
}

export default function* productSaga() {
  yield takeEvery('GET_PRODUCT_LIST_REQUEST', getProductListSaga);
  yield takeEvery('GET_PRODUCT_DETAIL_REQUEST', getProductDetailSaga);
  yield takeEvery('GET_PRODUCT_SAME_REQUEST', getProductListSameSaga);
  yield takeEvery('ADD_PRODUCT_ADMIN_REQUEST', addProductSaga);
  yield takeEvery('EDIT_PRODUCT_ADMIN_REQUEST', editProductSaga);
  // yield takeEvery('GET_PRODUCT_DETAIL_REQUEST', getProductDetailSaga);
}
