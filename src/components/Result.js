import React from 'react';

const classNames = require('classnames');



const Result = (props) => {

  console.log(props)
  const {result,base,target,amount} = props.result
  return (
    <div>
    <span>{amount} {base} = {result} {target}</span>
    </div>
  );
}



export default Result

