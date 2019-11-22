import React, { useLayoutEffect, useState } from 'react';
import fire from '../../config/Fire';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Header() {
	const [user, setUser] = useState();

	const authListener = async () => {
		fire.auth().onAuthStateChanged(user => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
	};

	useLayoutEffect(() => {
		authListener();
	});

	const logout = () => {
		fire.auth().signOut();
	};

	return (
		<header id="header">
			<ul>
				<li>
					<NavLink activeClassName="selected" exact to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/about">
						About
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/contacts">
						Contacts
					</NavLink>
				</li>
				{user ? (
					<li>
						<NavLink activeClassName="selected" to="/swap">
							Swap
						</NavLink>
					</li>
				) : null}
				{user ? (
					<li>
						<NavLink activeClassName="selected" to="/user">
							My Profile
						</NavLink>
					</li>
				) : null}
			</ul>
			{user ? (
				<ul>
					<li>
						<Button
							variant="primary"
							type="submit"
							onClick={() => {
								logout();
							}}
						>
							Log Out
						</Button>
					</li>
				</ul>
			) : null}
		</header>
	);
}
