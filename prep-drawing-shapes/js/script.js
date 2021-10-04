'use strict'

let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
let myRed = '#ff0051';
let myBlue = '#0271b6';
let myGreen = '#00dc84';
let padding = 20;
let width = 120;
let height = 75;
let thickness = 10;
let radius = width / 2;

// Rectangles
// First
ctx.fillStyle = myRed;
ctx.fillRect(padding, padding, width, height);
// Second
ctx.strokeStyle = myBlue;
ctx.lineWidth = thickness;
ctx.strokeRect(padding * 2 + width, padding, width, height);
// Third
ctx.fillStyle = myGreen;
ctx.lineJoin = 'round';
ctx.fillRect(padding * 3 + 2 * width, padding, width, height);
ctx.strokeStyle = myRed;
ctx.strokeRect(padding * 3 + 2 * width, padding, width, height);
// Fourth
ctx.fillStyle = myBlue;
ctx.lineJoin = 'miter';
ctx.fillRect(padding * 4 + 3 * width, padding, width, height);
ctx.strokeStyle = myGreen;
ctx.strokeRect(padding * 4 + 3 * width, padding, width, height);

// Circles
// First
ctx.fillStyle = myRed;
ctx.beginPath();
ctx.arc(padding + radius, padding * 3 + width, radius, 0, 2 * Math.PI);
ctx.fill();
// Second
ctx.beginPath();
ctx.strokeStyle = myBlue;
ctx.arc(padding * 2 + radius * 3, padding * 3 + width, radius, 0, 2 * Math.PI);
ctx.stroke();
// Third
ctx.beginPath();
ctx.strokeStyle = myRed;
ctx.fillStyle = myGreen;
ctx.arc(padding * 3 + radius * 5, padding * 3 + width, radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
// Fourth
ctx.beginPath();
ctx.strokeStyle = myGreen;
ctx.fillStyle = myBlue;
ctx.arc(padding * 4 + radius * 7, padding * 3 + width, radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Lines
// First
ctx.fillStyle = myRed;
ctx.beginPath();
ctx.moveTo(padding, padding * 3 + height * 3);
ctx.lineTo(padding + width, padding * 3 + height * 3);
ctx.lineTo(padding + radius, padding * 3 + height * 4);
ctx.lineTo(padding, padding * 3 + height * 3);
ctx.closePath();
ctx.fill();
// Second
ctx.strokeStyle = myBlue;
ctx.beginPath();
ctx.moveTo(padding * 2 + width, padding * 3 + height * 3);
ctx.lineTo(padding * 2 + width * 2, padding * 3 + height * 3);
ctx.lineTo(padding * 2 + radius + width, padding * 3 + height * 4);
ctx.lineTo(padding * 2 + width, padding * 3 + height * 3);
ctx.closePath();
ctx.stroke();
// Thrid
ctx.lineJoin = 'round';
ctx.fillStyle = myGreen;
ctx.strokeStyle = myRed;
ctx.beginPath();
ctx.moveTo(padding * 3 + width * 2, padding * 3 + height * 3);
ctx.lineTo(padding * 3 + width * 3, padding * 3 + height * 3);
ctx.lineTo(padding * 3 + radius + width * 2, padding * 3 + height * 4);
ctx.lineTo(padding * 3 + width * 2, padding * 3 + height * 3);
ctx.closePath();
ctx.fill();
ctx.stroke();
// Fourth
ctx.lineJoin = 'miter';
ctx.fillStyle = myBlue;
ctx.strokeStyle = myGreen;
ctx.beginPath();
ctx.moveTo(padding * 4 + width * 3, padding * 3 + height * 3);
ctx.lineTo(padding * 4 + width * 4, padding * 3 + height * 3);
ctx.lineTo(padding * 4 + radius + width * 3, padding * 3 + height * 4);
ctx.lineTo(padding * 4 + width * 3, padding * 3 + height * 3);
ctx.closePath();
ctx.fill();
ctx.stroke();

// SVG created in GIMP 
// First
let path = new Path2D('m 0, 0, 10.719789,21.72067 23.970184,3.48307 -17.344989,16.90718 4.094595,23.87333 -21.43958,-11.27146 -21.439581,11.27145 4.094596,-23.87332 -17.344985,-16.90718 23.97018,-3.48307 z');
ctx.beginPath();
ctx.fillStyle = myGreen;
ctx.translate(padding + radius, padding * 5 + height * 4);
ctx.fill(path);
ctx.closePath();
// Second
ctx.beginPath();
ctx.translate(padding + width, 0);
ctx.strokeStyle = myBlue;
ctx.stroke(path);
// Third
ctx.beginPath();
ctx.lineJoin = 'round';
ctx.fillStyle = myGreen;
ctx.strokeStyle = myRed;
ctx.translate(padding + width, 0);
ctx.beginPath();
ctx.fill(path);
ctx.stroke(path);
// Fourth
ctx.beginPath();
ctx.lineJoin = 'miter';
ctx.fillStyle = myBlue;
ctx.strokeStyle = myGreen;
ctx.translate(padding + width, 0);
ctx.beginPath();
ctx.fill(path);
ctx.stroke(path);

// Images from spritesheet
// https://w3samples.com/Sprite-Get-Position is useful for finding the locations
ctx.translate(-500, -400)
let img = new Image();
img.src = '../puzzleAssets_sheet.png';
img.onload = function () {
  ctx.drawImage(this, 0, 183, 64, 32, padding, 500, width, 32);
  ctx.drawImage(this, 0, 216, 64, 32, padding * 2 + width, 500, width, 32);
  ctx.drawImage(this, 0, 282, 64, 32, padding * 3 + width * 2, 500, width, 32);
  ctx.drawImage(this, 0, 414, 64, 32, padding * 4 + width * 3, 500, width, 32);
}
