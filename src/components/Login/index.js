import React, { Fragment, useState, useContext } from 'react';
import GlobalContext from '../GlobalState/globalContext';
import InvalidUrl from '../InvalidUrl';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from '../../config/Fire';
import { Button, Form } from 'react-bootstrap';
import Particles from 'react-particles-js';
import Header from '../Header/';
import { NavLink, withRouter } from 'react-router-dom';

function LoginView(props) {
	const globalContext = useContext(GlobalContext);
	const { userEmail, isDayMode } = globalContext;

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const login = e => {
		e.preventDefault();
		fire.auth()
			.signInWithEmailAndPassword(email, password)
			.then(u => {})
			.catch(error => {
				console.log(error);
			});
		props.history.push('/');
	};

	const onChangeEmail = email => {
		setEmail(email);
	};

	const onChangePass = password => {
		setPassword(password);
	};

	return userEmail === '' ? (
		<Fragment>
			<Header />
			<section id="login">
				<Particles className="particles" />
				<div className="container">
					<Form>
						<NavLink to="/">
							<span className="back">{'<'}</span>
						</NavLink>
						<p>Once you're logged in, you can start swapping right away!</p>
						<Form.Group controlId="formBasicUsername">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email"
								onChange={e => onChangeEmail(e.target.value)}
							/>
						</Form.Group>
						<span className="errorMsg">test</span>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={e => onChangePass(e.target.value)}
							/>
						</Form.Group>
						<span className="errorMsg">test</span>

						<Button variant={isDayMode ? 'info' : 'primary'} type="submit" onClick={e => login(e)}>
							Log In
						</Button>
					</Form>
				</div>
			</section>
		</Fragment>
	) : (
		<InvalidUrl reason="userAlreadyLogged" />
	);
}

export default withRouter(LoginView);
