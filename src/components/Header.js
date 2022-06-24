import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, curr) => {
      const exchange = curr.exchangeRates[curr.currency].ask;
      return acc + (curr.value * exchange);
    }, 0);
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <strong data-testid="total-field">
          {
            expenses.length === 0 ? 0
              : total.toFixed(2)
          }

        </strong>
        <strong data-testid="header-currency-field">BRL</strong>
        <Form />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
