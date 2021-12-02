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

let keyPresses = {}; //Tracks what key the user presses, empty by default.
let currentDirection = facingRight; //Displays the current direction the character is facing, by default right.
let currentLoopIndex = 0; //Used together with cycleLoop, sets which frame to use in the sprite sheet.
let frameCount = 0; // To keep track on what frame we are on.
let positionX = canvasWidth/3;  // Sets the characters X axis.
let positionY = canvasHeight - 250; // Sets the characters Y axis.
let img = new Image(); // Creates the image.

const aboutMeContainer = document.getElementById('text-container');
const aboutMeContainer2 = document.getElementById('text-container2');
let moveAboutMe = 95;
let moveAboutMe2 = -185;


const layer5 = document.getElementById('layer5');
let moveLayer5 = 0;

const layer5Two = document.getElementById('layer5-2');
let moveLayer5Two = 100;

const layer4 = document.getElementById('layer4');
let moveLayer4 = 0;

const layer4Two = document.getElementById('layer4-2');
let moveLayer4Two = 100;

const layer3 = document.getElementById('layer3');
let moveLayer3 = 0;

const layer3Two = document.getElementById('layer3-2');
let moveLayer3Two = 100;

const layer2 = document.getElementById('layer2');
let moveLayer2 = 0;

const layer2Two = document.getElementById('layer2-2');
let moveLayer2Two = 100;

const layer1 = document.getElementById('layer1');
let moveLayer1 = 0;

const layer1Two = document.getElementById('layer1-2');
let moveLayer1Two = 100;

const myCharacterContainer = document.getElementById('myCharacterContainer')
let moveMyCharacterContainer = 70;

const arrowRightElement = document.getElementById('arrow-right-container');
const arrowLeftElement = document.getElementById('arrow-left-container');
let movingRight = false;


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

window.addEventListener('resize', function() {
    location.reload();
})

document.getElementById('myCharacter').addEventListener('click', startGame);
function startGame() {
    document.getElementById('speechBubbleText').innerText = 'To steer your character, use the arrow-keys on your keyboard. If you are using a phone, press the arrows.';
    document.getElementById('myCharacter').style.cursor = 'unset';
    myCharacterContainer.style.zIndex = '11';


    canvas.style.display = 'unset';
}

arrowRightElement.addEventListener('mousedown', MouseDownRightArrowListener);
function MouseDownRightArrowListener() {
    keyPresses.ArrowRight = true;
}

arrowRightElement.addEventListener('mouseup', MouseUpRightArrowListener);
function MouseUpRightArrowListener() {
    keyPresses.ArrowRight = false;
}

arrowLeftElement.addEventListener('mousedown', MouseDownLeftArrowListener);
function MouseDownLeftArrowListener() {
    keyPresses.ArrowLeft = true;
}

arrowLeftElement.addEventListener('mouseup', MouseUpLeftArrowListener);
function MouseUpLeftArrowListener() {
    keyPresses.ArrowLeft = false;
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
        
        currentDirection = facingRight;
        hasMoved = true;

        moveAboutMe -= 0.3;
        moveAboutMe2 -= 0.3;

        moveLayer5 -= 0.5;
        moveLayer5Two -= 0.5;

        moveLayer4 -= 0.4;
        moveLayer4Two -= 0.4;

        moveLayer3 -= 0.3;
        moveLayer3Two -= 0.3;

        moveLayer2 -= 0.2;
        moveLayer2Two -= 0.2;

        moveLayer1 -= 0.1;
        moveLayer1Two -= 0.1;

        moveMyCharacterContainer -= 0.4;

        movingRight = false;
        
        aboutMeContainer.style.left = moveAboutMe + 'rem';
        aboutMeContainer2.style.left = moveAboutMe2 + 'rem';
        layer5.style.left = moveLayer5 + '%'
        layer5Two.style.left = moveLayer5Two + '%';
        layer4.style.left = moveLayer4 + '%'
        layer4Two.style.left = moveLayer4Two + '%';
        layer3.style.left = moveLayer3 + '%'
        layer3Two.style.left = moveLayer3Two + '%';
        layer2.style.left = moveLayer2 + '%'
        layer2Two.style.left = moveLayer2Two + '%';
        layer1.style.left = moveLayer1 + '%'
        layer1Two.style.left = moveLayer1Two + '%';
        myCharacterContainer.style.left = moveMyCharacterContainer + '%';

        

    } else if (keyPresses.ArrowLeft) {
        // positionX -= movementSpeed;
        // x+= gameSpeed;
        // x2+= gameSpeed;
        currentDirection = facingLeft;
        hasMoved = true;

        moveAboutMe += 0.3;
        moveAboutMe2 += 0.3;

        moveLayer5 += 0.5;
        moveLayer5Two += 0.5;

        moveLayer4 += 0.4;
        moveLayer4Two += 0.4;

        moveLayer3 += 0.3;
        moveLayer3Two += 0.3;

        moveLayer2 += 0.2;
        moveLayer2Two += 0.2;

        moveLayer1 += 0.1;
        moveLayer1Two += 0.1;

        moveMyCharacterContainer += 0.4;
        

        aboutMeContainer.style.left = moveAboutMe + 'rem'
        aboutMeContainer2.style.left = moveAboutMe2 + 'rem';
        layer5.style.left = moveLayer5 + '%'
        layer5Two.style.left = moveLayer5Two + '%';
        layer4.style.left = moveLayer4 + '%'
        layer4Two.style.left = moveLayer4Two + '%';
        layer3.style.left = moveLayer3 + '%'
        layer3Two.style.left = moveLayer3Two + '%';
        layer2.style.left = moveLayer2 + '%'
        layer2Two.style.left = moveLayer2Two + '%';
        layer1.style.left = moveLayer1 + '%'
        layer1Two.style.left = moveLayer1Two + '%';
        myCharacterContainer.style.left = moveMyCharacterContainer + '%';

    }

   aboutMeMovement();
   moveBackground5();
   moveBackground4();
   moveBackground3();
   moveBackground2();
   moveBackground1();
   myCharacterMovement();

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

function aboutMeMovement() {
    if (moveAboutMe <= -271) {
        moveAboutMe = 270;
    }

    if (moveAboutMe >= 271) {
        moveAboutMe = -270;
    }

    if (moveAboutMe2 <= -271) {
        moveAboutMe2 = 270;
    }

    if (moveAboutMe2 >= 271) {
        moveAboutMe2 = -270;
    }

    aboutMeContainer.style.left = moveAboutMe + 'rem';
    aboutMeContainer2.style.left = moveAboutMe2 + 'rem';
    
}

function moveBackground5() {
    if (moveLayer5 < -100) {
        moveLayer5 = 100;
    }
    if (moveLayer5Two < -100) {
        moveLayer5Two = 100;
    }
    if (moveLayer5 > 100) {
        moveLayer5 = -100;
    }
    if (moveLayer5Two > 100) {
        moveLayer5Two = -100;
    }
    layer5Two.style.left = moveLayer5Two + '%';
    layer5.style.left = moveLayer5 + '%';
}

function moveBackground4() {
    if (moveLayer4 < -100) {
        moveLayer4 = 99;
    }
    if (moveLayer4Two < -100) {
        moveLayer4Two = 99;
    }
    if (moveLayer4 > 100) {
        moveLayer4 = -99;
    }
    if (moveLayer4Two > 100) {
        moveLayer4Two = -99;
    }
    layer4Two.style.left = moveLayer4Two + '%';
    layer4.style.left = moveLayer4 + '%';
}

function moveBackground3() {
    if (moveLayer3 < -100) {
        moveLayer3 = 99;
    }
    if (moveLayer3Two < -100) {
        moveLayer3Two = 99;
    }
    if (moveLayer3 > 100) {
        moveLayer3 = -99;
    }
    if (moveLayer3Two > 100) {
        moveLayer3Two = -99;
    }
    layer3.style.left = moveLayer3 + '%';
    layer3Two.style.left = moveLayer3Two + '%';
}

function moveBackground2() {
    if (moveLayer2 < -100) {
        moveLayer2 = 99;
    }
    if (moveLayer2Two < -100) {
        moveLayer2Two = 99;
    }
    if (moveLayer2 > 100) {
        moveLayer2 = -99;
    }
    if (moveLayer2Two > 100) {
        moveLayer2Two = -99;
    }
    layer2.style.left = moveLayer2 + '%';
    layer2Two.style.left = moveLayer2Two + '%';
}

function moveBackground1() {
    if (moveLayer1 < -100) {
        moveLayer1 = 99;
    }
    if (moveLayer1Two < -100) {
        moveLayer1Two = 99;
    }
    if (moveLayer1 > 100) {
        moveLayer1 = -99;
    }
    if (moveLayer1Two > 100) {
        moveLayer1Two = -99;
    }
    layer1.style.left = moveLayer1 + '%';
    layer1Two.style.left = moveLayer1Two + '%';
}

function myCharacterMovement() {
    if (moveMyCharacterContainer < -181) {
        moveMyCharacterContainer = 180;
    }
    if (moveMyCharacterContainer > 181) {
        moveMyCharacterContainer = -180;
    }
    myCharacterContainer.style.left = moveMyCharacterContainer + '%';
}