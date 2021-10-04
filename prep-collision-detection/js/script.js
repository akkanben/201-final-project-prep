'use strict'

let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
let secondsPassed = 0;
let lastTimeStamp = 0;
let myRed = '#e41951';
let myGreen = '#00dc84';


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
  this.context.fillStyle = this.collision ? myGreen : this.color;
  this.context.fillRect(this.x, this.y, this.width, this.height);
}

Square.prototype.update = function () {
  // temp bouncing off boundries by inverting velocity
  if (this.x + this.width > canvas.width || this.x < 0) {
    this.vx = -this.vx;
  }
  if (this.y + this.height > canvas.height || this.y < 0) {
    this.vy = -this.vy;
  }

  // actual update
  this.x += this.vx * secondsPassed;
  this.y += this.vy * secondsPassed;
}


function createSquares() {
  Square.all.push(new Square(ctx, 250, 50, -5, 50, myRed, 50, 50));
  Square.all.push(new Square(ctx, 250, 300, 3, -50, myRed, 50, 50));
  Square.all.push(new Square(ctx, 150, 0, 70, 50, myRed, 50, 50));
  Square.all.push(new Square(ctx, 250, 150, 150, 50, myRed, 50, 50));
  Square.all.push(new Square(ctx, 350, 75, -30, 50, myRed, 50, 50));
  Square.all.push(new Square(ctx, 300, 300, 250, -50, myRed, 50, 50));
  Square.all.push(new Square(ctx, 50, 150, 5, 300, myRed, 50, 50));
  Square.all.push(new Square(ctx, 50, 75, -80, 20, myRed, 50, 50));
  Square.all.push(new Square(ctx, 100, 300, -500, -50, myRed, 50, 50));
}

function checkCollisions() {
  let a;
  let b;

  for (let i = 0; i < Square.all.length; i++) {
    Square.all[i].collision = false;
  }
  for (let i = 0; i < Square.all.length; i++) {
    a = Square.all[i];
    // only check after the current one                   
    for (let j = i + 1; j < Square.all.length; j++) {
      b = Square.all[j];
      if (rectangularIntersect(a.x, a.y, a.width, a.height, b.x, b.y, b.width, b.height)) {
        a.collision = true;
        b.collision = true;
      }
    }
  }
}

function rectangularIntersect(ax, ay, aWidth, aHeight, bx, by, bWidth, bHeigth) {
  if (bx > aWidth + ax || ax > bWidth + bx || by > aHeight + ay || ay > bHeigth + by) {
    return false;
  }
  return true;
}

function gameLoop(timeStamp) {
  secondsPassed = (timeStamp - lastTimeStamp) / 1000;
  lastTimeStamp = timeStamp;
  for (let i = 0; i < Square.all.length; i++) {
    Square.all[i].update(secondsPassed);
  }
  checkCollisions();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < Square.all.length; i++) {
    Square.all[i].draw();
  }
  window.requestAnimationFrame(gameLoop);
}

createSquares();
gameLoop(secondsPassed);
