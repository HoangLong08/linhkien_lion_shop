import { Row, Col, Card } from 'antd';
import Header from "../commom/Header";
import Footer from "../commom/Footer";
import "./style.css";
function index() {
  return (
    <>
      <Header />
      <Row justify='center' className="cart-container">
        <Col span={16}>
          <div className="cart-product">
            <ul className="sub-cart-wrapp">
              <li className="sub-cart-product">
                <div className="pic-sub">
                  <img src="https://via.placeholder.com/100x100" alt="product" />
                </div>
                <div className="info-cart-product">
                  <h3>Name Product</h3>
                  <div className="description-product">
                    <p>Description</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={8}>
          <div className="total">
            <h2>Thanh toán</h2>
            <div className="info-total">
              <Row>
                <Col span={8}><p>Tạm tính:</p></Col>
                <Col span={16}></Col>
                <Col span={8}><p>Khuyến mãi:</p></Col>
                <Col span={16}></Col>
                <Col span={8}><p>Thuế:</p></Col>
                <Col span={16}></Col>
                <div className="money-total">
                  <Col span={8}><p>Thành tiền:</p></Col>
                  <Col span={16}></Col>
                  <button className="sign-in-submit" type="submit">
                    Thanh toán
							    </button>
                </div>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default index;