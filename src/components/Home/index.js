import React, { Fragment, useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalContext from '../GlobalState/globalContext';
import { Button } from 'react-bootstrap';
import Particles from 'react-particles-js';
import Typed from 'react-typed';
import Header from '../Header/';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { getTransactions } from '../../helpers/firebaseFns';

export default function Home() {
	const globalContext = useContext(GlobalContext);
	const { userEmail, isDayMode } = globalContext;
	const [transactions, setTransactions] = useState();

	useEffect(() => {
		getTransactions(setTransactions);
	}, []);

	return (
		<Fragment>
			<Header />
			<section id="home">
				<Particles className="particles" />
				<div className="container">
					{transactions ? (
						<div className="dashboard heartbeat">
							<span>
								Total AutoSwaps: <span>{transactions.length}</span>
							</span>
						</div>
					) : null}
					<Typed
						className="typed-text"
						strings={['Fully Automated', 'Cross-chain', 'Lightning fast']}
						typeSpeed={80}
						backSpeed={50}
						loop
					/>
					<h1>Atomic Swap Service</h1>

					{userEmail === '' ? (
						<div className="buttons-wrapper">
							<Link to="/login">
								<Button variant={isDayMode ? 'info' : 'primary'}>Log In</Button>
							</Link>
							<Link to="/register">
								<Button variant={isDayMode ? 'outline-dark' : 'secondary'}>
									Don't have an account? Register now!
								</Button>
							</Link>
						</div>
					) : (
						<div className="buttons-wrapper logged">
							<Link to="/swap">
								<Button variant={isDayMode ? 'info' : 'primary'}>Swap Now</Button>
							</Link>
						</div>
					)}
				</div>
			</section>
			<Footer />
		</Fragment>
	);
}
