import React, { Fragment } from 'react';
import HomePage from './components/Home';
import LoginView from './components/Login';
import RegisterView from './components/Register';
import About from './components/About';
import Contacts from './components/Contacts';


import './styles/main.scss';

function AtomicSwap() {
	return (
		<Fragment>
			<HomePage />
			<LoginView />
			<RegisterView />
			<About />
			<Contacts />
		</Fragment>
	);
}

export default AtomicSwap;
