
const minionOne = document.getElementById('img1');
const minioneTwo = document.getElementById('img2');

let moveMinion = 10;

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event) {
    keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}
backgroundMove();

function backgroundMove() {
    if (keyPresses.ArrowRight) {
        moveMinion++;
        minionOne.style.left = moveMinion + 'px';
        
    } else if (keyPresses.ArrowLeft) {
        moveMinion--;
        minionOne.style.left = moveMinion + 'px'
       
    }
   backgroundMove;
}