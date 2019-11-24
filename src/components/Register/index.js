import React, { Fragment, useState, useContext } from 'react';
import GlobalContext from "../GlobalState/globalContext";
import InvalidUrl from "../InvalidUrl";
import fire from '../../config/Fire';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import Particles from 'react-particles-js';
import Header from '../Header/';
import { NavLink } from 'react-router-dom';

export default function RegisterView(props) {

	const globalContext = useContext(GlobalContext);
	const { userEmail, isDayMode } = globalContext;

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [repeatPassword, setRepeatPassword] = useState();


	const register = e => {
		e.preventDefault();
		fire.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(u => {})
			.then(u => {
				console.log(u);
			})
			.catch(error => {
				console.log(error);
			});
			props.history.push("/")

	};

	const onEmailChange = e =>{
		setEmail(e.target.value)
	}

	const onPasswordChange = e =>{
		setPassword(e.target.value)
	}

	const onRepeatPasswordChange = e =>{
		setRepeatPassword(e.target.value)
	}

	return (
		userEmail === '' ?
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

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Email" onChange={(e)=>{onEmailChange(e)}}/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" onChange={(e)=>{onPasswordChange(e)}}/>
						</Form.Group>

						<Form.Group controlId="formBasicRepeatPassword">
							<Form.Label>Repeat Password</Form.Label>
							<Form.Control type="password" placeholder="Repeat Password" onChange={(e)=>{onRepeatPasswordChange(e)}}/>
						</Form.Group>

						<Button
							variant={isDayMode ? "info" : "primary"}
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
		:
		<InvalidUrl reason="userAlreadyLogged"/>
	);
}
