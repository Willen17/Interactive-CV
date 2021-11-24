const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvasHeight = canvas.height = window.innerHeight;
const canvasWidth = canvas.width = window.innerWidth;

const scale = 2; // Scale down the character. To scale up, change the / to *.
const characterWidth = 307; // The characters width on the sprite sheet.
const characterHeight = 409; // The characters height on the sprite sheet.
const scaledCharacterWidth = characterWidth / scale; // The characters width after scaling.
const scaledCharacterHeight = characterHeight / scale; // The characters height after scaling.

let img = new Image();
img.src = './assets/sprite.png'

img.onload = function() {
    init();
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
         frameX * characterWidth, frameY * characterHeight, characterWidth, characterHeight,
          canvasX, canvasY, scaledCharacterWidth, scaledCharacterHeight);
}

function init() {
    // Future animation code goes here
    window.requestAnimationFrame(step);
    // Draws different parts of the image on the canvas.
    // drawFrame(0, 0, 0, 0);
    // drawFrame(1, 0, scaledCharacterWidth, 0);
    // drawFrame(2, 0, scaledCharacterWidth * 2, 0);
    // drawFrame(3, 0, scaledCharacterWidth * 3, 0);
}

const cycleLoop = [0, 1, 2, 3];
let currentLoopIndex = 0;
let frameCount = 0; // To keep track on what frame we are on

function step() {
    frameCount++; // Adds a fram each loop
    if (frameCount < 15) { //Standard for an object to be drawn is 60fps, thats way too fast. With this it only steps every 15 frames; 4 times a second. 
        window.requestAnimationFrame(step);
        return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0,);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step);
}