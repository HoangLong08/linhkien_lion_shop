import React from 'react'
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { BrowserRouter as  Link } from "react-router-dom";
import './style.css'
import Header from '../commom/Header';
import Footer from '../commom/Footer';
import Item from '../commom/Item'

function index() {
	const contentStyle = {
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	};

	return (
		<>
			<Header />
			<div className="wrap-home">
				<Carousel effect="fade" autoplay>
					<div>
						<h3 className="carousel" style={contentStyle}>
							<img src="https://lh3.googleusercontent.com/GM_PRsMUvDzsPah9zT4mijpZ7TrxK-0Jeibc2zMzGzAAEjr2SCCRVp-lptGP5Wzx6yrb5PAdVRRrLlOTOVLBI-c0Q4BcbqmH=w1920-rw" alt="" />
						</h3>
					</div>
					<div>
						<h3 className="carousel" style={contentStyle}>
							<img src="https://lh3.googleusercontent.com/xS-Ey_-W5I4JaPc8oL9xJZhYtvAFdF_76KMHUVbW7Xf-jfaoxj420-6WZ_RiKVd10ZN3iZr4FV6UuWllJS6d-dXAdk6mjO0=w1920-rw" alt="" />
						</h3>
					</div>
					<div>
						<h3 className="carousel" style={contentStyle}>
							<img src="https://lh3.googleusercontent.com/V-vPPB588FJOanwJQLBjp02hp0zkGBWM9lerFDI2V84laXVRfXXq2UEZDhQToi1i-F1ocDQ0cHVtGm5-Ixo8EmZilBymf_k=w1920-rw" alt="" />
						</h3>
					</div>
					<div>
						<h3 className="carousel" style={contentStyle}>
							<img src="https://lh3.googleusercontent.com/1KJ9inWD5ELRzE3OZ7dfgq5lkkb-favqqE9BAh3EIIENopR_xSIUxtqYOQDVdPZ0PbgQ_jOkxL8vMb_hd814L3jykdxMFAQWZQ=w1920-rw" alt="" />
						</h3>
					</div>
				</Carousel>
				
				<div className="banner">
					<Link to="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/15/637541252160464389_F-H5_1200x200.png">
						<img src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/15/637541252160464389_F-H5_1200x200.png" alt="" />
					</Link>
				</div>
				
				<div className="banner-product">
					<div className="site-card-wrapper">
						<Row gutter={16}>
							
							<Item/>
						</Row>
					</div>
				</div>

				<div className="banner">
					<a href="">
						<img src="https://hoanghamobile.com/Uploads/2021/04/16/banner-iphone-12-mini-1200-140.gif" alt="" />
					</a>
				</div>
				{/* <div className="banner">
					<div className="site-card-wrapper">
						<Row gutter={16}>
							<Col md={6}>
								<a href="#">
									<Card
									hoverable
									style={{ width: 240 }}
									cover={<img alt="example" src="https://lh3.googleusercontent.com/o0VakvIDLSMwjmNMv_gugZ-8TA9GyNcCrAk8bBAvSEQLKXZAamqa9Hk5OXCHGNdBZd1Wdefpbd8qLB8vsHE=w500-rw" />}
								>
									<Meta title="Europe Street beat" description="www.instagram.com" />
								</Card>,
								</a>

      					</Col>
							
						</Row>
					</div>
				</div> */}
			</div>

			<Footer />
		</>
	)
}

export default index
