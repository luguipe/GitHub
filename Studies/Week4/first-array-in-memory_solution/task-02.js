//Instructions - activity -2
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

function wordsToSentence(words) {
  //your code here
  var sentence = '';

  for (let i = 0; i < words.length; i++) {
    sentence += words[i] + ' ';
  }

  return sentence.trim();
}

//console log results
console.log('results', wordsToSentence(['hey', 'there']));

//don't change this line
  module.exports =  {wordsToSentence};
