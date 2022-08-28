import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createActionSubmitForm } from '../actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButtonDisabled: true,
  }

  buttonDisableOrEnable = () => {
    const { email, password } = this.state;
    const regExp = /\w+@[a-z]+.com/g;
    const magicNumber = 6;

    if (email.match(regExp) && password.length >= magicNumber) {
      return this.setState({ isButtonDisabled: false });
    }
    return this.setState({ isButtonDisabled: true });
  }

  handleOnChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value },
      () => this.buttonDisableOrEnable());
  }

  handleSubmit = () => {
    const { history, dispatchEmail } = this.props;
    const { email } = this.state;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { isButtonDisabled, password, email } = this.state;
    return (
      <div className="area-login">
        <div className="Login">
          <h1>Login</h1>
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="email"
              onChange={ this.handleOnChange }
              data-testid="email-input"
              value={ email }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              value={ password }
              name="password"
              type="password"
              onChange={ this.handleOnChange }
              data-testid="password-input"
            />
          </label>
          <button
            onClick={ this.handleSubmit }
            disabled={ isButtonDisabled }
            type="button"
          >
            Entrar

          </button>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatchEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(createActionSubmitForm(email)),
});

export default connect(null, mapDispatchToProps)(Login);
