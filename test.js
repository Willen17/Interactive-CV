const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvasHeight = canvas.height;
const canvasWidth = canvas.width;


window.onload = main();

function main() {
    drawRectangle();
}

/**Changes the height and width of the canvas to match users screen  */
window.addEventListener('resize', function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    main();

})

function drawRectangle() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}


console.log(canvas.height + canvas.width);