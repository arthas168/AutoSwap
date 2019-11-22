import { USER_AUTH, TOGGLE_MODE } from './types';

export const userAuth = (email) => ({
    type: USER_AUTH,
    payload: email,
});


export const toggleMode = () => ({
    type: TOGGLE_MODE,
});
