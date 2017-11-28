import React from 'react';
import { connect } from 'react-redux';
import { getRates } from '../actions/currency';
import { Rates } from './Rates.js';
import  Chooser from './Chooser.js';
import  Result from './Result.js';
import Refactor from './Refactor.js'

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
      <div> {this.props.rates ? 
        <div>
        <div style={style.left}>         
          <Chooser rates={this.props.rates} />
          <Result result={this.props}/>
          <Refactor/>
        </div>       
        <div style={style.right}>
          <Rates rates={this.props.rates.rates}/> 
        </div>
        </div>
        : null} 
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