'use strict'

let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
let secondsPassed = 0;
let lastTimeStamp = 0;


function GameObject(context, x, y, vx, vy) {
  this.context = context;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.collision = false;
}

function Square(context, x, y, vx, vy, color, height, width) {
  GameObject.call(this, context, x, y, vx, vy);
  this.color = color;
  this.height = height;
  this.width = width;
}

Square.all = [];

Square.prototype.draw = function () {
  this.context.fillStyle = this.color;
  this.context.fillRect(this.x, this.y, this.width, this.height,);
}

Square.prototype.update = function () {
  if (this.x + this.width > canvas.width || this.x < 0) {
    this.vx = -this.vx;
  }
  if (this.y + this.height > canvas.height || this.y < 0) {
    this.vy = -this.vy;
  }

  this.x += this.vx * secondsPassed;
  this.y += this.vy * secondsPassed;
}


function createSquares() {
  Square.all.push(new Square(ctx, 250, 50, 0, 50, 'blue', 50, 50));
  Square.all.push(new Square(ctx, 250, 300, 0, -50, 'blue', 50, 50));
  Square.all.push(new Square(ctx, 150, 0, 50, 50, 'blue', 50, 50));
  Square.all.push(new Square(ctx, 250, 150, 50, 50, 'blue', 50, 50));
  Square.all.push(new Square(ctx, 350, 75, -50, 50, 'blue', 50, 50));
  Square.all.push(new Square(ctx, 300, 300, 250, -50, 'blue', 50, 50));
}

function gameLoop(timeStamp) {
  secondsPassed = (timeStamp - lastTimeStamp) / 1000;
  lastTimeStamp = timeStamp;
  for (let i = 0; i < Square.all.length; i++) {
    Square.all[i].update(secondsPassed);
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < Square.all.length; i++) {
    Square.all[i].draw();
  }
  window.requestAnimationFrame(gameLoop);
}

createSquares();
gameLoop(secondsPassed);
