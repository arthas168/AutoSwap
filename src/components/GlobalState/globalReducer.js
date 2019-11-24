import { USER_AUTH, TOGGLE_MODE } from './types';

export default (state, action) => {
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
		default: {
			return '';
		}
	}
};
