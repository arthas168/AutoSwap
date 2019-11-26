import React, { useContext, Fragment, useState } from 'react';
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

	const onSwapSubmit = e => {
		e.preventDefault();
		setIsSwapSubmitted(true);
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
