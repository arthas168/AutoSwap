import { USER_AUTH, TOGGLE_MODE, UPDATE_BALANCE } from './types';

export default (state, action) => {
	console.log(action);

	switch (action.type) {
		case USER_AUTH:
			return {
				...state,
				userEmail: action.payload,
			};
		case TOGGLE_MODE: {
			return {
				...state,
				isDayMode: !state.isDayMode,
			};
		}
		case UPDATE_BALANCE: {
			return {
				...state,
				balance: action.payload,
			};
		}
		default: {
			return '';
		}
	}
};
