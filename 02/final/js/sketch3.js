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

    // basic circle in the middle of the canvas
    fill("red");

    // circle needs parameters: x, y, radius
 
    // counter, condition, increment
    let circleY = startY;
    for (let j = 0; j < totalRows; j++) {
        //circleX = 50;
        let circleX = startX;
        
        for (let i = 0; i < totalCircles; i++) {
            circle(circleX, circleY, circleRadius);
            circleX += (circleRadius + 10);
        } // for loop end
        circleY += (circleRadius + 10);
    }


} // draw function end
 

document.getElementById('saveCanvas').addEventListener('click', function() { 
    saveCanvas('myCanvas', 'jpg');
});