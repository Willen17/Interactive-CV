//Getting canvas element and getContext to be able to draw on canvas. 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvasHeight = canvas.height = window.innerHeight;
const canvasWidth = canvas.width = window.innerWidth;


const SCALE = 2; // Scale down the character. To scale up, change the / to * (in SCALEDCharacters below).
const characterWIDTH = 307; // The characters width on the sprite sheet.
const characterHEIGHT = 408; // The characters height on the sprite sheet.
const SCALEDCharacterWIDTH = characterWIDTH / SCALE; // The characters width after scaling.
const SCALEDCharacterHEIGHT = characterHEIGHT / SCALE; // The characters height after scaling.
const cycleLoop = [0, 1, 2, 3]; // Represents each frame of the sprite sheet. 0=the first frame in the animation, 3= the last frame.
// Variables for the direction the character ie facing, default right.
const facingRight = 0;
const facingLeft = 1;
//Frame limit sets how often the animation will update
const frameLimit = 9;
//Movement speed sets how many pixels the character will move per click.
const movementSpeed = 3;

const background = document.querySelector('main');

let keyPresses = {}; //Tracks what key the user presses, empty by default.
let currentDirection = facingRight; //Displays the current direction the character is facing, by default right.
let currentLoopIndex = 0; //Used together with cycleLoop, sets which frame to use in the sprite sheet.
let frameCount = 0; // To keep track on what frame we are on.
let positionX = canvasWidth/3;  // Sets the characters X axis.
let positionY = canvasHeight - 300; // Sets the characters Y axis.
let img = new Image(); // Creates the image.

let backgroundPosX = 0; // Position of the backgrounds X axis.

function loadImage () {
    img.src = './assets/sprite-sheet.png';
    img.onload = function() {
        window.requestAnimationFrame(gameLoop);
    }

}

window.onload = main();

function main() {
    loadImage();
}

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event) {
    keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
         frameX * characterWIDTH, frameY * characterHEIGHT, characterWIDTH, characterHEIGHT,
          canvasX, canvasY, SCALEDCharacterWIDTH, SCALEDCharacterHEIGHT);
}

function gameLoop() {

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let hasMoved = false;

    if (keyPresses.ArrowRight) {
        background.style.backgroundPosition = -backgroundPosX + '%';
        backgroundPosX++;
        // positionX += movementSpeed;
        currentDirection = facingRight;
        hasMoved = true;
    } else if (keyPresses.ArrowLeft) {
        background.style.backgroundPosition = backgroundPosX + '%';
        backgroundPosX++;
        // positionX -= movementSpeed;
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
    
    if (!hasMoved) {
        currentLoopIndex = 0;
    }
    
    drawFrame(cycleLoop[currentLoopIndex], currentDirection, positionX, positionY);
    window.requestAnimationFrame(gameLoop);   
}
