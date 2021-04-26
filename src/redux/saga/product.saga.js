import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getProductListAction } from '../actions/product.action';

function* getProductListSaga(action) {
  try {
    // const { page, limit } = action.payload;
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

// function* getProductDetailSaga(action) {
//   try {
//     //  const user = yield call(Api.fetchUser, action.payload.userId);
//     yield put({type: "GET_PRODUCT_DETAIL_SUCCESS", user: 'user'});
//   } catch (e) {
//     yield put({type: "GET_PRODUCT_DETAIL_FAIL", message: e.message});
//   }
// }
function* addProductSaga(action) {
   try {
    const { price, name } = action.payload;
    const result = yield axios.post('http://localhost:3001/products', {name, price})
    if (result.data) {
      console.log(result.data)
      yield put({ // đợi rồi mới chạy
        type: "ADD_PRODUCT_SUCCESS",
        payload: {
          // data: result.data[0],
          data: result.data,
        },
      });
      yield alert("Thành công");
    } else {
      yield put({
        type: "ADD_PRODUCT_FAIL",
        payload: {
          error: 'FAIL',
        },
      });
    }
   } catch (e) {
    yield put({
      type: "ADD_PRODUCT_FAIL",
      payload: {
        error: e.error,
      },
    });
   }
}
export default function* productSaga() {
  yield takeEvery('GET_PRODUCT_LIST_REQUEST', getProductListSaga);
  yield takeEvery('ADD_PRODUCT_REQUEST', addProductSaga);
  // yield takeEvery('GET_PRODUCT_DETAIL_REQUEST', getProductDetailSaga);
}
