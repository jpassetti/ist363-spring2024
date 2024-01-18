// a p5.js sketch requires a setup function and a draw function

// setup function runs once at the beginning
function setup() {
    // create a canvas
    // width = 800px, height = 800px
    createCanvas(800, 800);

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
    circle(width / 2, height / 2, 100);
}