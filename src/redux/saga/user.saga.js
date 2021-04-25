import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import history from '../../utils/history';

function* loginSaga(action) {
  // console.log("action: ", action);
  try {
    const { email, password } = action.payload;
    const result = yield axios({
      method: 'GET',
      url: 'http://localhost:3001/users',
      params: {
        email,
        password,
      }
    });
    if (result.data.length > 0) {
      // console.log("result.config.params :",result.config.params);
      localStorage.setItem('userInfo', JSON.stringify(result.data[0]));
      yield put({ // đợi rồi mới chạy
        type: "LOGIN_SUCCESS",
        payload: {
          data: result.data[0],
        },
      });
      yield history.push('/');
    } else {
      yield put({
        type: "LOGIN_FAIL",
        payload: {
          error: 'Email hoặc mật khẩu không đúng',
        },
      });
    }
  } catch (e) {
    yield put({
      type: "LOGIN_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:3001/users/${id}`);
    yield put({
      type: "GET_USER_INFO_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: "GET_USER_INFO_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

function* registerSaga(action) {
  console.log("saga action register: ", action);
  try {
    const { email, password, userName } = action.payload;
    
    // const result = yield axios({
    //   method: 'POST',
    //   url: 'http://localhost:3001/users',
    // }, {email, password, userName})  // không hiểu tại sao luôn
    const user = yield axios.get('http://localhost:3001/users'	)
		const u = user.data.find(user => user.email === email)
    if(u){
      yield alert("Email đã tồn tại")
    }else{
      const result = yield axios.post('http://localhost:3001/users'
      , {email, password, userName} )
      
      if (result.data) {
        console.log(result.data)
        yield put({ // đợi rồi mới chạy
          type: "REGISTER_SUCCESS",
          payload: {
            // data: result.data[0],
            data: result.data,
          },
        });
        yield alert("Đăng ký thành công");
      } else {
        yield put({
          type: "REGISTER_FAIL",
          payload: {
            error: 'Email đã được đăng ký',
          },
        });
      }
    }

  } catch (e) {
    yield put({
      type: "REGISTER_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}


export default function* userSaga() {
  yield takeEvery('LOGIN_REQUEST', loginSaga);
  yield takeEvery('GET_USER_INFO_REQUEST', getUserInfoSaga);
  yield takeEvery('REGISTER_REQUEST', registerSaga);
}
