import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <input
          placeholder="Descrição"
          name="description"
          data-testid="description-input"
          type="text"
        />
        <input
          placeholder="Valor"
          name="value"
          data-testid="value-input"
          type="number"
        />
        <label htmlFor="paymentMethod">
          <select data-testid="method-input">
            {
              paymentMethods.map((method) => (
                <option key={ method } value={ method }>{ method }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda">
            {
              currencies.map((key) => (
                <option key={ key } value={ key }>{ key }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="category">
          Categoria
          <select data-testid="tag-input">
            {
              category.map((cat) => (
                <option key={ cat } value={ cat }>{ cat }</option>
              ))
            }
          </select>
        </label>

      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Form);
