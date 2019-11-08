import { UPDATE_PRICE, UPDATE_TOKEN_SELECTOR, GET_PRICES, CALC_PRICE } from './types';

export default (state, action) => {
    console.log(action)
    const { token, value } = action.payload;
    let baseAmount = state.firstAmount;
    let quoteAmount = state.secondAmount;
    const baseDecimals = state.firstCurrency.decimals;
    const quoteDecimals = state.secondCurrency.decimals;
    const baseTokenName = state.firstCurrency.label;
    const quoteTokenName = state.secondCurrency.label;

    switch (action.type) {
        case GET_PRICES: {
            const { prices } = action.payload;
            return {
                ...state,
                prices,
            };
        }
        case CALC_PRICE: {
            const { prices } = state;

            if (prices) {
                if (token === 'first') {
                    quoteAmount = value * prices[baseTokenName][quoteTokenName];
                    quoteAmount = parseFloat(Number(quoteAmount).toFixed(quoteDecimals));
                } else if (token === 'second') {
                    baseAmount = value * prices[quoteTokenName][baseTokenName];
                    baseAmount = parseFloat(Number(baseAmount).toFixed(baseDecimals));
                }
            }

            return {
                ...state,
                firstAmount: token === 'first' ? value : baseAmount,
                secondAmount: token === 'second' ? value : quoteAmount,
            };
        }

        case UPDATE_PRICE:
            return {
                ...state,
                firstAmount: action.payload.token === 'first' ? value : state.firstAmount,
                secondAmount: action.payload.token === 'second' ? value : state.secondAmount,
            };

        case UPDATE_TOKEN_SELECTOR: {
            const { prices } = state;

            if (prices) {
                if (token === 'first') {
                    quoteAmount = baseAmount * prices[value.label][quoteTokenName];
                    quoteAmount = parseFloat(Number(quoteAmount).toFixed(quoteDecimals));
                    baseAmount = parseFloat(Number(baseAmount).toFixed(value.decimals));
                }
                if (token === 'second') {
                    baseAmount = quoteAmount * state.prices[value.label][baseTokenName];
                    baseAmount = parseFloat(Number(baseAmount).toFixed(baseDecimals));
                    quoteAmount = parseFloat(Number(quoteAmount).toFixed(value.decimals));
                }
            }
            return {
                ...state,
                secondAmount: quoteAmount,
                firstAmount: baseAmount,
                firstCurrency: value,
            };
        }

        default:
            return '';
    }
};
