//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 35;
var reverse = false;
var ball = document.getElementById("ball");

var Xmin = 0;
var Xmax = 425;
// two y-axis coordinates
var Ymin = 0;
var Ymax = 450;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
 

  if (reverse) {
    positionX = positionX  - velocity;
    positionY = positionY  - velocity;
    ball.style.left = positionX + 25 + "px";
    ball.style.top = positionY + "px";
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    ball.style.backgroundColor = "#" + randomColor;
  } else {
    positionX = positionX  + velocity;
    positionY = positionY  + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    ball.style.backgroundColor = "#" + randomColor;
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

// function randomColor(){
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     ball.style.backgroundColor = "ball" + randomColor;
//     //color.innerHTML = "ball" + randomColor;
  
// }

setInterval(moveBall, 100);
