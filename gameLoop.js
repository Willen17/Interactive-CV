/**Represents each frame of the sprite sheet. 0 = the first frame in the animation, 3= the last frame.*/
const cycleLoop = [0, 1, 2, 3]; 
/**Used together with cycleLoop, sets which frame to use in the sprite sheet. */
let currentLoopIndex = 0; 

/**Variables for the direction the character is facing, default right. */
const facingRight = 0;
const facingLeft = 1;
/**Displays the current direction the character is facing, by default right. */
let currentDirection = facingRight;

/**Sets the characters spawning position on the X axis. */
let positionX = canvasWidth / 3;
/**Sets the characters spawning position on the Y axis. */
let positionY = canvasHeight - 250;

/**Sets how often the animation will update */
const frameLimit = 9;
/**Keeps track on what frame the character currently is on. */
let frameCount = 0;


let isMovingRight = false;

/**
 * Makes the elements move in a direction depending on what button has been pressed. 
 */
function gameLoop() {

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let hasMoved = false;

    if (keyPresses.ArrowRight) {
        
        currentDirection = facingRight;
        hasMoved = true;

        moveSignsContainer -= 0.3;
        moveSecondSignsContainer -= 0.3;

        moveBackgroundLayer5 -= 0.5;
        moveSecondBackgroundLayer5 -= 0.5;

        moveBackgroundLayer4 -= 0.4;
        moveSecondBackgroundLayer4 -= 0.4;

        moveBackgroundLayer3 -= 0.3;
        moveSecondBackgroundLayer3 -= 0.3;

        moveBackgroundLayer2 -= 0.2;
        moveSecondBackgroundLayer2 -= 0.2;

        moveBackgroundLayer1 -= 0.1;
        moveSecondBackgroundLayer1 -= 0.1;

        moveMyCharacterElement -= 0.4;

        movingRight = false;
        
        signsContainer.style.left = moveSignsContainer + 'rem';
        signsContainerTwo.style.left = moveSecondSignsContainer + 'rem';
        backgroundLayer5.style.left = moveBackgroundLayer5 + '%'
        secondBackgroundLayer5.style.left = moveSecondBackgroundLayer5 + '%';
        backgroundLayer4.style.left = moveBackgroundLayer4 + '%'
        secondBackgroundLayer4.style.left = moveSecondBackgroundLayer4 + '%';
        backgroundLayer3.style.left = moveBackgroundLayer3 + '%'
        secondBackgroundLayer3.style.left = moveSecondBackgroundLayer3 + '%';
        backgroundLayer2.style.left = moveBackgroundLayer2 + '%'
        secondBackgroundLayer2.style.left = moveSecondBackgroundLayer2 + '%';
        backgroundLayer1.style.left = moveBackgroundLayer1 + '%'
        secondBackgroundLayer1.style.left = moveSecondBackgroundLayer1 + '%';
        myCharacterElement.style.left = moveMyCharacterElement + '%';

    } else if (keyPresses.ArrowLeft) {
       
        currentDirection = facingLeft;
        hasMoved = true;

        moveSignsContainer += 0.3;
        moveSecondSignsContainer += 0.3;

        moveBackgroundLayer5 += 0.5;
        moveSecondBackgroundLayer5 += 0.5;

        moveBackgroundLayer4 += 0.4;
        moveSecondBackgroundLayer4 += 0.4;

        moveBackgroundLayer3 += 0.3;
        moveSecondBackgroundLayer3 += 0.3;

        moveBackgroundLayer2 += 0.2;
        moveSecondBackgroundLayer2 += 0.2;

        moveBackgroundLayer1 += 0.1;
        moveSecondBackgroundLayer1 += 0.1;

        moveMyCharacterElement += 0.4;
        

        signsContainer.style.left = moveSignsContainer + 'rem';
        signsContainerTwo.style.left = moveSecondSignsContainer + 'rem';
        backgroundLayer5.style.left = moveBackgroundLayer5 + '%'
        secondBackgroundLayer5.style.left = moveSecondBackgroundLayer5 + '%';
        backgroundLayer4.style.left = moveBackgroundLayer4 + '%'
        secondBackgroundLayer4.style.left = moveSecondBackgroundLayer4 + '%';
        backgroundLayer3.style.left = moveBackgroundLayer3 + '%'
        secondBackgroundLayer3.style.left = moveSecondBackgroundLayer3 + '%';
        backgroundLayer2.style.left = moveBackgroundLayer2 + '%'
        secondBackgroundLayer2.style.left = moveSecondBackgroundLayer2 + '%';
        backgroundLayer1.style.left = moveBackgroundLayer1 + '%'
        secondBackgroundLayer1.style.left = moveSecondBackgroundLayer1 + '%';
        myCharacterElement.style.left = moveMyCharacterElement + '%';

    }

    resetSignsContainerMovement();
    resetMyCharacterElementMovement();
    resetBackgroundLayer5Movement();
    resetBackgroundLayer4Movement();
    resetBackgroundLayer3Movement();
    resetBackgroundLayer2Movement();
    resetBackgroundLayer1Movement();

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
