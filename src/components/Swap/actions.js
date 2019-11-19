import axios from 'axios';
import { UPDATE_TOKEN_SELECTOR, UPDATE_PRICE, CALC_PRICE, GET_PRICES } from './types';

require('babel-polyfill');

export const updatePrice = (value, token) => ({
    type: UPDATE_PRICE,
    payload: { value, token },
});


export const calcPrice = (value, token) => ({
    type: CALC_PRICE,
    payload: { value, token },
});

export const getPrices = async () => {
    try {
        const res = await axios.get('https://spacejelly.network/price/');
        return {
            type: GET_PRICES,
            payload: { prices: res.data },
        };
    } catch (error) {
        return {
            type: GET_PRICES,
            payload: { prices: null },
        };
    }
};

export const updateTokenSelector = async (value, token) => ({
    type: UPDATE_TOKEN_SELECTOR,
    payload: { value, token },
});
