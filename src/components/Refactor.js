import React from 'react';

const Refactor = (props) => {

const flatten = (array, acc = []) => {
  Object.values(array).map(item =>{
    typeof item === 'number' ?
      acc.push(item) :
        flatten(item, acc)      
      })
  return acc 
}

let a = flatten([1, 2, [3, [[4], 5]], 6]); // [1, 2, 3, 4, 5, 6]
let b = flatten({ hello: 1, world: [2, 3, { foo: [[4]]}] }); 
console.log(a)
console.log(b)

return null
}



export default Refactor

