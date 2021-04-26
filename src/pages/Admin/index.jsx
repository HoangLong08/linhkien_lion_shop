import { connect } from 'react-redux';
import Header from '../commom/Header';
import './style.css';
import ItemCart from './item';
import { Col, Row } from 'antd';
import { addProductAction } from '../../redux/actions'

function index({ productList }){
  
  

  // const { name, price } = productList.data[0]

  function renderProduct() {
    return productList.data.map((item) => {
      return <ItemCart id={item.id} name={item.name} price={item.price}/>
    })
  }
    
  
  return (
    <>
      <Header/>
      <div className="admin-container">
        <div className='add-product'>
          <button>ADD PRODUCT</button>
        </div>
        <Row gutter={12}>
          {renderProduct()}
        </Row>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { productList } = state.productReducer;
  return {
    productList,
  }
}



export default connect(mapStateToProps,null) (index);