import React from 'react'
import { Carousel } from 'antd';

import './style.css'
import Header from '../commom/Header';
import Footer from '../commom/Footer';
function index() {
	const contentStyle = {
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	 };

	return (
		<>
			<Header/>
			<Carousel effect="fade" autoplay>
				<div>
					<h3 className="carousel" style={contentStyle}>
						<img src="https://lh3.googleusercontent.com/GM_PRsMUvDzsPah9zT4mijpZ7TrxK-0Jeibc2zMzGzAAEjr2SCCRVp-lptGP5Wzx6yrb5PAdVRRrLlOTOVLBI-c0Q4BcbqmH=w1920-rw" alt=""/>
					</h3>
				</div>
				<div>
					<h3 className="carousel" style={contentStyle}>
					<img src="https://lh3.googleusercontent.com/xS-Ey_-W5I4JaPc8oL9xJZhYtvAFdF_76KMHUVbW7Xf-jfaoxj420-6WZ_RiKVd10ZN3iZr4FV6UuWllJS6d-dXAdk6mjO0=w1920-rw" alt=""/>
					</h3>
				</div>
				<div>
					<h3 className="carousel" style={contentStyle}>
						<img src="https://lh3.googleusercontent.com/GM_PRsMUvDzsPah9zT4mijpZ7TrxK-0Jeibc2zMzGzAAEjr2SCCRVp-lptGP5Wzx6yrb5PAdVRRrLlOTOVLBI-c0Q4BcbqmH=w1920-rw" alt=""/>
					</h3>
				</div>
				<div>
					<h3 className="carousel" style={contentStyle}>
					<img src="https://lh3.googleusercontent.com/GM_PRsMUvDzsPah9zT4mijpZ7TrxK-0Jeibc2zMzGzAAEjr2SCCRVp-lptGP5Wzx6yrb5PAdVRRrLlOTOVLBI-c0Q4BcbqmH=w1920-rw" alt=""/>
					</h3>
				</div>
			</Carousel>
			<div style={{height: "1100px"}}>
			<h1 >Homeeeee</h1>
			</div>
			<Footer/>
		</>
	)
}

export default index
