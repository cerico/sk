import React from 'react';
import { connect } from 'react-redux';
import { getRates } from '../actions/currency';

class App extends React.Component {

  componentWillMount(){
    this.props.getRates()
  }

  render () {

    const style = {
      left: {
        width:'50%',
        float:'left',
        textAlign:'center'
      },
      right: {
        width:'50%',
        float:'right',
        textAlign:'center'
      }
    }
    return (
      <div>
        <div style={style.left}>
          BASE: {this.props.base}
        </div>
        <div style={style.right}>
          RATES
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      rates: state.rates.rates,
      result: state.rates.result,
      base: state.rates.base,
      target: state.rates.target,
      amount: state.rates.amount
    })
}

export default connect(mapStateToProps, {getRates})(App);