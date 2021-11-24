let img = new Image();
img.src = './assets/sprite-sheet.png'
img.onload = function() {
    window.requestAnimationFrame(gameLoop);
}

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvasHeight = canvas.height = window.innerHeight;
const canvasWidth = canvas.width = window.innerWidth;

const SCALE = 2; // Scale down the character. To scale up, change the / to *.
const characterWIDTH = 307; // The characters width on the sprite sheet.
const characterHEIGHT = 408; // The characters height on the sprite sheet.
const SCALEDCharacterWIDTH = characterWIDTH / SCALE; // The characters width after scaling.
const SCALEDCharacterHEIGHT = characterHEIGHT / SCALE; // The characters height after scaling.

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
         frameX * characterWIDTH, frameY * characterHEIGHT, characterWIDTH, characterHEIGHT,
          canvasX, canvasY, SCALEDCharacterWIDTH, SCALEDCharacterHEIGHT);
}

const cycleLoop = [0, 1, 2, 3];
let currentLoopIndex = 0;
let frameCount = 0; // To keep track on what frame we are on

// Variables for the direction the character ie facing, default right.
const facingRight = 0;
const facingLeft = 1;
let currentDirection = facingRight;

let keyPresses = {};

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event) {
    keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}

const movementSpeed = 3;
let positionX = 0;
let positionY = 0;

const frameLimit = 9;


function gameLoop() {
    // Future animation code goes here
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    let hasMoved = false;

    if (keyPresses.ArrowRight) {
        positionX += movementSpeed;
        currentDirection = facingRight;
        hasMoved = true;
    } else if (keyPresses.ArrowLeft) {
        positionX -= movementSpeed;
        currentDirection = facingLeft;
        hasMoved = true;
    }

    if (hasMoved) {
        frameCount++;
        if (frameCount >= frameLimit) {
            frameCount = 0;
            currentLoopIndex++;
            if (currentLoopIndex >= cycleLoop.length) {
                currentLoopIndex = 0;
            }
        }
    }

    drawFrame(cycleLoop[currentLoopIndex], currentDirection, positionX, positionY);

    window.requestAnimationFrame(gameLoop);   
}


// // Draws different parts of the image on the canvas.
// function step() {
//     frameCount++; // Adds a fram each loop
//     if (frameCount < 15) { //Standard for an object to be drawn is 60fps, thats way too fast. With this it only steps every 15 frames; 4 times a second. 
//         window.requestAnimationFrame(step);
//         return;
//     }
//     frameCount = 0;
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0,);
//     currentLoopIndex++;
//     if (currentLoopIndex >= cycleLoop.length) {
//         currentLoopIndex = 0;
//     }
//     window.requestAnimationFrame(step);
// }