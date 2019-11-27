import React, { useState, Fragment, useContext, useEffect } from 'react';
import GlobalContext from '../GlobalState/globalContext';
import InvalidUrl from '../InvalidUrl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from '../Header/';
import Footer from '../Footer/';
import Particles from 'react-particles-js';
import Transaction from '../Transaction';
import { Spinner } from 'react-bootstrap';

const axios = require('axios');

export default function UserInfo() {
	const globalContext = useContext(GlobalContext);
	const { isDayMode, userEmail } = globalContext;

	const [isActionClosed, setIsActionClosed] = useState(true);
	const [isActionDeposit, setIsActionDeposit] = useState(false);
	const [chosenCurrency, setChosenCurrency] = useState('ETH');
	const [isVeilOpen, setIsVeilOpen] = useState(false);
	const [transactions, setTransactions] = useState();
	const [chosenTransaction, setChosenTransaction] = useState();

	let actionIsOpenClass = isActionClosed ? 'closed' : 'open';
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

	useEffect(() => {
		axios
			.get(proxyUrl + 'https://us-central1-atomic-swap.cloudfunctions.net/getTransactions')
			.then(response => {
				setTransactions(Object.values(response.data));
			})
			.catch(function(error) {
				if (error.response) {
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log(error.message);
				}
				console.log(error.config);
			});
	}, []);

	const onBtnClick = (actionStatus, isDeposit, currency) => {
		console.log(actionStatus, ' ', isDeposit);
		setIsActionClosed(actionStatus);
		setIsActionDeposit(isDeposit);
		setChosenCurrency(currency);
	};

	const onVeilClose = () => {
		setIsVeilOpen(false);
	};

	const onMoreInfoBtn = t => {
		setIsVeilOpen(true);
		setChosenTransaction(t);
	};

	function toDateTime(secs) {
		var t = new Date(1970, 0, 1); // Epoch
		t.setSeconds(secs);
		return t;
	}

	return userEmail !== '' ? (
		<Fragment>
			<div
				className={isVeilOpen ? 'veil shown' : 'veil hidden'}
				onClick={() => {
					onVeilClose();
				}}
			></div>
			<Header />
			<section id="userInfo">
				<Particles className="particles" />
				<div className="container">
					{isVeilOpen ? <Transaction t={chosenTransaction} /> : null}
					<div className="main-info">
						<h1>
							Total Portfolio Value: <span className="green-span">20045$</span>
						</h1>
						<div className="currencies-list">
							<div className="eth info-group">
								<p>ETH (ETHEREUM) - 2.5</p>
								<p className="green-span">786$</p>
								<div className="buttons">
									<Button onClick={() => onBtnClick(false, true, 'ETH')} variant="success">
										Deposit
									</Button>
									<Button onClick={() => onBtnClick(false, false, 'ETH')} variant="danger">
										Withdraw
									</Button>
								</div>
							</div>
							<div className="trx info-group">
								<p>TRON (TRX) - 12243</p>
								<p className="green-span">20$</p>
								<div className="buttons">
									<Button onClick={() => onBtnClick(false, true, 'TRX')} variant="success">
										Deposit
									</Button>
									<Button onClick={() => onBtnClick(false, false, 'TRX')} variant="danger">
										Withdraw
									</Button>
								</div>
							</div>
						</div>
						<div className={'action ' + actionIsOpenClass}>
							<span className="closer" onClick={() => setIsActionClosed(true)}>
								X
							</span>
							<p className="action-text">
								How much{' '}
								<span className={isActionDeposit ? 'green-span' : 'red-span'}>{chosenCurrency} </span>{' '}
								to{' '}
								<span className={isActionDeposit ? 'green-span' : 'red-span'}>
									{' '}
									{isActionDeposit ? 'deposit' : 'withdraw'}
								</span>
								?
							</p>
							<InputGroup className="mb-3">
								<FormControl aria-describedby="basic-addon1" />
								<InputGroup.Append>
									<Button variant={isActionDeposit ? 'success' : 'danger'}>
										{isActionDeposit ? 'Deposit' : 'Withdraw'}
									</Button>
								</InputGroup.Append>
							</InputGroup>
						</div>
					</div>
					<div className="transaction-list">
						<p className="history">Transaction History</p>
						<Scrollbars className="scroller-area" style={{ width: 400, height: 450 }}>
							{transactions ? (
								transactions.map((t, i) =>
									t.userHandle === userEmail ? (
										<div key={i} className="transaction-card">
											<p>
												Exchanged: <span className="green-span">{t.ethAmount}</span> ETH for{' '}
												<span className="green-span">{t.trxAmount}</span> TRX
											</p>
											<p>On date: {toDateTime(t.date._seconds).toString()}</p>
											<Button
												variant={isDayMode ? 'info' : 'primary'}
												onClick={() => onMoreInfoBtn(t)}
											>
												More Info
											</Button>
										</div>
									) : null
								)
							) : (
								<Spinner className="spinner" animation="border" variant="primary" />
							)}
						</Scrollbars>
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	) : (
		<InvalidUrl reason="userNotLogged" />
	);
}
