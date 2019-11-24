import React, { useLayoutEffect, useContext } from 'react';
import GlobalContext from '../GlobalState/globalContext';
import fire from '../../config/Fire';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';

function Header(props) {
	const globalContext = useContext(GlobalContext);
	const { userEmail, isDayMode, onUserAuth, onToggleMode } = globalContext;

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
						<img
							src={
								isDayMode
									? require('../../images/toggle-day.png')
									: require('../../images/toggle-night.png')
							}
							data-tip="Toggle Day/Night Mode"
							className="toggle-mode"
							alt="toggle-mode"
							onClick={() => onToggleMode()}
						></img>
						<ReactTooltip place="top" type="dark" effect="float" />
					</li>

					<li>{userEmail}</li>

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
