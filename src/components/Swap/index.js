import React, { useContext } from 'react';
import SwapContext from './swapContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';
import customSelectStyles from './customSelectStyles';
import tokens from './tokens'

export default function Swap() {

	const swapContext = useContext(SwapContext);
	const {
		onUpdateTokenSelector,
	} = swapContext;

	return (
		<section id="swap">
			<div className="container">
				<div className="form">
					<p>Choose a token pair and enter the amount you wish to swap</p>
					<InputGroup className="mb-3">
						<Select
							styles={customSelectStyles()}
							onChange={e => {
								onUpdateTokenSelector(e, 'first');
						}}
							value={3}
							placeholder={3}
							options={tokens}
						/>
						<FormControl aria-describedby="basic-addon1" />
					</InputGroup>

					<InputGroup className="mb-3">
						<Select
							styles={customSelectStyles()}
							onChange={e => {
								onUpdateTokenSelector(e, 'second');
						}}
							value={3}
							placeholder={3}
							options={tokens}
						/>
						<FormControl aria-describedby="basic-addon1" />
					</InputGroup>

					<Button variant="primary">Swap</Button>
				</div>
			</div>
		</section>
	);
}
