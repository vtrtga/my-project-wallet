import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPrice } from '../actions';

class Form extends Component {
  state = {
    id: 0,
    value: 0,
    description: '',
    method: 'Dinheiro',
    currency: 'USD',
    tag: 'Alimentação',
  }

  onHandleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  onHandleClick = () => {
    const { description, value, method, currency, tag, id } = this.state;
    const { toGlobalState } = this.props;
    const stateStorage = {
      id,
      value,
      currency,
      method,
      tag,
      description,
    };
    this.setState((prev) => ({
      id: prev.id + 1,
      value: 0,
    }));
    toGlobalState(stateStorage);
  }

  render() {
    const { description, value, method, currency, tag } = this.state;
    const { currencies } = this.props;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <input
          placeholder="Descrição"
          value={ description }
          onChange={ this.onHandleChange }
          name="description"
          data-testid="description-input"
          type="text"
        />
        <input
          value={ value }
          onChange={ this.onHandleChange }
          placeholder="Valor"
          name="value"
          data-testid="value-input"
          type="number"
        />
        <label htmlFor="method">
          <select
            name="method"
            id="method"
            value={ method }
            data-testid="method-input"
            onChange={ this.onHandleChange }
          >
            {
              paymentMethods.map((met) => (
                <option key={ met }>{ met }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            value={ currency }
            onChange={ this.onHandleChange }
            id="moeda"
            name="currency"
          >
            {
              currencies.map((key) => (
                <option key={ key } value={ key }>{ key }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="category">
          Categoria
          <select
            value={ tag }
            onChange={ this.onHandleChange }
            name="tag"
            id="category"
            data-testid="tag-input"
          >
            {
              categories.map((cat) => (
                <option key={ cat } value={ cat }>{ cat }</option>
              ))
            }
          </select>
        </label>
        <button onClick={ this.onHandleClick } type="button">Adicionar despesa</button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  toGlobalState: (state) => dispatch(fetchPrice(state)),
});
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
  toGlobalState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
