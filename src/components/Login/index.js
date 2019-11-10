import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import Particles from 'react-particles-js';
import Header from '../Header/';

export default function LoginView() {
	return (
		<section id="login">
			<Particles className="particles" />
			<Header />
			<div className="container">
				<Form>
					<p>Once you're logged in, you can start swapping right away!</p>
					<Form.Group controlId="formBasicUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control type="username" placeholder="Username" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<Button variant="secondary" type="submit">
						Log In
					</Button>
				</Form>
			</div>
		</section>
	);
}
