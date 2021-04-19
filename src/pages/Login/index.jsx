import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../../utils/history';
import './style.css'
import Header from '../commom/Header';
import Footer from '../commom/Footer';

function index() {
	
	return (
		<>
			<Header />
			<div className="wrap-login">
				<div className="content-login">
					<h1 class="sign-in-heading">Đăng nhập</h1>
					
					<form action="" className="sign-in-form">
						<div className="form-inputs">
							<label htmlFor="email" className="sign-in-label">Email</label>
							<input id="email" type="email" name="email" className="sign-in-input"
							placeholder="Vui lòng nhập email của bạn"
							/>
						</div>
						<div className="form-inputs">
							<label htmlFor="password" className="sign-in-label">Password</label>
							<input
								id="password"
								type="text"
								name="password"
								className="sign-in-input"
								placeholder="Vui lòng nhập password của bạn"
							/>
						</div>
						<div className="btn">
							<button className="sign-in-submit" type="submit">
								Đăng nhập
							</button>
							<p>Bạn chưa có tài khoản <Link onClick = {()=>history.push(`/dang-ky`)}>Đăng ký</Link></p>
							
						</div>
						<div class="sign-in-or"><span></span></div>
						<button class="sign-in-social-google">
							<i class="fa fa-google sign-in-social-google-icon"></i>
							<span class="sign-in-social-google-text">Đăng nhập bằng Google</span>
						</button>
						<button class="sign-in-social-facebook">
							<i class="fa fa-facebook sign-in-social-facebook-icon"></i>
							<span class="sign-in-social-facebook-text">Đăng nhập bằng Facebook</span>
						</button>
					</form>
				</div>

			</div>
			<Footer />
		</>
	)
}

export default index
