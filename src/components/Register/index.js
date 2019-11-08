import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import Particles from 'react-particles-js';

export default function RegisterView() {
	return (
		<section id="register">
			<Particles className="particles" />
			<div className="container">
				<Form>
					<Form.Group controlId="formBasicUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control type="username" placeholder="Username" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<Form.Group controlId="formBasicRepeatPassword">
						<Form.Label>Repeat Password</Form.Label>
						<Form.Control type="password" placeholder="Repeat Password" />
					</Form.Group>

					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Email Address" />
					</Form.Group>
				
					<Button variant="secondary" type="submit">
						Register
					</Button>
				</Form>
			</div>
		</section>
	);
}
