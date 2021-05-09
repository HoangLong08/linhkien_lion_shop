import './style.css'
import { Col, Row, Form, Input, Button} from 'antd'
import { useState } from 'react';
import { editProductAdminAction, removeProductAdminAction } from '../../../redux/actions'
import { connect } from 'react-redux';

function Item(props) {

  const { id, name, price, editProduct, removeProduct } = props;
  const [isEdit, setIsEdit] = useState(false)

  function handleEditProduct(values) {
    editProduct(values)
  }
  function handleRemoveProduct (id) {
    removeProduct({id})
  }
  

  function renderEdit(){
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    return (
      <Col span={12}>
      <div className="box-edit">
        <Row style={{ width: '100%' }}>
          <Col span={8}>
            <div className="img-edit-product">
              <img src="https://via.placeholder.com/150x150" />
            </div>
          </Col>
          <Col span={16}>
            <Form {...layout}
                  className='form-edit'
                  initialValues={{id: id, name: name, price: price}}
                  onFinish={(values) => {
                    handleEditProduct(values)
                    setIsEdit(false)
                  }}  >
              <Form.Item label='ID' name='id'>
                  <Input disabled/>
              </Form.Item>
              <Form.Item label='Name' name='name'>
                  <Input/>
              </Form.Item>
              <Form.Item label='Price' name='price'>
                  <Input/>
              </Form.Item>
              <Button type='primary' htmlType='submit'>Submit</Button>
              <Button danger onClick={() => setIsEdit(false)}>Cancel</Button>
            </Form>
          </Col>
        </Row>
      </div>
      </Col>
    )
  }
  function renderItemView(){
    return (
      <Col span={12}>
      <div className="box-product">
        <Row style={{ width: '100%' }}>
          <Col span={6}>
            <div className="img-product">
              <img src="https://via.placeholder.com/70x70" />
            </div>
          </Col>
          <Col span={14}>
            <div className="des-product">
              <div>ID: {id}</div>
              <div>Name: {name}</div>
              <div>Prize: {price}</div>
            </div>
          </Col>
          <Col span={4}>
            <div className="btn-product">
              <Button type='primary' onClick={() => setIsEdit(true)}>Edit</Button>
              <Button type='ghost' danger onClick={() => handleRemoveProduct(id)}>Remove</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
    )
   }
  return (
    <>
      { isEdit ? renderEdit() : renderItemView()}
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProduct: (params) => dispatch(editProductAdminAction(params)),
    removeProduct: (params) => dispatch(removeProductAdminAction(params))
  }
}

export default connect(null,mapDispatchToProps)(Item);