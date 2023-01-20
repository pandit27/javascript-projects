console.log("Welcome to this game");
console.log("Press arrow keys to play this game")

// variables decalaration
let dino = document.querySelector(".dino");
let cactus = document.querySelector(".cactus");
let dinoX = parseInt(
  window.getComputedStyle(dino, null).getPropertyValue("left")
);
let isUp = false;
let isLeft = false;
let isRight = false;

/*
    key code of arrow keys
    top 38
    bottom 40
    left 37
    right 39
*/

// adding event listeners to arrow keyss
document.onkeydown = function (e) {
  // for up arrow key
  // console.log(e.keyCode);
  if (e.keyCode == 38) {
    dino.style.left = Math.abs(dinoX + 30) + "px";
    dino.classList.add("dinoUp");
    console.log("top");

    setTimeout(() => {
      dino.classList.remove("dinoUp");
    }, 900);
  }

  // for left arrow key
  if (e.keyCode == 37) {
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    console.log(dinoX);
    dino.style.left = Math.abs(dinoX - 40) + "px";
  }

  // for right arrow key
  if (e.keyCode == 39) {
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    console.log(dinoX);
    dino.style.left = Math.abs(dinoX + 40) + "px";
  }
};

// game over logic
setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".cactus");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(cactus, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(cactus, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log(offsetX, offsetY)
  if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML = "Game Over - Reload to Play Again";
    obstacle.classList.remove("cacAnim");
    audiogo.play();
    setTimeout(() => {
      audiogo.pause();
      audio.pause();
    }, 1000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      obstacle.style.animationDuration = newDur + "s";
      console.log("New animation duration: ", newDur);
    }, 500);
  }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}
