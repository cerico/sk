import React from 'react';
const classNames = require('classnames');

export const Rates = ({rates}) => {
   

  const style = {
    listStyle: {
      listStyle:'none'
    }
  }

  return (
    rates ? 
      <ul style={style.listStyle}>
        {Object.entries(rates).map(([k,v]) => <li key={k}>{k} is {v}</li>)} 
      </ul>
      : <div>no</div>
  );
}

