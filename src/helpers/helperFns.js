import axios from 'axios';

export const validateEmail = type => {
	var re = /\S+@\S+\.\S+/;
	return re.test(type);
};

export const generateSalt = () => {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < 10; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

export const getPriceToUSD = async currency => {
	const res = await axios.get('https://spacejelly.network/price/');
	return res.data[currency]['USDT'];
};

export const toDateTime = secs => {
	var t = new Date(1970, 0, 1); // Epoch
	t.setSeconds(secs);
	return t;
};

export const getRandomTime = () => {
	let randMin = Math.floor(Math.random() * Math.floor(1));
	let randSec1 = Math.floor(Math.random() * Math.floor(5));
	let randSec2 = Math.floor(Math.random() * Math.floor(9));

	const res = '0' + randMin + ':' + randSec1 + randSec2;
	return res;
};

export const sumBalance =  rawBalance => {
	const ethDeposits = rawBalance.filter(b => b.type === 'deposit' && b.currency === 'ETH');
	const ethWithdraws = rawBalance.filter(b => b.type === 'withdraw' && b.currency === 'ETH');
	const trxDeposits = rawBalance.filter(b => b.type === 'deposit' && b.currency === 'TRX');
	const trxWithdraws = rawBalance.filter(b => b.type === 'withdraw' && b.currency === 'TRX');
	const ethDepositSum = ethDeposits.reduce((acc, val) => {
		return acc + val.amount;
	}, 0);
	const ethWithdrawSum = ethWithdraws.reduce((acc, val) => {
		return acc + val.amount;
	}, 0);
	const trxDepositSum = trxDeposits.reduce((acc, val) => {
		return acc + val.amount;
	}, 0);
	const trxWithdrawSum = trxWithdraws.reduce((acc, val) => {
		return acc + val.amount;
	}, 0);

	let ethBalance = ethDepositSum - ethWithdrawSum;

	let trxBalance = trxDepositSum - trxWithdrawSum;

	return {
		eth: ethBalance,
		trx: trxBalance,
	};
};
