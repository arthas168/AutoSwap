import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import SwapContext from './globalContext';
import GlobalReducer from './globalReducer';
import { userAuth, toggleMode, updateBalance } from './actions';

const GlobalState = props => {
	const initialState = {
		userEmail: '',
		isDayMode: false,
		balance: {
			eth: 0,
			trx: 0,
		},
	};

	const [state, dispatch] = useReducer(GlobalReducer, initialState);
	if (state.isDayMode) {
		document.body.classList.remove('night');
		document.body.classList.add('day');
	} else {
		document.body.classList.remove('day');
		document.body.classList.add('night');
	}

	const onUserAuth = value => dispatch(userAuth(value));
	const onToggleMode = value => dispatch(toggleMode(value));
	const onUpdateBalance = value => dispatch(updateBalance(value));

	return (
		<SwapContext.Provider
			value={{
				userEmail: state.userEmail,
				isDayMode: state.isDayMode,
				balance: state.balance,

				// actions
				onUserAuth,
				onToggleMode,
				onUpdateBalance,
			}}
		>
			{props.children}
		</SwapContext.Provider>
	);
};

GlobalState.propTypes = {
	children: PropTypes.any,
};

export default GlobalState;
