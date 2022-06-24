import
{ GET_PRICE,
  SAVE_CURRENCIES,
  SUBMIT_LOGIN_FORM,
}
from './ActionTypes';

export const createActionSubmitForm = (email) => ({
  type: SUBMIT_LOGIN_FORM,
  email,
});

export const createWalletActions = (value) => ({
  type: WALLET_FORM,
  payload: value,
});

export const getPrice = (state) => ({
  type: GET_PRICE,
  state,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const resp = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await resp.json();
    const curr = Object.keys(data).filter((c) => c !== 'USDT');
    dispatch(saveCurrencies(curr));
  };
}
export function fetchPrice(payload) {
  return async (dispatch) => {
    const resp = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await resp.json();
    payload.exchangeRates = { ...data };
    dispatch(getPrice(payload));
  };
}
