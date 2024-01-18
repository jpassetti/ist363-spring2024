// LESSON 5: More randomness


// a p5.js sketch requires a setup function and a draw function
const canvasWidth = 800;
const canvasHeight = 800;

const totalCircles =  10;
const totalRows = 10;
let gap = 10;
let circleRadius = 50;
let startX = (canvasWidth - (totalCircles * circleRadius) - (totalCircles * gap))/2;
let startY = (canvasHeight - (totalRows * circleRadius) - (totalRows * gap))/2;


// setup function runs once at the beginning
function setup() {
    // create a canvas
    // width = 800px, height = 800px
    createCanvas(canvasWidth, canvasHeight);

    // set the background color of the canvas
    // 0 = black, 255 = white
    background(0);

}

// draw function loops over and over again, unless noLoop() is called
function draw() {
    // noLoop() stops the draw function from looping
    noLoop();

    // noStroke() removes the outline of the circle
    noStroke();

   

    // circle needs parameters: x, y, radius
 
    // counter, condition, increment
    // let circleY = startY;
    for (let j = 0; j < totalRows; j++) {
        // circleX = 50;
        // let circleX = startX;
        for (let i = 0; i < totalCircles; i++) {
            let randomRadius = random(10, 100);

            let randomRed = random(0,255);
            let randomGreen = random(0,255);
            let randomBlue = random(0,255);
            let randomAlpha = random(0,255);

            // r, g, b, alpha
            fill(randomRed, randomGreen, randomBlue, randomAlpha);

            let randomX = random(circleRadius, canvasWidth - circleRadius);
            let randomY = random(circleRadius, canvasHeight - circleRadius);

            circle(randomX, randomY, randomRadius);
            // circleX += (circleRadius + 10);
        } // for loop end
       //circleY += (circleRadius + 10);
    }


} // draw function end
 

document.getElementById('saveCanvas').addEventListener('click', function() { 
    saveCanvas('myCanvas', 'jpg');
});