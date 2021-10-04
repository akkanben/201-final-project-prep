'use strict'

let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
let secondsPassed = 0;
let lastTimeStamp = 0;
let drag = 0.95;
let limiter = 0.7;
let keysPressed = [];
window.addEventListener('keydown', handlePressDown);
window.addEventListener('keyup', handlePressUp);

// Mark this key as pressed (true)
// Using the codePointAt to log a location in the array (number)
function handlePressDown(event) {
  keysPressed[event.key.codePointAt(0)] = true;
  console.log(event.key.codePointAt(0))
}

// Mark this key as not pressed anymore (false)
function handlePressUp(event) {
  keysPressed[event.key.codePointAt(0)] = false;
}

// GameObject constructor
function GameObject(context, x, y, vx, vy) {
  this.context = context;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.collision = false;
}

// Square constructor
function Square(context, x, y, vx, vy, color, height, width) {
  // inherits features from GameObject
  GameObject.call(this, context, x, y, vx, vy);
  this.color = color;
  this.height = height;
  this.width = width;
  this.speed = 400;
}

Square.all = [];

Square.prototype.draw = function () {
  this.context.fillStyle = this.collision ? 'red' : this.color;
  this.context.fillRect(this.x, this.y, this.width, this.height);
}

Square.prototype.update = function () {
  // move right
  if (keysPressed[100]) {
    this.vx = this.speed;
    this.color = '#ff0051';
    // for diagonal
    if (keysPressed[115] || keysPressed[119]) {
      this.vx = this.speed * limiter;
    }
    // move left
  } else if (keysPressed[97]) {
    this.vx = -this.speed;
    this.color = '#0271b6';
    // for diagonal
    if (keysPressed[115] || keysPressed[119]) {
      this.vx = -this.speed * limiter;
    }
  }
  // move down
  if (keysPressed[115]) {
    this.vy = this.speed;
    this.color = '#00dc84';
    // for diagonal
    if (keysPressed[100] || keysPressed[97]) {
      this.vy = this.speed * limiter;
    }
    // move up
  } else if (keysPressed[119]) {
    this.vy = -this.speed;
    this.color = '#ca30c7';
    // for diagonal
    if (keysPressed[100] || keysPressed[97]) {
      this.vy = -this.speed * limiter;
    }
  }
  // apply velocity to location
  this.x += this.vx * secondsPassed;
  this.y += this.vy * secondsPassed;
  // apply slowing drag
  this.vx *= drag;
  this.vy *= drag;
}

function createSquares() {
  Square.all.push(new Square(ctx, 100, 100, 0, 0, 'blue', 25, 25));
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
