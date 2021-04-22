import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'

import history from './utils/history'
import Home from './pages/Home'
<<<<<<< HEAD
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
=======
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register'
>>>>>>> form
function SwitchRoute() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/dang-nhap" component={Login}/>
				<Route exact path="/dang-ky" component={Register}/>
				<Route exact path="/cart" component={Cart}/>
			</Switch>
		</Router>
	)
}

export default SwitchRoute
