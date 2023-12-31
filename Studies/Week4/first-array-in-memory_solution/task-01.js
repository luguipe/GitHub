// Instructions
// - Given the following 6 empty functions, add the right return statement to each of them to complete the activity
// Please do not change any of the function names

//This is your starting array
const arr = [10, 10, 16, 12];

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  // return the length of the
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers(numbers), Increment all items in the array by
    for (let i = 0; i < arr.lenght; i++ ) {
    console.log('before ' arr[i]);
    arr[i] = arr[i] + 1;
    console.log('after ' arr[i]);
  }
  // return the array
  return arr;
}

function addItemToArray(arr, item) {
  // add the parameter item to the end of the array arr
  arr.push(item);
  // return the array
  return arr;
}

function addItemToFront(arr, item) {
  // add the parameter item to the front of the array arr
  arr.unshift(item);
  // return the array
  return arr;
  // hint: use the array method .unshift
}

//uncomment these lines to check results in browser console
// console.log("returnFirst result:" + returnFirst(arr))
// console.log("returnLast result:" + returnLast(arr))
// console.log("getArrayLength result:" + getArrayLength(arr))
// console.log("incrementByOne result:" + incrementByOne(arr))
// console.log("addItemToArray result:" + addItemToArray(arr, 10))
// console.log("addItemToFront result:" + addItemToFront(arr, 10))

//////////////////////////////////
//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
  };
}
