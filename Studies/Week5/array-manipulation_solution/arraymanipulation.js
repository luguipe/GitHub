// Step 1: use slice to find elements in an array
function sliceElements(givenArray) {
  //TODO: return last 3 elements of givenArray

  var arrLength = givenArray.length;

  return givenArray.slice(arrLength - 3, arrLength);
}

// Step 2: use splice to find elements in an array
function spliceElements(givenArray, element1, element2) {
  //TODO: remove the last element of givenArray and add element1 and element2 at that position
  var arrLength = givenArray.length;
  givenArray.splice(arrLength - 1, 1, element1, element2);
  return givenArray;
}

// Step 3: use splice to find elements in an array
function splitElements(givenString) {
  //TODO: convert givenString into an array of words
  return givenString.trim().split(' ');
}

//Uncomment these line to see results for Step 1
console.log(sliceElements([1, 2, 'MIT Certificate', 4, 5])); // should retrun ["MIT Certificate", 4, 5]
console.log(sliceElements([1, 2, [3, 4], 'Javascript'])); // should retrun [2, [3, 4], "Javascript"]

//Uncomment these line to see results for Step 2
var arr = [1, 2, 'MIT Certificate', 4, 5];
console.log(spliceElements(arr, 'Javascript', 101)); // should return [1, 2, "MIT Certificate", 4, "Javascript", 101]

//Uncomment these line to see results for Step 3
var str = 'MIT Certificate loves Javascript ';
console.log(splitElements(str)); // should return ["MIT", "Certificate", "loves", "Javascript"]

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { sliceElements, spliceElements, splitElements };
}
