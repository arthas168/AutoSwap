import React, { Fragment, useContext, useState } from 'react';
import GlobalContext from '../GlobalState/globalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import Header from '../Header/';
import Footer from '../Footer/';
import Particles from 'react-particles-js';
import { validateEmail } from '../../helpers/helperFns';

export default function Contacts(props) {
	const globalContext = useContext(GlobalContext);
	const { isDayMode, userEmail } = globalContext;

	const [name, setName] = useState('');
	const [text, setText] = useState('');
	const [email, setEmail] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);

	const [nameErrorMsg, setNameErrorMsg] = useState('');
	const [textErrorMsg, setTextErrorMsg] = useState('');
	const [emailErrorMsg, setEmailErrorMsg] = useState('');

	const onNameChange = newName => {
		if (newName === '') {
			setNameErrorMsg('');
			setName('');
		} else {
			if (!isNumeric(newName)) {
				setName(newName);
				setNameErrorMsg('');
			} else {
				setNameErrorMsg('Name must not contain digits!');
			}
		}
	};

	const onEmailChange = newEmail => {
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

	const onTextChange = newText => {
		if (newText === '') {
			setTextErrorMsg('');
			setText('');
		} else {
			setText(newText);
			setTextErrorMsg('');
		}
	};

	const onSubmit = e => {
		e.preventDefault();
		if (name !== '' && text !== '') {
			setIsSubmitted(true);
		} else {
			if (name === '') {
				setNameErrorMsg('Please enter a name!');
			}
			if (email === '' && userEmail === '') {
				setEmailErrorMsg('Please enter a valid email address!');
			}
			if (text === '') {
				setTextErrorMsg('Please enter text!');
			}
		}
	};

	function isNumeric(n) {
		let hasNumber = /\d/;
		return hasNumber.test(n);
	}

	return (
		<Fragment>
			<Header />
			<section id="contacts">
				<Particles className="particles" />
				<div className="container">
					{!isSubmitted ? (
						<Form>
							<p>If you have any questions about our project, feel free to send a message!</p>

							<Form.Group controlId="formBasicFirstName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="name"
									placeholder="Name"
									onChange={e => onNameChange(e.target.value)}
								/>
							</Form.Group>
							<span className="error-msg">{nameErrorMsg}</span>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email</Form.Label>
								{userEmail === '' ? (
									<Form.Control
										type="email"
										placeholder="Email Address"
										onChange={e => {
											onEmailChange(e.target.value);
										}}
									/>
								) : (
									<Form.Control type="email" placeholder={userEmail} disabled={true} />
								)}
							</Form.Group>
							<span className="error-msg">{emailErrorMsg}</span>

							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Message</Form.Label>
								<Form.Control
									as="textarea"
									rows="3"
									placeholder="Write here..."
									onChange={e => onTextChange(e.target.value)}
								/>
							</Form.Group>
							<span className="error-msg">{textErrorMsg}</span>

							<Button
								variant={isDayMode ? 'outline-dark' : 'secondary'}
								type="submit"
								onClick={e => onSubmit(e)}
							>
								Submit
							</Button>
						</Form>
					) : (
						<div className="thank-you">
							<span>Thanks for your feedback! We will get back to you as soon as possible.</span>
							<Button
								variant={isDayMode ? 'info' : 'primary'}
								type="submit"
								onClick={() => {
									props.history.push('/');
								}}
							>
								Back to Home Page
							</Button>
						</div>
					)}
				</div>
			</section>
			<Footer />
		</Fragment>
	);
}
