import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const tableParams = ['Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir'];
    const { expenses } = this.props;
    return (
      <table className="Table">
        <tr className="params">
          {
            tableParams.map((param) => <th key={ param }>{ param }</th>)
          }
        </tr>

        {
          expenses.map((ex) => (
            <tr key={ ex.id }>
              <td>{ex.description}</td>
              <td>{ex.tag}</td>
              <td>{ex.method}</td>
              <td>{Number(ex.value).toFixed(2)}</td>
              <td>
                {
                  ex.exchangeRates[ex.currency].name.split('/')[0]
                }

              </td>
              <td>
                {
                  Number(ex.exchangeRates[ex.currency].ask).toFixed(2)
                }
              </td>
              <td>
                {Number(ex.exchangeRates[ex.currency].ask * ex.value)
                  .toFixed(2)}

              </td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <button type="button">Excluir</button>
              </td>
            </tr>
          ))

        }

      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(Table);
