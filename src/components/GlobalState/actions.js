import { USER_AUTH, TOGGLE_MODE, UPDATE_BALANCE } from './types';

export const userAuth = email => ({
	type: USER_AUTH,
	payload: email,
});

export const toggleMode = () => ({
	type: TOGGLE_MODE,
});

export const updateBalance = balance => ({
	type: UPDATE_BALANCE,
	payload: balance,
});
