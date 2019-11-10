import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import Header from '../Header/';

export default function Contacts() {
	return (
		<section id="contacts">
			<Header />
			<div className="container">
				<Form>
					<p>If you have any questions about our project, feel free to send a message!</p>

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

					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Message</Form.Label>
						<Form.Control as="textarea" rows="3" placeholder="Write here..." />
					</Form.Group>

					<Button variant="secondary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</section>
	);
}
