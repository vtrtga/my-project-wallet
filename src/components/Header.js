import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <strong data-testid="total-field">0</strong>
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
};

export default connect(mapStateToProps, null)(Header);
