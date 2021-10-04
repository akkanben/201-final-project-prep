'use strict'

let canvas;
let ctx;
let fpsCanvas;
let fpsCtx;
let secondsPassed;
let lastTimeStamp;
let fps;
let buffer = 142;
let rectX = 100;
let rectY = 50;

window.onload = init;

function init() {
  fpsCanvas = document.getElementById('fps-canvas');
  fpsCtx = fpsCanvas.getContext('2d');
  canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');
  fpsCanvas.width = 800;
  fpsCanvas.height = 800;
  canvas.width = 800;
  canvas.height = 800;
  window.requestAnimationFrame(gameLoop);
}

function update() {
  rectX += 1;
  rectY += 1;
}

function gameLoop(timeStamp) {
  secondsPassed = (timeStamp - lastTimeStamp) / 1000;
  lastTimeStamp = timeStamp;
  buffer += 1;
  update();

  draw();
  if (buffer > 143) {
    fps = Math.round(1 / secondsPassed);
    fpsCtx.clearRect(0, 0, canvas.width, canvas.height);
    fpsCtx.font = '60px Arial';
    fpsCtx.fillStyle = 'black';
    fpsCtx.fillText('FPS: ' + fps, 250, 300);
    buffer = 0;
  }
  window.requestAnimationFrame(gameLoop);
}

function draw() {
  if (rectY + 175 > canvas.width || rectX + 200 > canvas.height) {
    rectX = 0;
    rectY = 0;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (buffer % 20 === 0) {
    let randomColor = Math.random() > 0.5 ? '#ff8080' : '#0099b0';
    ctx.fillStyle = randomColor;
  }
  ctx.fillRect(rectX, rectY, 200, 175);
}

