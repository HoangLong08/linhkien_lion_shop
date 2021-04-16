import React from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import history from '../../../utils/history'
import '../Header/style.css'
import 'antd/dist/antd.css';
const { Search } = Input;

const onSearch = value => console.log(value);
function index() {
	return (
		<>
			<header>
				<div className="container-header">
					<Link onClick = {()=>history.push(`/`)}>
						<h1>LOGO</h1>
					</Link>
					<div className=" header-search">
					
					<Search
						placeholder="Tìm kiếm sản phẩm"
						allowClear
						enterButton
						size="large"
						
						onSearch={onSearch}
					/>
					</div>
					<ul className="header-menu">
						<li title="Liên hệ">
							<a href="/orders">
								<div className="center-icon">
									<span><i className="far fa-phone"></i></span>
								</div>
								<div className="scroll ">
									<span >Đơn hàng</span>
								</div>
							</a>
						</li>
						<li title="Giỏ hàng" className="cart-wrapp" >
							<a href="/cart">
								<div className="center-icon">
									<span><i className="far fa-shopping-cart"></i></span>
								</div>
								<div className="scroll ">
									<span >Giỏ hàng</span>
								</div>
								<div className="number-cart ">
									<span className="text-center render-number-cart"></span>
								</div>
							</a>
						</li>

						{/* <li className="hover-user" title="Trang cá nhân">
							<a href="/profile">
								<div className="text-center" style={{fontSize: "24px"}}>
									<span><i className="far fa-user"></i></span>
								</div>
								<div className="scroll">
									<span >0</span>
								</div>
							</a>
							<ul className="sub-menu">
								<li>
									<div className="text-center" style={{ fontSize: "24px" }}>
										<span><i className="far fa-user"></i></span>
									</div>
									<div className="text-center">
										<span >Long</span>
									</div>
								</li>
								<li>
									<a href="#" className="sub-a"> <span><i className="far fa-user"></i></span> Thông tin tài khoản</a>
								</li>
								<li>
									<a href="#" className="sub-a"><span><i className="fal fa-clipboard-check"></i></span>Quản lý đơn hàng</a>
								</li>
								<li>
									<a href="#" className="sub-a"><span><i className="far fa-sync-alt"></i></span>Đổi mật khẩu</a>
								</li>
								<li>
									<a className="btn btn-primary form-control sub-ab" href="#"> Đăng xuất </a>
								</li>
							</ul>
						</li> */}

						<li title="Đăng nhập">
							<Link onClick = {()=>history.push(`dang-nhap`)}>
								<div className="center-icon">
									<span><i className="far fa-sign-in-alt"></i></span>
								</div>
								<div className="scroll ">
									<span >Đăng nhập</span>
								</div>
							</Link>
						</li>
						<li title="Đăng ký">
							<Link onClick = {()=>history.push(`dang-ky`)}>
								<div className="center-icon">
									<span><i className="far fa-book"></i></span>
								</div>
								<div className="scroll ">
									<span >Đăng ký</span>
								</div>
							</Link>
						</li>


					</ul>

				</div>
			</header>

		</>
	)
}

export default index
