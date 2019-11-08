import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

export default function Contacts() {
	return (
		<section id="contacts">
			<div className="container">
				<Form>
					<Form.Group controlId="formBasicFirstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="name" placeholder="First Name" />
					</Form.Group>

					<Form.Group controlId="formBasicLastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="name" placeholder="Last Name" />
					</Form.Group>

					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Email Address" />
					</Form.Group>

					<Button variant="secondary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</section>
	);
}
