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

    // Draws different parts of the image on the canvas.
    drawFrame(0, 0, 0, 0);
    drawFrame(1, 0, scaledCharacterWidth, 0);
    drawFrame(2, 0, scaledCharacterWidth * 2, 0);
    drawFrame(3, 0, scaledCharacterWidth * 3, 0);
    // ctx.drawImage(img, 0, 0, characterWidth, characterHeight, 0, 0, scaledCharacterWidth, scaledCharacterHeight);
    // ctx.drawImage(img, characterWidth, 0, characterWidth, characterHeight, scaledCharacterWidth, 0, scaledCharacterWidth, scaledCharacterHeight);
    // ctx.drawImage(img, characterWidth * 2, 0, characterWidth, characterHeight, scaledCharacterWidth * 2, 0, scaledCharacterWidth, scaledCharacterHeight);
    // ctx.drawImage(img, characterWidth * 3, 0, characterWidth, characterHeight, scaledCharacterWidth * 3, 0, scaledCharacterWidth, scaledCharacterHeight);
}