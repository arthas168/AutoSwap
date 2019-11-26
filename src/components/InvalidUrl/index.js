import React from 'react';
import { Spinner } from 'react-bootstrap';
import Particles from 'react-particles-js';
import Countdown from 'react-countdown-now';
import { withRouter } from 'react-router-dom';

function index(props) {
	console.log(props);
	const renderer = ({ seconds, completed }) => {
		if (completed) {
			props.history.push('/');
			return null;
		} else {
			return <span>{seconds}</span>;
		}
	};

	return (
		<section id="invalidUrl">
			<Particles className="particles" />
			<div className="container">
				<Spinner className="spinner" animation="border" variant="primary" />
				{props.reason === 'userNotLogged' || props.reason === 'userAlreadyLogged' ? (
					<Countdown date={Date.now()} renderer={renderer} />
				) : (
					<h1>
						Oops! Invalid URL :( <br></br>
						<br></br> Redirecting to home page... <Countdown date={Date.now() + 5000} renderer={renderer} />
						s
					</h1>
				)}
			</div>
		</section>
	);
}

export default withRouter(index);
