const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const particleCount = 200;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

class Particle {
  constructor() {
    this.x = this.rand(0, canvasWidth);
    this.y = this.rand(0, canvasHeight);
    this.r = this.rand(1, 10);
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    context.fillStyle = "blue";
    context.fill()
  }

  // let randomNumber = Math.random() * (max - min) + min; // Formula to find 2 numbers between min & max
  rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  shake() {
    this.x += this.rand(-1, 1);
    this.y += this.rand(-1, 1);
  }
}

const particles = [];

for (let i = 0; i <= particleCount; i++){
  let obj = new Particle();
  particles.push(obj);
}

function animate() {
  clearCanvas();
  particles.forEach((particle) => {
    particle.draw();
    particle.shake();
  })
  requestAnimationFrame(animate);
}

function clearCanvas() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
}

animate();
