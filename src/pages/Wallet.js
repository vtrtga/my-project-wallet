import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  async componentDidMount() {
    const { thunkCurrencies } = this.props;
    thunkCurrencies();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  thunkCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  thunkCurrencies: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Wallet);
// export default Wallet;
