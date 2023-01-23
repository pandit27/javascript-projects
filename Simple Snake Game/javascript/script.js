/*
    Logic of game:-

    1) We will create a board where the game will be played
    2) We will add a snake and using event listeners, we will control the movement of the snake using the arrow keys
    3) We will add a random food in our board which will change its position right after the snake will eat it
    4) Also after eating the food, we have to increase the length of the snake by 1
    5) Also if the snake touches the wall (border) then game is over || the snake touches its own body then also the game is over
    6) We have to update the score and high score
    7) We will add different audios in our game
    8) And we will also create level (easy, medium and difficult) based on the movement of speed of the snake
*/

console.log("Welcome to this Snake Game");

// variables initialization
let blockSize = 30;
const rows = 20;
const columns = 20;
let board;
let ctx;
let velocityX = 0;
let velocityY = 0;

// initializing snake
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

// initializing food
let foodX;
let foodY;

// initializing canvas
window.onload = () => {
  board = document.querySelector(".board");
  board.height = rows * blockSize;
  board.width = columns * blockSize;
  ctx = board.getContext("2d");
  console.log("canvas");
  placeFood();
  document.addEventListener("keyup", changeDirection); // to move the snake in the canvas using the arrow keys
  // update();
  setInterval(update, 1000 / 10);
};

// function to change the direction of snake on pressing arrow buttons
changeDirection = (e) => {
  if (e.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  } else if (e.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  }
};

// function to create and initialize the canvas
update = () => {
  // ctx.fillStyle = "linear-gradient(pink, rgb(163, 241, 251))"
  ctx.fillStyle = "pink";
  ctx.fillRect(0, 0, board.width, board.height);

  ctx.fillStyle = "yellow";
  ctx.fillRect(foodX, foodY, blockSize * 1.2, blockSize * 1.2);

  ctx.fillStyle = "red";
  snakeX += velocityX * 20;
  snakeY += velocityY * 20;
  ctx.fillRect(snakeX, snakeY, blockSize * 1.2, blockSize * 1.2);
  if (
    (snakeX == foodX ||
      snakeX == foodX - blockSize * 1.2 ||
      snakeX == foodX + blockSize * 1.2) &&
    (snakeY == foodY ||
      snakeY == foodY - blockSize * 1.2 ||
      snakeY == foodY + blockSize * 1.2)
  ) {
    placeFood();
  }
};

// function to place food at a random position
placeFood = () => {
  foodX = Math.floor(Math.random() * columns) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
};
