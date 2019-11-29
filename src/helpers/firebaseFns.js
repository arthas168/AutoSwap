import { getRandomTime, generateSalt, getPriceToUSD } from './helperFns';
import { sumBalance } from './helperFns';

const axios = require('axios');
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const sha256 = require('js-sha256');

export const getBalance = (setBalance, userEmail) => {
	axios
		.get(proxyUrl + 'https://us-central1-atomic-swap.cloudfunctions.net/getBalance')
		.then(response => {
			setBalance(sumBalance(Object.values(response.data), userEmail));
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
};

export const updateBalance = (email, isDeposit, currency, amount) => {
	axios
		.post(proxyUrl + 'https://us-central1-atomic-swap.cloudfunctions.net/postBalance', {
			userHandle: email,
			type: isDeposit ? 'deposit' : 'withdraw',
			currency: currency,
			amount: parseInt(amount),
		})
		.then(function(response) {
			// console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
};

export const getTransactions = setTransactions => {
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
};

export const createTransaction = async (firstAmount, secondAmount, firstCurrency, secondCurrency, email) => {
	axios
		.post(proxyUrl + 'https://us-central1-atomic-swap.cloudfunctions.net/createTransaction', {
			userHandle: email,
			ethAmount: firstCurrency.value === 'eth' ? firstAmount : secondAmount,
			ethPrice: await getPriceToUSD('ETH'),
			execTime: getRandomTime(),
			trxAmount: secondCurrency.value === 'trx' ? secondAmount : firstAmount,
			trxPrice: await getPriceToUSD('TRX'),
			txHash: sha256(email + generateSalt()),
		})
		.then(function(response) {
			//console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
};
