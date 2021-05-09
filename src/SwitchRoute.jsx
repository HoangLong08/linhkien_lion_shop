import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'

import history from './utils/history'
import Home from './pages/Home/Home.jsx'

import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Cart from './pages/Cart'
import DetailProduct from './pages/DetailProduct/Detail'
import AdminProduct from './pages/Admin/AdminProduct'
import AdminUser from './pages/Admin/AdminUser'
import Admin from './pages/Admin'
import Profile from './pages/Profile'


function SwitchRoute() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/dang-nhap" component={Login}/>
				<Route exact path="/product/:id" component={DetailProduct}/>
				<Route exact path="/dang-ky" component={Register}/>
				<Route exact path="/gio-hang" component={Cart}/>
				<Route exact path="/admin" component={Admin}/>
				<Route exact path="/admin-product" component={AdminProduct}/>
				<Route exact path="/admin-user" component={AdminUser}/>
				<Route exact path="/profile" component={Profile}/>
			</Switch>
		</Router>
	)
}

export default SwitchRoute
