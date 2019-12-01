import React, { useState, Fragment, useContext, useEffect } from 'react';
import GlobalContext from '../GlobalState/globalContext';
import SwapContext from '../Swap/swapContext';

import InvalidUrl from '../InvalidUrl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import { useAlert } from 'react-alert';
import Header from '../Header/';
import Footer from '../Footer/';
import Particles from 'react-particles-js';
import Transaction from '../Transaction';
import { Spinner } from 'react-bootstrap';
import { updateBalance, getBalance, getTransactions } from '../../helpers/firebaseFns';
import { toDateTime } from '../../helpers/helperFns';

const UserInfo = props => {
	const alert = useAlert();
	const globalContext = useContext(GlobalContext);
	const swapContext = useContext(SwapContext);

	const { isDayMode, userEmail, balance, onUpdateBalance } = globalContext;
	const { prices } = swapContext;

	console.log(balance);

	const [isActionClosed, setIsActionClosed] = useState(true);
	const [isActionDeposit, setIsActionDeposit] = useState(false);
	const [chosenCurrency, setChosenCurrency] = useState('ETH');
	const [isVeilOpen, setIsVeilOpen] = useState(false);
	const [transactions, setTransactions] = useState();
	const [chosenTransaction, setChosenTransaction] = useState();
	const [amount, setAmount] = useState();
	const [error, setError] = useState();

	let actionIsOpenClass = isActionClosed ? 'closed' : 'open';

	useEffect(() => {
		getTransactions(setTransactions);
		getBalance(onUpdateBalance, userEmail);
	}, []);

	const onBtnClick = (actionStatus, isDeposit, currency) => {
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

	const onBalanceChange = (userEmail, isActionDeposit, chosenCurrency, amount) => {
		if (amount <= 0) {
			setError('Amount has to be positive number!');
		} else {
			if (chosenCurrency === 'ETH') {
				if (!isActionDeposit && amount > balance.eth) {
					setError("Can't withdraw more than you have!");
				} else {
					updateBalance(userEmail, isActionDeposit, chosenCurrency, amount);
					setIsActionClosed(true);
					props.history.push('/');
					alert.success(
						`Successfully ${isActionDeposit ? 'deposited' : 'withdrawed'} ${amount} ${chosenCurrency}`
					);
				}
			} else {
				if (!isActionDeposit && amount > balance.trx) {
					setError("Can't withdraw more than you have!");
				} else {
					updateBalance(userEmail, isActionDeposit, chosenCurrency, amount);
					setIsActionClosed(true);
					props.history.push('/');
					alert.success(
						`Successfully ${isActionDeposit ? 'deposited' : 'withdrawed'} ${amount} ${chosenCurrency}`
					);
				}
			}
		}
	};

	const onAmountChange = e => {
		setAmount(e.target.value);
	};

	const formatBalance = () => {
		return (balance.eth * prices['ETH']['USDT'] + balance.eth * prices['TRX']['USDT']).toFixed(2);
	};

	const filterTransactions = a => {
		return a.filter(b => b.userHandle === userEmail);
	};

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
							Total Portfolio Value:{' '}
							{balance ? <span className="green-span">{formatBalance()}$</span> : null}
						</h1>
						<div className="currencies-list">
							<div className="eth info-group">
								<p>ETH (ETHEREUM) - {balance.eth}</p>
								<p className="green-span">{balance.eth * prices['ETH']['USDT']}$</p>
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
								<p>TRON (TRX) - {balance.trx}</p>
								<p className="green-span">{balance.trx * prices['TRX']['USDT']}$</p>
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
						)
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
								<FormControl onChange={e => onAmountChange(e)} aria-describedby="basic-addon1" />
								<InputGroup.Append>
									<Button
										onClick={() =>
											onBalanceChange(userEmail, isActionDeposit, chosenCurrency, amount)
										}
										variant={isActionDeposit ? 'success' : 'danger'}
									>
										{isActionDeposit ? 'Deposit' : 'Withdraw'}
									</Button>
								</InputGroup.Append>
							</InputGroup>
							<span className="error">{error}</span>
						</div>
					</div>
					<div className="transaction-list">
						<p className="history">Transaction History</p>
						<Scrollbars className="scroller-area" style={{ width: 400, height: 450 }}>
							{transactions ? (
								filterTransactions(transactions).map((t, i) =>
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
};

export default UserInfo;
