const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = []

// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   ctx.fillStyle = "white";
//   ctx.fillRect(10, 10, 40, 50);
//   ctx.strokeRect(10, 10, 40, 50);
//   ctx.clearRect(50, 60, 40, 50);
// });

// creating a rectangle
// ctx.fillStyle = "white"; // colour of rectangle
// ctx.fillRect(10, 10, 40, 50); // draws a filled rectangle
// ctx.strokeRect(10, 10, 40, 50); // draws a rectangular border (outline)
// ctx.clearRect(50, 60, 40, 50); // clears the specified rectangular area making it transparent

// creating a circle
// ctx.fillStyle = "pink"
// ctx.beginPath()
// ctx.arc(100, 100, 90, 0, 2 * Math.PI)
// ctx.fill() // creates a filled circle (arc)
// ctx.strokeStyle = "red"
// ctx.lineWidth = 6 // width of outline
// ctx.stroke() // creates an outline

// drawCircle() method for drawing circle
function drawCircle() {
  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, 2 * Math.PI);
  ctx.fill();
}

// creating a circle on mouse click and mouse movement
const mouse = {
  x: undefined,
  y: undefined,
};
// canvas.addEventListener("click", (event) => {
//     mouse.x = event.x
//     mouse.y = event.y
//     drawCircle()
//     {
//         canvas.addEventListener("mousemove", (event) => {
//             mouse.x = event.x
//             mouse.y = event.y
//             drawCircle()})
//     }
// })

// checking if mouse is clicked
// let mouseClicked = false
// canvas.onmousedown = () => {
//     mouseClicked = true
//     console.log("clicked")
// }
// if(mouseClicked == true){
//         canvas.addEventListener("mousemove", (event) => {
//         mouse.x = event.x
//         mouse.y = event.y
//         drawCircle()
//     })
// }

// particle system effect
// class particle {
//   constructor() {
//     this.x = Math.random() * canvas.width;
//     this.y = Math.random() * canvas.height;
//     this.speedX = Math.random() * 5 + 1;
//     this.speedY = Math.random() * 5 + 1;
//     this.size = Math.random() * 5 + 1;
//   }
//   update() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }
//   draw() {
//     ctx.fillStyle = "pink";
//     ctx.beginPath();
//     ctx.arc(this.x, thsi.y, this.size, 0, 2 * Math.PI);
//     ctx.fill();
//   }
// }

// function init(){
//     for(let i = 0; i < 100; i++){
//         particlesArray.push(new particle())
//     }
// }
// init()

// function handleParticles(){
//     for(let i = 0; i < particlesArray.length; i++){
//         particlesArray[i].update()
//         particlesArray[i].draw()
//     }
// }

// function animate(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     handleParticles()
//     requestAnimationFrame(animate)
// }
// animate()