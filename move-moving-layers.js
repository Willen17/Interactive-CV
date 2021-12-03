/**Resets the position of both rows of signs, when their specific max or min position is reached. */
function resetSignsContainerMovement() {
    if (moveSignsContainer <= -271) {
        moveSignsContainer = 270;
    }

    if (moveSignsContainer >= 271) {
        moveSignsContainer = -270;
    }

    if (moveSecondSignsContainer <= -271) {
        moveSecondSignsContainer = 270;
    }

    if (moveSecondSignsContainer >= 271) {
        moveSecondSignsContainer = -270;
    }

    signsContainer.style.left = moveSignsContainer + 'rem';
    signsContainerTwo.style.left = moveSecondSignsContainer + 'rem';
    
}

/**Resets the position of the two backgroundLayer5, when their specific max or min position is reached. */
function resetBackgroundLayer5Movement() {
    if (moveBackgroundLayer5 < -100) {
        moveBackgroundLayer5 = 100;
    }
    if (moveSecondBackgroundLayer5 < -100) {
        moveSecondBackgroundLayer5 = 100;
    }
    if (moveBackgroundLayer5 > 100) {
        moveBackgroundLayer5 = -100;
    }
    if (moveSecondBackgroundLayer5 > 100) {
        moveSecondBackgroundLayer5 = -100;
    }
    secondBackgroundLayer5.style.left = moveSecondBackgroundLayer5 + '%';
    backgroundLayer5.style.left = moveBackgroundLayer5 + '%';
}

/**Resets the position of the two backgroundLayer4, when their specific max or min position is reached. */
function resetBackgroundLayer4Movement() {
    if (moveBackgroundLayer4 < -100) {
        moveBackgroundLayer4 = 99;
    }
    if (moveSecondBackgroundLayer4 < -100) {
        moveSecondBackgroundLayer4 = 99;
    }
    if (moveBackgroundLayer4 > 100) {
        moveBackgroundLayer4 = -99;
    }
    if (moveSecondBackgroundLayer4 > 100) {
        moveSecondBackgroundLayer4 = -99;
    }
    secondBackgroundLayer4.style.left = moveSecondBackgroundLayer4 + '%';
    backgroundLayer4.style.left = moveBackgroundLayer4 + '%';
}

/**Resets the position of the two backgroundLayer3, when their specific max or min position is reached. */
function resetBackgroundLayer3Movement() {
    if (moveBackgroundLayer3 < -100) {
        moveBackgroundLayer3 = 99;
    }
    if (moveSecondBackgroundLayer3 < -100) {
        moveSecondBackgroundLayer3 = 99;
    }
    if (moveBackgroundLayer3 > 100) {
        moveBackgroundLayer3 = -99;
    }
    if (moveSecondBackgroundLayer3 > 100) {
        moveSecondBackgroundLayer3 = -99;
    }
    backgroundLayer3.style.left = moveBackgroundLayer3 + '%';
    secondBackgroundLayer3.style.left = moveSecondBackgroundLayer3 + '%';
}

/**Resets the position of the two backgroundLayer2, when their specific max or min position is reached. */
function resetBackgroundLayer2Movement() {
    if (moveBackgroundLayer2 < -100) {
        moveBackgroundLayer2 = 99;
    }
    if (moveSecondBackgroundLayer2 < -100) {
        moveSecondBackgroundLayer2 = 99;
    }
    if (moveBackgroundLayer2 > 100) {
        moveBackgroundLayer2 = -99;
    }
    if (moveSecondBackgroundLayer2 > 100) {
        moveSecondBackgroundLayer2 = -99;
    }
    backgroundLayer2.style.left = moveBackgroundLayer2 + '%';
    secondBackgroundLayer2.style.left = moveSecondBackgroundLayer2 + '%';
}

/**Resets the position of the two backgroundLayer1, when their specific max or min position is reached. */
function resetBackgroundLayer1Movement() {
    if (moveBackgroundLayer1 < -100) {
        moveBackgroundLayer1 = 99;
    }
    if (moveSecondBackgroundLayer1 < -100) {
        moveSecondBackgroundLayer1 = 99;
    }
    if (moveBackgroundLayer1 > 100) {
        moveBackgroundLayer1 = -99;
    }
    if (moveSecondBackgroundLayer1 > 100) {
        moveSecondBackgroundLayer1 = -99;
    }
    backgroundLayer1.style.left = moveBackgroundLayer1 + '%';
    secondBackgroundLayer1.style.left = moveSecondBackgroundLayer1 + '%';
}

/**Resets the position of my character (the blonde one), when its specific max or min position is reached. */
function resetMyCharacterElementMovement() {
    if (moveMyCharacterElement < -181) {
        moveMyCharacterElement = 180;
    }
    if (moveMyCharacterElement > 181) {
        moveMyCharacterElement = -180;
    }
    myCharacterElement.style.left = moveMyCharacterElement + '%';
}