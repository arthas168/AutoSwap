import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwapContext from './swapContext';
import SwapReducer from './swapReducer';
import tokens from './tokens';
import { updatePrice, updateTokenSelector, calcPrice, getPrices } from './actions';
import useInterval from './useInterval';

const SwapState = props => {
    const initialState = {
        firstCurrency: tokens[0],
        secondCurrency: tokens[1],
        firstAmount: '',
        secondAmount: '',
        prices: {},
    };
    const [state, dispatch] = useReducer(SwapReducer, initialState);

    const onUpdatePrice = (value, token) => dispatch(updatePrice(value, token));
    const onCalcPrice = (value, token) => dispatch(calcPrice(value, token));

    const onUpdateTokenSelector = async (value, token) =>
        dispatch(await updateTokenSelector(value, token));

    const onGetPrices = async () => dispatch(await getPrices());

    useEffect(() => {
        onGetPrices();
    }, []);

    useInterval(async () => {
        dispatch(await getPrices());
    }, 5000);

    return (
        <SwapContext.Provider
            value={{
                firstCurrency: state.firstCurrency,
                secondCurrency: state.secondCurrency,
                firstAmount: state.firstAmount,
                secondAmount: state.secondAmount,
                prices: state.prices,

                // actions
                onUpdatePrice,
                onCalcPrice,
                onUpdateTokenSelector,
            }}
        >
            {props.children}
        </SwapContext.Provider>
    );
};

SwapState.propTypes = {
    children: PropTypes.any,
};

export default SwapState;
