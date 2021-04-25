import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'

import history from './utils/history'
import Home from './pages/Home'

import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Cart from './pages/Cart'
import Admin from './pages/Admin'

function SwitchRoute() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/dang-nhap" component={Login}/>
				<Route exact path="/dang-ky" component={Register}/>
				<Route exact path="/cart" component={Cart}/>
				<Route exact path="/admin" component={Admin}/>
			</Switch>
		</Router>
	)
}

export default SwitchRoute
