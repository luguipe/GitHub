/*
Instructions
Given the function getProduct, 
- Return an object with the following {key: value} properties
- id:productId
- serialNumber: 'WD579000'
- manufacturer: 'Apple'
- price: 1500
*/

function getProduct(productId) {
  //write your code here

  let product = { id: productId, serialNumber: 'WD579000', manufacturer: 'Apple', price: 1500 };

  return product;
}
//open your browser console to check the results
console.log('getProduct result: ' + JSON.stringify(getProduct(1)));

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {getProduct};
}
