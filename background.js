const canvasTwo = document.getElementById('canvas2');
const ctxTwo = canvasTwo.getContext('2d');

const canvasTwoWidth = canvasTwo.width = window.innerWidth;
const canvasTwoHeight = canvasTwo.height = window.innerHeight;

let gameSpeed = 5;

const backgroundLayerOne = new Image();
backgroundLayerOne.src = './assets/layer-1.png';
const backgroundLayerTwo = new Image();
backgroundLayerTwo.src = './assets/layer-2.png';
const backgroundLayerThree = new Image();
backgroundLayerThree.src = './assets/layer-3.png';
const backgroundLayerFour = new Image();
backgroundLayerFour.src = './assets/layer-4.png';
const backgroundLayerFive = new Image();
backgroundLayerFive.src = './assets/layer-5.png';

class Layer {
    constructor(image, speedModifier, yPlacement) {
        this.x = 0;
        this.y = yPlacement;
        this.width = 2048;
        this.height = 1536;      
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update() {
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed; // The last two are to make sure there's no gap between the images.
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed; // The last two are to make sure there's no gap between the images.
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw() {
        ctxTwo.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctxTwo.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(backgroundLayerOne, 0.2, window.innerHeight * -0.55);
const layer2 = new Layer(backgroundLayerTwo, 0.4, window.innerHeight * -0.7);
const layer3 = new Layer(backgroundLayerThree, 0.6, window.innerHeight * -0.9);
const layer4 = new Layer(backgroundLayerFour, 0.8, window.innerHeight * -0.97);
const layer5 = new Layer(backgroundLayerFive, 1, window.innerHeight * -1.12);

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

// let x = 0;
// let x2= 2048;

function animate() {
    ctxTwo.clearRect(0, 0, canvasTwoWidth, canvasTwoHeight);

    gameObjects.forEach(object => {
    object.update();
    object.draw();
    });
    // ctxTwo.drawImage(backgroundLayerOne, x, -800 );
    // ctxTwo.drawImage(backgroundLayerOne, x2, -800 );
    // if (x < -2048) x = 2048 + x2 - gameSpeed;
    // // else x -= gameSpeed;
    // if (x2 < -2048) x2 = 2048 + x - gameSpeed;
    // // else x2 -= gameSpeed;
    requestAnimationFrame(animate);
}

animate();