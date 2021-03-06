import React, { useEffect } from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getProductDetailAction, getProductSameAction, addProductCartAction } from '../../redux/actions';
import Header from '../commom/Header';
import Footer from '../commom/Footer';
import Item from '../commom/Item';
import history from '../../utils/history';
import './style.css'

function Detail({ productDetail, productListSame, shoppingCart,  addToCart, getProductDetail, getProductSame, match }) {
	// console.log("productDetail: ", productDetail) // url 

	const {id, image, name, price, categoryId } = productDetail.data;

	const productId = match.params.id;
	const [optionSelected, setOptionSelected] = useState({});

	useEffect(() => {
		getProductDetail({ id: productId });
	}, [productId])

	useEffect(() => {
		getProductSame({categoryId})
	}, [categoryId])

	useEffect(() => {
		if (productDetail.data.id) {
			setOptionSelected(productDetail.data.productOptions[0] || {})
		}
	}, [productDetail.data])
	
	function onChangeValue(event) {
		setOptionSelected(event.target.value)
	}
	
	function renderProductOptions() {
		if (productDetail.data.id) {

			return productDetail.data.productOptions.map((item, index) => {
				console.log(item)
				return (
					<div key={index} className="product-select-item">
						<div className="radio">
							<input
								type="radio"
								name="gp"
								id="alo"
								value={item.price}
								defaultChecked={price === (price + item.price) && "true"}
							/>{item.memory}
						</div>
						<p className="mul-price-product">
							{(price + item.price).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
						</p>
					</div>
				)
			})
		}
	}
	
	
	function clickAddToCart(id, image, name, price, categoryId){
		
		// console.log(id, image, name, price, categoryId);
		// var b = {
		// 	id: id,
		// 	image: image,
		// 	name: name,
		// 	price: price,
		// 	categoryId: categoryId,
		// 	quantity: 1

		// };
		addToCart({id, image, name, price, categoryId})
		// cart.data.push(b)
		// localStorage.setItem("cart",cart.data)
		console.log("cart: ", shoppingCart)
	}
	

	function renderProductSame(){
		return productListSame.data.map((item, id) => {
			return (
			 <Col md={6} key={id}>
				 <Item id={item.id} name={item.name} price={item.price} image={item.image}/>
			 </Col>
			)
		 })
	}

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4
	};

	
	return (
		<>
			<Header />
			{productDetail.load ?
				(<div><h1>Loading ...</h1></div>) :
				<div className="wrap-detail">
					
					<Row gutter={[16, 16]}>
						<Col md={18}>
							<div className="detail-product">
								<Row>
									<Col md={10}>
										<div className="detail-product-img">
											<img id="image" src={image} alt="s???n ph???m" />
										</div>
										<div className="muti-img">
											<div className="small-img">
												<img className="thumbnail" src={image} alt="s???n ph???m" />
											</div>
											<div className="small-img">
												<img className="thumbnail" src={image} alt="s???n ph???m" />
											</div>
											<div className="small-img">
												<img className="thumbnail" src={image} alt="s???n ph???m" />
											</div>
										</div>
									</Col>
									<Col md={14}>
										<div className="detail-product-info">
											<div className="name-product">
												<p>{name}</p>
											</div>
											<div className="price-product">
												<span>{price && (parseInt(price)+parseInt(optionSelected) || price).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
											</div>
											<div className="select-price-product" onChange={onChangeValue}>
												{renderProductOptions()}
											</div>
											<Row gutter={[8, 8]}>
												<Col md={12}>
													<button className="btn btn-buy" onClick={() => history.push(`/gio-hang`)}>Mua ngay</button>
												</Col>
												<Col md={12}>
													<button className="btn btn-cart" onClick={()=>clickAddToCart(id, image, name, price, categoryId)}>Th??m gi??? h??ng</button>
												</Col>
											</Row>

										</div>
									</Col>
								</Row>
							</div>
						</Col>
						<Col md={6}>
							<div className="widget">
								<div>
									<span><i className="far fa-truck-moving"></i></span>
									<p>S???n ph???m ???????c mi???n ph?? giao h??ng</p>
								</div>
								<h3 >Ch??nh s??ch b??n h??ng</h3>
								<div>
									<span><i className="far fa-check-circle"></i></span>
									<p>Cam k???t h??ng ch??nh h??ng 100%</p>
								</div>
								<div>
									<span><i className="far fa-truck-loading"></i></span>
									<p>Mi???n ph?? giao h??ng t??? 800K</p>
								</div>
								<div>
									<span><i className="far fa-sync-alt"></i></span>
									<p>?????i tr??? mi???n ph?? trong 10 ng??y</p>
								</div>
								<h3 >D???ch v??? kh??c</h3>
								<div>
									<span><i className="far fa-cog"></i></span>
									<p>S???a ch???a ?????ng gi?? 150.000??.</p>
								</div>
								<div>
									<span><i className="fas fa-broom"></i></span>
									<p>V??? sinh m??y t??nh, laptop.</p>
								</div>
								<div>
									<span><i className="far fa-shield"></i></span>
									<p>B???o h??nh t???i nh??.</p>
								</div>
							</div>
						</Col>
					</Row>
					<div className="des-product">
						<Row className="des-product">
							<Col md={18}>
								<div className="title-content">
									<h3>M?? t??? s???n ph???m</h3>
								</div>
								<div style={{ height: "100px", background: "white" }}>
								</div>
							</Col>
							<Col md={6}>
								<div className="title-content">
									<h3>Th??ng s??? k??? thu???t</h3>
								</div>
								<div style={{ height: "100px", background: "white" }}>
								</div>
							</Col>
						</Row>
					</div>

					<div className="same-product">
						<div className="title-content">
							<h3>C?? TH??? B???N TH??CH</h3>
						</div>
						<div className="same-product-bottom">
							<Slider {...settings}>
								
								{renderProductSame()}
							</Slider>
						</div>
					</div>
					<div className="same-product">
						<div className="title-content" style={{ width: "450px" }}>
							<h3>????nh gi?? v?? nh???n x??t {name}</h3>
						</div>
						<div className="same-product-bottom">
							<Row>

							</Row>
						</div>
					</div>
				</div>
			}
			<Footer />
		</>

	)
}
const mapStateToProps = (state) => {
	const { productDetail, productListSame, shoppingCart } = state.productReducer;
	return {
		productDetail,
		productListSame,
		shoppingCart
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getProductDetail: (params) => dispatch(getProductDetailAction(params)),
		getProductSame  : (params) => dispatch(getProductSameAction(params)),
		addToCart		 : (params) => dispatch(addProductCartAction(params))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
