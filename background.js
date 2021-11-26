const canvasTwo = document.getElementById('canvas2');
const ctxTwo = canvasTwo.getContext('2d');

const canvasTwoWidth = canvasTwo.width = window.innerWidth;
const canvasTwoHeight = canvasTwo.height = window.innerHeight;

let gameSpeed = 5;

const backgroundLayerOne = new Image();
backgroundLayerOne.src = './assets/forrest.jpg';