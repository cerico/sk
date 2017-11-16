import React from 'react';
import { connect } from 'react-redux';
import { getRates } from '../actions/currency';
import { Rates } from './Rates.js';
import  Chooser from './Chooser.js'

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
          {this.props.rates ?
          <Chooser rates={this.props.rates} />
          : null}
        </div>
        <div style={style.right}>
          <Rates rates={this.props.rates}/> 
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