import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  async componentDidMount() {
    const { thunkCurrencies } = this.props;
    thunkCurrencies();
  }

  render() {
    return (
      <div className="Wallet">
        <Header />
        <Table />
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
