import React from 'react';
import SwapState from './components/Swap/swapState';
import HomePage from './components/Home';
import Swap from './components/Swap';
import UserInfo from './components/UserInfo';
import LoginView from './components/Login';
import RegisterView from './components/Register';
import About from './components/About';
import Contacts from './components/Contacts';

import './styles/main.scss';

function AtomicSwap() {
	return (
		<SwapState>
			<HomePage />
			<Swap />
			<UserInfo />
			<LoginView />
			<RegisterView />
			<About />
			<Contacts />
		</SwapState>
	);
}

export default AtomicSwap;
