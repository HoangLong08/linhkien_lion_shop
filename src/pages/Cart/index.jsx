import { Row, Col } from 'antd';
import Header from "../commom/Header";
import Footer from "../commom/Footer";
import "./style.css";
function index() {
  return (
    <>
      <Header />
      <div className="wrap-cart">
        <Row justify='center' className="content-cart" gutter={[16, 16]}>
          <Col span={16}>
            <h2>Giỏ hàng của bạn</h2>
            <div className="list-cart-product">
              
              <div className="cart-product">
                <div className="cart-image"  height="80" width="80">
                  <img className="lazyload" alt="product" src="https://phongvu.vn/api/products/201000613/default_image" loading="lazy" decoding="async"/>
                </div>
                <div className="cart-name">
                  <p>Điện Thoại Di Động iPhone 12 64GB Black MGJ53VN/A</p>
                </div>
                <div className="cart-quanty">
                 
                  <button className="btn-quantity">
                    <span >{1 === 1 ? (<i className="fal fa-trash-alt"></i>) : "-"}</span>
                  </button>
                  <input type="number" className="content-quantity" value="2" readOnly />
                  <button className="btn-quantity">
                    <span>+</span>
                  </button>
                 
                </div>
                <div className="cart-price">
                 <p>26000000</p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <h2>Thanh toán</h2>
            <div className="content-payment">
             
              <div className="info-payment">
                <div>
                  <p>Tạm tính</p>
                  <p>123100000</p>
                </div>
                <div>
                  <p>Phí vận chuyển</p>
                  <p>123200000</p>
                </div>
                <div>
                  <p>Khuyến mãi</p>
                  <p>123200000</p>
                </div>
                <div>
                  <p>Thành tiền</p>
                  <p className="sumary-money">123200000</p>
                </div>
                <button className="btn-payment">
                  Thanh toán ngay
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default index;