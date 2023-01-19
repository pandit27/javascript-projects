console.log("Welcome to Spotify");

// variables decalaration
let a = document.querySelectorAll(".playSongButton");
let audio1 = new Audio("arcade.mp3");
let isPlay1 = false;
let audio2 = new Audio("can we kiss forever.mp3");
let isPlay2 = false;
let audio3 = new Audio("faded.mp3");
let isPlay3 = false;
let audio4 = new Audio("let me love you.mp3");
let isPlay4 = false;
let audio5 = new Audio("night changes.mp3");
let isPlay5 = false;
let audio6 = new Audio("sia.mp3");
let isPlay6 = false;

// add event listener to song play button
for (let i = 0; i <= a.length; i++) {
  a[i].addEventListener("click", () => {
    if (a[i].className == "s1 playSongButton") {
      if (!isPlay1) {
        {
          audio6.pause();
          audio2.pause();
          audio3.pause();
          audio4.pause();
          audio5.pause();
        }
        // document.getElementsByClassName("p1").removeAttribute("src")
        audio1.play();
        console.log("button1");
        // document.getElementsByClassName("p1").setAttribute("src", "images/pause.png");
        isPlay1 = true;
      } else if (isPlay1) {
        audio1.pause();
        isPlay1 = false;
      }
    } else if (a[i].className == "s2 playSongButton") {
      if (!isPlay2) {
        // document.getElementsByClassName("p1").removeAttribute("src")
        {
          audio1.pause();
          audio6.pause();
          audio3.pause();
          audio4.pause();
          audio5.pause();
        }
        audio2.play();
        console.log("button2");
        // document.getElementsByClassName("p1").setAttribute("src", "images/pause.png");
        isPlay2 = true;
      } else if (isPlay2) {
        audio2.pause();
        isPlay2 = false;
      }
    } else if (a[i].className == "s3 playSongButton") {
      if (!isPlay3) {
        // document.getElementsByClassName("p1").removeAttribute("src")
        {
          audio1.pause();
          audio2.pause();
          audio6.pause();
          audio4.pause();
          audio5.pause();
        }
        audio3.play();
        console.log("button3");
        // document.getElementsByClassName("p1").setAttribute("src", "images/pause.png");
        isPlay3 = true;
      } else if (isPlay3) {
        audio3.pause();
        isPlay3 = false;
      }
    } else if (a[i].className == "s4 playSongButton") {
      if (!isPlay4) {
        // document.getElementsByClassName("p1").removeAttribute("src")
        {
          audio1.pause();
          audio2.pause();
          audio3.pause();
          audio6.pause();
          audio5.pause();
        }
        audio4.play();
        console.log("button4");
        // document.getElementsByClassName("p1").setAttribute("src", "images/pause.png");
        isPlay4 = true;
      } else if (isPlay4) {
        audio4.pause();
        isPlay4 = false;
      }
    } else if (a[i].className == "s5 playSongButton") {
      if (!isPlay5) {
        // document.getElementsByClassName("p1").removeAttribute("src")
        {
          audio1.pause();
          audio2.pause();
          audio3.pause();
          audio4.pause();
          audio6.pause();
        }
        audio5.play();
        console.log("button5");
        // document.getElementsByClassName("p1").setAttribute("src", "images/pause.png");
        isPlay5 = true;
      } else if (isPlay5) {
        audio5.pause();
        isPlay5 = false;
      }
    } else if (a[i].className == "s6 playSongButton") {
      if (!isPlay6) {
        // document.getElementsByClassName("p1").removeAttribute("src")
        {
          audio1.pause();
          audio2.pause();
          audio3.pause();
          audio4.pause();
          audio5.pause();
        }
        audio6.play();
        console.log("button6");
        // document.getElementsByClassName("p1").setAttribute("src", "images/pause.png");
        isPlay6 = true;
      } else if (isPlay6) {
        audio6.pause();
        isPlay6 = false;
      }
    }
  });
}
