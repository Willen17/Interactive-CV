const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvasHeight = canvas.height = window.innerHeight;
const canvasWidth = canvas.width = window.innerWidth;

let x = 0;

const playerImage = new Image();
playerImage.src = './assets/imgs/shadow_dog.png'
const spriteWidth = 575;
const spriteHeight = 523;

window.onload = main();

function main() {
    animate();
}

/**Changes the height and width of the canvas to match users screen  */
window.addEventListener('resize', function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    main();

})

function animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //ctx.fillRect(50, 50, 100, 100);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, canvasWidth, canvasHeight);
    requestAnimationFrame(animate);


}