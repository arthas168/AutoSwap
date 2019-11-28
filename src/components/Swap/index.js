import React, { useContext, Fragment, useState } from 'react';
import axios from 'axios';
import SwapContext from './swapContext';
import GlobalContext from '../GlobalState/globalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import InvalidUrl from '../InvalidUrl';
import Select from 'react-select';
import customSelectStyles from './customSelectStyles';
import tokens from './tokens';
import validator from './validator';
import Header from '../Header/';
import Footer from '../Footer/';
import Particles from 'react-particles-js';
import { Spinner } from 'react-bootstrap';
var sha256 = require('js-sha256');

export default function Swap() {
	const globalContext = useContext(GlobalContext);
	const { userEmail, isDayMode } = globalContext;
	const [isSwapSubmitted, setIsSwapSubmitted] = useState(false);

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

	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

	function getRandomTime() {
		let randMin = Math.floor(Math.random() * Math.floor(1));
		let randSec1 = Math.floor(Math.random() * Math.floor(5));
		let randSec2 = Math.floor(Math.random() * Math.floor(9));

		const res = '0' + randMin + ':' + randSec1 + randSec2;
		return res;
	}

	function generateSalt() {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < 10; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	async function getPriceToUSDT(currency) {
		const res = await axios.get('https://spacejelly.network/price/');
		return res.data[currency]['USDT'];
	}
	
	const pushToFirebase = async () => {
		axios
			.post(proxyUrl + 'https://us-central1-atomic-swap.cloudfunctions.net/createTransaction', {
				userHandle: userEmail,
				ethAmount: firstCurrency.value === 'eth' ? firstAmount : secondAmount,
				ethPrice: await getPriceToUSDT('ETH'),
				execTime: getRandomTime(),
				trxAmount: secondCurrency.value === 'trx' ? secondAmount : firstAmount,
				trxPrice: await getPriceToUSDT('TRX'),
				txHash: sha256(userEmail + generateSalt()),
			})
			.then(function(response) {
				//console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	const onSwapSubmit = e => {
		e.preventDefault();
		setIsSwapSubmitted(true);
		pushToFirebase();
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
						<Spinner className="spinner" animation="border" variant="primary" />
					)}
				</div>
			</section>
			<Footer />
		</Fragment>
	) : (
		<InvalidUrl reason="userNotLogged" />
	);
}
