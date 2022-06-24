import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <input
          placeholder="Valor"
          name="value-input"
          data-testid="value-input"
        />

        <label htmlFor="moeda">
          <select name="moeda">
            {
              currencies.map((key) => (
                <option key={ key } value={ key }>{ key }</option>
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
