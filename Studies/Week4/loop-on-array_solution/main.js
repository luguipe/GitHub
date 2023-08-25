//Array flattener activity
// Define a function arrayFlattener with a 2d array as parameter:
// [1,[2,3],4,5]

//Return a new 1 dimensional array like, [1,2,3,4]

//your code
function arrayFlattener(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i]);
  }

  return newArr;
}

//uncomment next line one by one, then check the console for results
console.log(arrayFlattener([1, [2, 3], 4, 5]));

//don't change this line

  module.exports =  {arrayFlattener};
