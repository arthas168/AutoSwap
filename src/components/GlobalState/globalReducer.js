import { USER_AUTH, TOGGLE_MODE } from './types';

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
				isDayMode: true,
			};
		}
		default: {
			return '';
		}
	}
};
