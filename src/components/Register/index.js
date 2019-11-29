import React, { Fragment, useState, useContext } from 'react';
import GlobalContext from '../GlobalState/globalContext';
import InvalidUrl from '../InvalidUrl';
import fire from '../../config/Fire';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import Particles from 'react-particles-js';
import Header from '../Header/';
import { NavLink } from 'react-router-dom';
import { validateEmail } from '../../helpers/helperFns';

export default function RegisterView() {
	const globalContext = useContext(GlobalContext);
	const { userEmail, isDayMode } = globalContext;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [emailErrorMsg, setEmailErrorMsg] = useState('');
	const [passErrorMsg, setPassErrorMsg] = useState('');
	const [repeatPassErrorMsg, setRepeatPassErrorMsg] = useState('');
	const [globalErrorMsg, setGlobalErrorMsg] = useState('');

	const register = e => {
		e.preventDefault();
		if (email !== '' && password !== '' && repeatPassword !== '') {
			if (emailErrorMsg === '' && passErrorMsg === '' && repeatPassErrorMsg === '') {
				if (repeatPassword.toLowerCase() !== password.toLowerCase()) {
					setRepeatPassErrorMsg('Passwords do not match!');
				} else {
					fire.auth()
						.createUserWithEmailAndPassword(email, password)
						.then(u => {})
						.then(u => {
							console.log(u);
						})
						.catch(error => {
							setGlobalErrorMsg('Email already in use!');
						});
				}
			}
		} else {
			if (password === '') {
				setPassErrorMsg('Please enter a valid password!');
			}
			if (email === '') {
				setEmailErrorMsg('Please enter a valid email address!');
			}
			if (repeatPassword === '') {
				setRepeatPassErrorMsg('Please type in your password again!');
			}
		}
	};

	const onEmailChange = e => {
		const newEmail = e.target.value;
		if (newEmail === '') {
			setEmailErrorMsg('');
			setEmail('');
		} else {
			if (validateEmail(newEmail)) {
				setEmail(newEmail);
				setEmailErrorMsg('');
			} else {
				setEmailErrorMsg('Invalid email address!');
				setEmail('');
			}
		}
	};

	const onPasswordChange = e => {
		const newPassword = e.target.value;
		if (newPassword === '') {
			setPassErrorMsg('');
			setPassword('');
		} else {
			if (newPassword.length < 6) {
				setPassErrorMsg('Password must be at least 6 characters!');
				setPassword('');
			} else {
				setPassword(newPassword);
				setPassErrorMsg('');
			}
		}
	};

	const onRepeatPasswordChange = e => {
		const newRepeatPass = e.target.value;
		if (newRepeatPass === '') {
			setRepeatPassErrorMsg('');
			setRepeatPassword('');
		} else {
			if (newRepeatPass.toLowerCase() !== password.toLowerCase()) {
				setRepeatPassErrorMsg('Passwords do not match!');
				setRepeatPassword('');
			} else {
				setRepeatPassword(newRepeatPass);
				setRepeatPassErrorMsg('');
			}
		}
	};

	return userEmail === '' ? (
		<Fragment>
			<Header />
			<section id="register">
				<Particles className="particles" />
				<div className="container">
					<Form>
						<NavLink to="/">
							<span className="back">{'<'}</span>
						</NavLink>
						<p>As soon as you register an account you can start swapping right away!</p>

						<span className="error-msg">{globalErrorMsg}</span>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email"
								onChange={e => {
									onEmailChange(e);
								}}
							/>
						</Form.Group>
						<span className="error-msg">{emailErrorMsg}</span>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={e => {
									onPasswordChange(e);
								}}
							/>
						</Form.Group>
						<span className="error-msg">{passErrorMsg}</span>

						<Form.Group controlId="formBasicRepeatPassword">
							<Form.Label>Repeat Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Repeat Password"
								onChange={e => {
									onRepeatPasswordChange(e);
								}}
							/>
						</Form.Group>
						<span className="error-msg">{repeatPassErrorMsg}</span>

						<Button
							variant={isDayMode ? 'info' : 'primary'}
							type="submit"
							onClick={e => {
								register(e);
							}}
						>
							Register
						</Button>
					</Form>
				</div>
			</section>
		</Fragment>
	) : (
		<InvalidUrl reason="userAlreadyLogged" />
	);
}
