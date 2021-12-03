//Getting canvas element and getContext to be able to draw on canvas. 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvasHeight = canvas.height = window.innerHeight;
const canvasWidth = canvas.width = window.innerWidth;
let img = new Image(); // Creates an image.


const characterWIDTH = 307; // The characters width on the sprite sheet.
const characterHEIGHT = 408; // The characters height on the sprite sheet.

let keyPresses = {}; //Tracks what key the user presses, empty by default.

/**
 * Gets the first frame of the character when its' image has been loaded.
 */
function loadImage () {
    img.src = './assets/sprite-sheet.png';
    img.onload = function() {
        window.requestAnimationFrame(gameLoop);
    }
}

window.addEventListener('load', main);

/** This is where the program begins */
function main() {
    addEventListeners();
    loadImage();
}

/** Sets up the default event listeners for the program */
function addEventListeners() {
    
    // Reloads the page so that the elements sizing is correct when page is resized.
    window.addEventListener('resize', function() {
        location.reload();
    })
    
    document.getElementById('myCharacter').addEventListener('click', showGameInstructions);

    arrowRightElement.addEventListener('touchstart', function(e) {
        e.preventDefault();
        keyPresses.ArrowRight = true;
    });

    arrowRightElement.addEventListener('pointerup', function() {
        keyPresses.ArrowRight = false;
    });

    arrowLeftElement.addEventListener('touchstart', function(e) {
        e.preventDefault();
        keyPresses.ArrowLeft = true;
    });

    arrowLeftElement.addEventListener('pointerup', function() {
        keyPresses.ArrowLeft = false;
    });

    window.addEventListener('keydown', function(e) {
        keyPresses[e.key] = true;
    }, false);

    window.addEventListener('keyup', function(e) {
        keyPresses[e.key] = false;
    }, false);
}

/**
 * Displays the users character and gives info about how to steer it.
 */
function showGameInstructions() {
    document.getElementById('speechBubbleText').innerText = 'To steer your character, use the arrow-keys on your keyboard. If you are using a phone, press the arrows.';
    document.getElementById('myCharacter').style.cursor = 'unset';
    canvas.style.display = 'unset';
}

/**
 * Updates and draws the image of the users character onto the canvas.
 * @param {Number} frameX Describes what frame of the sprite sheet should be drawn.
 * @param {Number} frameY Describes if the character should be drawn facing right or left.
 * @param {Number} canvasX Describing where on the canvas X Axis the users character should be drawn.
 * @param {Number} canvasY Describing where on the canvas Y Axis the users character should be drawn.
 */
function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
         frameX * characterWIDTH, frameY * characterHEIGHT, characterWIDTH, characterHEIGHT,
          canvasX, canvasY, characterWIDTH / 2, characterHEIGHT / 2);
}


