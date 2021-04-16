import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'

import history from './utils/history'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
function SwitchRoute() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/dang-nhap" component={Login}/>
				<Route exact path="/dang-ky" component={Register}/>
			</Switch>
		</Router>
	)
}

export default SwitchRoute
