import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../../utils/history';
import './style.css';
import Header from '../commom/Header';
import Footer from '../commom/Footer';

function index() {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<>
			<Header/>
			<div className="wrap-register">
				<div className="content-register">
					<h1 class="sign-up-heading">Đăng ký</h1>
					
					<form action="" className="sign-up-form">
						<div className="form-inputs">
							<label htmlFor="email" className="sign-up-label">Email</label>
							<input id="email" type="email" name="email" className="sign-up-input"
							placeholder="Vui lòng nhập email của bạn"
							/>
						</div>
						<div className="form-inputs">
							<label htmlFor="password" className="sign-up-label">Password</label>
							<input
								id="password"
								type="text"
								name="password"
								className="sign-up-input"
								placeholder="Vui lòng nhập password của bạn"
							/>
						</div>
						<div className="form-inputs">
							<label htmlFor="password" className="sign-up-label">Confirm Password</label>
							<input
								id="password"
								type="text"
								name="password"
								className="sign-up-input"
								placeholder="Vui lòng nhập confirm password của bạn"
							/>
						</div>
						<div className="btn">
							<button className="sign-up-submit" type="submit">
								Đăng ký
							</button>
							<p>Bạn đã có tài khoản <Link onClick = {()=>history.push(`/dang-nhap`)}>Đăng nhập</Link></p>
							
						</div>
						<div class="sign-up-or"><span></span></div>
						<button class="sign-up-social-google">
							<i class="fa fa-google sign-up-social-google-icon"></i>
							<span class="sign-up-social-google-text">Tiếp tục bằng Google</span>
						</button>
						<button class="sign-up-social-facebook">
							<i class="fa fa-facebook sign-up-social-facebook-icon"></i>
							<span class="sign-up-social-facebook-text">Tiếp tục bằng Facebook</span>
						</button>
					</form>
				</div>
			</div>
			<Footer/>
		</>
	)
}

export default index

