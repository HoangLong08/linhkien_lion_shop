import './style.css'
import { Col, Row } from 'antd'

function ItemCart(props){

  const { name, id, price } = props;

  return (
    <Col span={12}>
        <div className="box-product">
          <Row>
            <Col span={6}>
              <div className="img-product">
                <img src="https://via.placeholder.com/70x70"/>
              </div>
            </Col>
            <Col span={12}>
              <div className="des-product">
                <div>ID: {id}</div>
                <div>Name: {name}</div>
                <div>Prize: {price}</div>
              </div>
            </Col>
            <Col span={6}>
              <div className="btn-product">
                <button>Edit</button>
                <button>Remove</button>
              </div>
            </Col>
          </Row>
        </div>
    </Col>
      
  )
}

export default ItemCart;