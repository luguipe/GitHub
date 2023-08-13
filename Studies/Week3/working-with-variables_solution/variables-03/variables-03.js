/*
Lacroix contest
Given the function testBestFlavor, return a string with the word 'orange' in any part of the sentence as the result of the function
*/

const lacroix1 = 'grapefruit';

function testBestFlavor() {
  //your code goes here

  let lacroix2 = 'orange';

  return 'Ana says, lacroix ' + lacroix2 + ' have better flavor than lacroix ' + lacroix1;
}

//check results in the console browser
console.log('result: ', testBestFlavor());

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {testBestFlavor};
}
