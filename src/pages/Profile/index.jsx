import './style.css';
import Header from '../commom/Header'
import Footer from '../commom/Footer'
import { connect } from 'react-redux';
import { Form, Button, Input, Col, Row } from 'antd'
import { editUserAction } from '../../redux/actions'


function Profile({ editUser }) {


  var localUserInfo= JSON.parse(localStorage.getItem("userInfo"));
  
  function handleEditUser(values) {
    console.log("🚀 ~ file: index.jsx ~ line 37 ~ handleEditUser ~ values", values)
    editUser(values)
  }
  
  return (
    <>
      <Header/>
      <div className='profile-container'>
        <h1>Thong Tin Ca Nhan</h1>
        <Row>
          <Col span={10}>
            <div className='img-profile'>
              <img src="https://via.placeholder.com/200x200" alt="img-profile" />
            </div>
          </Col>
          <Col span={14}>
            <div className='form-container'>
              <Form 
                layout='vertical'
                className='form-pro'
                initialValues={{id: localUserInfo.id ,userName: localUserInfo.userName, email: localUserInfo.email}}
                onFinish={(values) => {
                  handleEditUser(values)
                }}
                >
                <Form.Item name='id' hidden>
                  <Input disabled/>
                </Form.Item>
                <Form.Item label='User Name' name='userName'>
                  <Input/>
                </Form.Item>
                <Form.Item label='Email' name='email'>
                  <Input/>
                </Form.Item>
                <Button type='primary' htmlType='submit'>Save Change</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <Footer/>
    </>
  )
}


const mapStateToProps = (state) => {
  const { userInfo } = state.userReducer
  return {
    userInfo,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (params) => dispatch(editUserAction(params)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
