import React from 'react';
import { connect } from 'react-redux';
import { getRates } from '../actions/currency';

class App extends React.Component {

  componentWillMount(){
    this.props.getRates()
  }

  render () {
    return (
      <div>
          BASE: {this.props.base}
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