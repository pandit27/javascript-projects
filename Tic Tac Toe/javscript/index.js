let turn = "X";
let isWon = false;
let a = document.querySelectorAll(".myBox");
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", () => {
    a[i].innerHTML = changeTurn();
    checkWin();
    if (isWon == true) {
      document.querySelector(".result").innerText = turn + " won";
      winAnim();
    }
    if (isWon == false && i == 8) {
      document.querySelector(".result").innerText = "It's a draw";
    }
    document.querySelector(".turnDisplay").innerText = turn + " turn";
    console.log(a[i].innerHTML);
  });
}

// change turn
let changeTurn = () => {
  if (turn === "X") {
    turn = "O";
    return turn;
  } else {
    turn = "X";
    return turn;
  }
};

// winning logic
const checkWin = () => {
  // let wins = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6]
  // ]

  for (let i = 0; i < a.length; i++) {
    if (
      a[0].innerHTML === a[1].innerHTML &&
      a[1].innerHTML === a[2].innerHTML &&
      a[0].innerHTML !== ""
    ) {
      // document.querySelector(".result").innerText = turn +" won"
      isWon = true;
    } else if (
      a[3].innerHTML === a[4].innerHTML &&
      a[4].innerHTML === a[5].innerHTML &&
      a[3].innerHTML !== ""
    ) {
      // document.querySelector(".result").innerText = turn +" won"
      isWon = true;
    } else if (
      a[6].innerHTML === a[7].innerHTML &&
      a[7].innerHTML === a[8].innerHTML &&
      a[6].innerHTML !== ""
    ) {
      // document.querySelector(".result").innerText = turn +" won"
      isWon = true;
    } else if (
      a[0].innerHTML === a[3].innerHTML &&
      a[3].innerHTML === a[6].innerHTML &&
      a[0].innerHTML !== ""
    ) {
      // document.querySelector(".result").innerText = turn +" won"
      isWon = true;
    } else if (
      a[1].innerHTML === a[4].innerHTML &&
      a[4].innerHTML === a[7].innerHTML &&
      a[4].innerHTML !== ""
    ) {
      // document.querySelector(".result").innerText = turn +" won"
      isWon = true;
    } else if (
      a[2].innerHTML === a[5].innerHTML &&
      a[5].innerHTML === a[8].innerHTML &&
      a[2].innerHTML !== ""
    ) {
      // document.querySelector(".result").innerText = turn +" won"
      isWon = true;
    } else if (
      a[0].innerHTML === a[4].innerHTML &&
      a[4].innerHTML === a[8].innerHTML &&
      a[0].innerHTML !== ""
    ) {
      // document.querySelector(".result").innerText = turn +" won"
      isWon = true;
    } else if (
      a[2].innerHTML === a[4].innerHTML &&
      a[4].innerHTML === a[6].innerHTML &&
      a[2].innerHTML !== ""
    ) {
      // document.querySelector(".result").innerText = turn +" won"
      isWon = true;
    } else {
      // document.querySelector(".result").innerText = "It's a draw"
    }
  }
};

// winning animation
const winAnim = () => {
  let x = document.querySelector(".won").classList.add("wonAnimation");
};

// reset button
let b = document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});
