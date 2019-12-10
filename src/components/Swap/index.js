import React, { useContext, Fragment, useState, useEffect } from 'react';
import SwapContext from './swapContext';
import GlobalContext from '../GlobalState/globalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import InvalidUrl from '../InvalidUrl';
import Select from 'react-select';
import customSelectStyles from './customSelectStyles';
import tokens from './tokens';
import validator from '../../helpers/numValidator';
import Header from '../Header/';
import Footer from '../Footer/';
import Particles from 'react-particles-js';
import { Spinner } from 'react-bootstrap';
import { createTransaction, updateBalance, getBalance } from '../../helpers/firebaseFns';
import Countdown from 'react-countdown-now';

export default function Swap(props) {
	const globalContext = useContext(GlobalContext);
	const { userEmail, isDayMode, balance, onUpdateBalance } = globalContext;
	const [isSwapSubmitted, setIsSwapSubmitted] = useState(false);
	const alert = useAlert();

	useEffect(() => {
		getBalance(onUpdateBalance, userEmail);
	}, []);

	const renderer = ({ seconds, completed }) => {
		if (completed) {
			props.history.push('/user');
			alert.success(
				`successfully swapped ${firstAmount}${firstCurrency.label} for ${secondAmount}${secondCurrency.label}`
			);
			return null;
		} else {
			return null;
		}
	};

	const swapContext = useContext(SwapContext);
	const {
		firstCurrency,
		secondCurrency,
		firstAmount,
		secondAmount,
		onUpdateTokenSelector,
		onCalcPrice,
		onUpdatePrice,
	} = swapContext;

	const handleInputChange = (value, currency) => {
		const amount = currency === 'first' ? firstAmount : secondAmount;
		const decimals = currency === 'first' ? firstCurrency.decimals : secondCurrency.decimals;
		if (validator(value, decimals) === '' && amount.toString().length === 1) {
			onUpdatePrice('', currency);
			onCalcPrice('', currency);
		} else if (validator(value, decimals)) {
			onUpdatePrice(value, currency);
			onCalcPrice(value, currency);
		}
	};

	const onSwapSubmit = e => {
		e.preventDefault();
		if (firstCurrency.value === 'trx') {
			if (balance.trx >= firstAmount) {
				if (firstAmount === 0 || firstAmount === '') {
					balance.trx === 0
						? alert.error(`You have to deposit TRX first (go to my profile page)`)
						: alert.error('amount must be a positive number');
				} else {
					if (firstCurrency.value === secondCurrency.value) {
						alert.error('first and second currency cannot be the same');
					} else {
						setIsSwapSubmitted(true);
						createTransaction(firstAmount, secondAmount, firstCurrency, secondCurrency, userEmail);
						updateBalance(userEmail, false, 'TRX', firstAmount);
						updateBalance(userEmail, true, 'ETH', secondAmount);
						alert.show('Please wait while transaction gets approved by the blockchain networks');
					}
				}
			} else {
				balance.trx === 0
					? alert.error(`You have to deposit TRX first (go to my profile page)`)
					: alert.error(`Amount cannot be more than ${balance.trx}TRX!`);
			}
		} else {
			if (balance.eth >= firstAmount) {
				if (firstAmount === 0 || firstAmount === '') {
					balance.eth === 0
						? alert.error(`You have to deposit ETH first (go to my profile page)`)
						: alert.error('amount must be a positive number');
				} else {
					if (firstCurrency.value === secondCurrency.value) {
						alert.error('first and second currency cannot be the same');
					} else {
						setIsSwapSubmitted(true);
						createTransaction(firstAmount, secondAmount, firstCurrency, secondCurrency, userEmail);
						updateBalance(userEmail, false, 'ETH', firstAmount);
						updateBalance(userEmail, true, 'TRX', secondAmount);
						alert.show('Please wait while transaction gets approved by the blockchain networks');
					}
				}
			} else {
				balance.eth === 0
					? alert.error(`You have to deposit ETH first (go to my profile page)`)
					: alert.error(`Amount cannot be more than ${balance.eth}ETH!`);
			}
		}
	};

	return userEmail !== '' ? (
		<Fragment>
			<Header />
			<section id="swap">
				<Particles className="particles" />
				<div className="container">
					{!isSwapSubmitted ? (
						<div className="form">
							<p>Choose a token pair and enter the amount you wish to swap</p>
							<InputGroup className="mb-3">
								<p className="subtext">Send</p>

								<Select
									styles={customSelectStyles()}
									onChange={e => {
										onUpdateTokenSelector(e, 'first');
									}}
									value={firstCurrency.label}
									placeholder={firstCurrency.label}
									options={tokens}
								/>
								<FormControl
									aria-describedby="basic-addon1"
									as="input"
									className="amount"
									value={firstAmount}
									placeholder="0"
									onChange={e => {
										handleInputChange(e.target.value, 'first');
									}}
								/>
							</InputGroup>
							<InputGroup className="mb-3">
								<p className="subtext">Receive</p>

								<Select
									styles={customSelectStyles()}
									onChange={e => {
										onUpdateTokenSelector(e, 'second');
									}}
									value={secondCurrency.label}
									placeholder={secondCurrency.label}
									options={tokens}
								/>
								<FormControl
									aria-describedby="basic-addon1"
									as="input"
									className="amount"
									value={secondAmount}
									placeholder="0"
									onChange={e => {
										handleInputChange(e.target.value, 'second');
									}}
								/>
							</InputGroup>

							<Button
								variant={isDayMode ? 'info' : 'primary'}
								onClick={e => {
									onSwapSubmit(e);
								}}
							>
								Swap Now
							</Button>
						</div>
					) : (
						<Fragment>
							<Spinner className="spinner" animation="border" variant="primary" />
							<Countdown date={Date.now() + 2000} renderer={renderer} />
						</Fragment>
					)}
				</div>
			</section>
			<Footer />
		</Fragment>
	) : (
		<InvalidUrl reason="userNotLogged" />
	);
}
