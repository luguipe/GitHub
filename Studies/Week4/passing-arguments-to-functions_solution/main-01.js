/*
Instructions
Compare Objects
- Define a function, `compareCities`, that accepts two objects as arguments.

compareCities({ name: 'Dresden' }, { name: 'Dresden' }) // -> true
compareCities({ name: 'Raleigh' }, { name: 'Raleigh', income_pc: 1200000 }) // -> false
*/
function compareCities(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

//uncomment next lines to console log results
console.log(compareCities({}, {}));
console.log(compareCities({ name: "San Jose" }, { name: "San Jose" }));
console.log(compareCities({ name: "San Jose" }, { otherkey: "San Jose" }));

//don't change this line 
  module.exports = compareCities;
