import { connect } from 'react-redux';
import Header from '../commom/Header';
import './style.css';


function index({ productList }){
  
  const { name, price } = productList.data[0]

  function renderProduct() {
  
    return (
      <div className="box-product">
        <div className="img-product">
          <img src="https://via.placeholder.com/100x100"/>
        </div>
        <div className="des-product">
          <div>Name: {name}</div>
          <div>Prize: {price}</div>
        </div>
        <div className="btn-product">
          <button>Edit</button>
          <button>Remove</button>
        </div>
      </div>
    )
  }
    
  
  return (
    <>
      <Header/>
      <div className="admin-container">
        {renderProduct()}
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