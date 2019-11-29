import React, { Fragment, useState, useContext } from 'react';
import GlobalContext from '../GlobalState/globalContext';
import InvalidUrl from '../InvalidUrl';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from '../../config/Fire';
import { Button, Form } from 'react-bootstrap';
import Particles from 'react-particles-js';
import Header from '../Header/';
import { NavLink, withRouter } from 'react-router-dom';
import { validateEmail } from '../../helpers/helperFns';

function LoginView() {
	const globalContext = useContext(GlobalContext);
	const { userEmail, isDayMode } = globalContext;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailErrorMsg, setEmailErrorMsg] = useState('');
	const [passErrorMsg, setPassErrorMsg] = useState('');
	const [globalErrorMsg, setGlobalErrorMsg] = useState('');

	const login = e => {
		e.preventDefault();
		if (email !== '' && password !== '') {
			if (emailErrorMsg === '' && passErrorMsg === '') {
				fire.auth()
					.signInWithEmailAndPassword(email, password)
					.then(u => {})
					.catch(error => {
						setGlobalErrorMsg('Incorrect email or password');
					});
			}
		} else {
			if (password === '') {
				setPassErrorMsg('Please enter a valid password!');
			}
			if (email === '') {
				setEmailErrorMsg('Please enter a valid email address!');
			}
		}
	};

	const onChangeEmail = newEmail => {
		if (newEmail === '') {
			setEmailErrorMsg('');
			setEmail('');
		} else {
			if (validateEmail(newEmail)) {
				setEmail(newEmail);
				setEmailErrorMsg('');
			} else {
				setEmailErrorMsg('Incorrect email address format!');
				setEmail('');
			}
		}
	};

	const onChangePass = newPassword => {
		if (newPassword !== '') {
			setPassword(newPassword);
			setPassErrorMsg('');
		} else {
			setPassErrorMsg('Please enter a valid password!');
			setPassword('');
		}
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
						<span className="error-msg">{globalErrorMsg}</span>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email"
								onChange={e => onChangeEmail(e.target.value)}
							/>
						</Form.Group>
						<span className="error-msg">{emailErrorMsg}</span>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={e => onChangePass(e.target.value)}
							/>
						</Form.Group>
						<span className="error-msg">{passErrorMsg}</span>

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
