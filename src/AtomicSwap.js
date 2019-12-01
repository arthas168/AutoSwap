import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import GlobalState from './components/GlobalState';
import SwapState from './components/Swap/swapState';
import InvalidUrl from './components/InvalidUrl';
import HomePage from './components/Home';
import Swap from './components/Swap';
import UserInfo from './components/UserInfo';
import LoginView from './components/Login';
import RegisterView from './components/Register';
import About from './components/About';
import Contacts from './components/Contacts';
import './styles/main.scss';

function AtomicSwap() {
	const options = {
		position: positions.BOTTOM_TOP,
		timeout: 10000,
		offset: '30px',
		transition: transitions.SCALE,
	};

	return (
		<GlobalState>
			<SwapState>
				<AlertProvider template={AlertTemplate} {...options}>
					<Router>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/swap" component={Swap} />
							<Route path="/user" component={UserInfo} />
							<Route path="/login" component={LoginView} />
							<Route path="/register" component={RegisterView} />
							<Route path="/about" component={About} />
							<Route path="/contacts" component={Contacts} />
							<Route path="*" component={InvalidUrl} />
						</Switch>
					</Router>
				</AlertProvider>
			</SwapState>
		</GlobalState>
	);
}

export default AtomicSwap;
