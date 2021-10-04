'use strict'

let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

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

Square.prototype.draw = function () {
  this.context.fillStyle = this.color;
  this.context.fillRect(this.x, this.y, this.width, this.height);
}

let sq = {};

for (let i = 0; i < 10; i++) {
  let width = 60;
  let height = 30;
  for (let j = 0; j < 20; j++) {
    let color;
    // if i is even
    if (i % 2 === 0) {
      color = '#1c153d';
      // if j is even
      if (j % 2 != 0) {
        color = '#e41951';
      }
      // if i is odd
    } else {
      color = '#1c153d';
      // if j is even
      if (j % 2 === 0) {
        color = '#e41951';
      }
    }
    // using bracket notation to create keys for each Square object inside of the sq object.
    sq['num' + i + j] = new Square(ctx, i * width, j * height, 0, 0, color, height, width);
    sq['num' + i + j].draw();
  }


}
