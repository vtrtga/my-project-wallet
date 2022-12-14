import { SAVE_CURRENCIES, GET_PRICE } from '../actions/ActionTypes';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case GET_PRICE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.state }],
    };
  default:
    return state;
  }
};

export default wallet;
