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

export const getPrice = (exchangeRates, state) => ({
  type: GET_PRICE,
  exchangeRates,
  state,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies: Object.keys(currencies),
});

export function fetchCurrencies() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(saveCurrencies(currencies)));
  };
}
export function fetchPrice(state) {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(getPrice(currencies, state)));
  };
}
