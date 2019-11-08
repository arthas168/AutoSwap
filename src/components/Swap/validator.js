/* eslint-disable no-restricted-globals */
/* eslint-disable no-empty */
// TODO: Fix hardcoded decimal point
const AMOUNT_INDEX = 0;

const isValidNumber = (str, decimals) => {
    try {
        const match = `^\\d+\\.*\\d{0,${decimals}}$|$^`;
        const regex = new RegExp(match, 'g');
        const res = str.match(regex);
        return res;
    } catch (error) {}
};

function isNumeric(n) {
    if (n.length === 0) {
        return true;
    }
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export default (value, decimals) => {
    const result = isValidNumber(value, decimals);

    if (result && isNumeric(value)) {
        return result[AMOUNT_INDEX];
    }
    return '';
};
