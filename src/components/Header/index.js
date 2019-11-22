import React, { useLayoutEffect, useState, useContext } from 'react';
import GlobalContext from '../GlobalState/globalContext';
import fire from '../../config/Fire';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Header(props) {
	const globalContext = useContext(GlobalContext);
	const { onUserAuth, userEmail } = globalContext;

	const authListener = async () => {
		fire.auth().onAuthStateChanged(user => {
			if (user) {
				onUserAuth(user.email);
			} else {
				onUserAuth('');
			}
		});
	};

	useLayoutEffect(() => {
		authListener();
	}, []);

	const logout = () => {
		fire.auth().signOut();
		props.history.push('/');
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
				{userEmail !== '' ? (
					<li>
						<NavLink activeClassName="selected" to="/swap">
							Swap
						</NavLink>
					</li>
				) : null}
				{userEmail !== '' ? (
					<li>
						<NavLink activeClassName="selected" to="/user">
							My Profile
						</NavLink>
					</li>
				) : null}
			</ul>
			{userEmail !== '' ? (
				<ul>
					<li>
						{userEmail}
					</li>

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

export default withRouter(Header);
