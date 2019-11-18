import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header id="header">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contacts">Contacts</Link></li>
				<li><Link to="/swap">Swap</Link></li>
				<li><Link to="/user">My Profile</Link></li>
			</ul>
		</header>
	);
}
