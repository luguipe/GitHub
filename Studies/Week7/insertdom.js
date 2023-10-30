function addItem() {
  // TODO: add 'item' to the list of TODOs
  const inputValue = document.getElementById('myInput').value;
  const t = document.createTextNode(inputValue);
  const li = document.createElement('li');
  li.appendChild(t);
  document.getElementById('myTODOs').appendChild(li);
}

//don't change this line

  module.exports = {addItem};

