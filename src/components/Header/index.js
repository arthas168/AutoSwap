import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<ul>
				<li><NavLink activeClassName="selected" exact to="/">Home</NavLink></li>
				<li><NavLink activeClassName="selected" to="/about">About</NavLink></li>
				<li><NavLink activeClassName="selected" to="/contacts">Contacts</NavLink></li>
				<li><NavLink activeClassName="selected" to="/swap">Swap</NavLink></li>
				<li><NavLink activeClassName="selected" to="/user">My Profile</NavLink></li>
			</ul>
		</header>
	);
}
