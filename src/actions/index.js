import { SUBMIT_LOGIN_FORM, WALLET_FORM } from './ActionTypes';

export const createActionSubmitForm = (email) => ({
  type: SUBMIT_LOGIN_FORM,
  email,
});

export const createWalletActions = (value) => ({
  type: WALLET_FORM,
  payload: value,
});
