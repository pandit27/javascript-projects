console.log("Welcome to the portfolio of Meenakshi Sharma");

let sidenav = document.querySelector(".sidenav");
let hamburger = document.querySelector(".hamburger");
let close_icon = document.querySelector(".close-icon");

document.querySelector(".close-icon").addEventListener("click", (event) => {
  sidenav.classList.toggle("sidenav-close");
  close_icon.classList.toggle("close-icon-hidden");
  // hamburger.classList.toggle("hamburger-hidden")
});

document.querySelector(".hamburger").addEventListener("click", (event) => {
  sidenav.classList.toggle("sidenav-close");
  close_icon.classList.toggle("close-icon-hidden");
});
