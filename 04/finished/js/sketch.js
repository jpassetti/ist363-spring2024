const canvas = {
    width: 800,
    height: 800
}

// have JavaScript find the element with the id "saveImageBtn" and store it in a variable
const saveImageBtn = document.getElementById("saveImageBtn");

// add an event listener to the saveImageBtn
// format: "event name", callback function
saveImageBtn.addEventListener("click", function() {
    saveCanvas("myCanvas", "png");
});

const totalCircles = 100;
const margin = 50;
const minDiameter = 10;
const maxDiameter = 100;
const circles = [];

// you don't invoke mouseMoved in a specific place in your code
// instead, p5.js will automatically call mouseMoved whenever the mouse moves
// also try mousePressed(), mouseDragged(), mouseReleased()
function mouseMoved() {
    // Create a circle at the mouse position with a random diameter
    const circleDiameter = random(minDiameter, maxDiameter);
    const newCircle = new Circle(mouseX, mouseY, circleDiameter);

    // Add the new circle to the circles array
    circles.push(newCircle);

    // Optional: Limit the total number of circles to avoid performance issues
    if (circles.length > totalCircles) {
        circles.shift(); // Remove the oldest circle
    }
}

function setup() {
    // create the canvas
    createCanvas(canvas.width, canvas.height);

    // turn off the outline
    noStroke();

    // create 100 circles
    for (let i = 0; i < totalCircles; i++) {
        // create a circle with random x, y, and diameter values
        const circleSettings = {
            x: random(margin, canvas.width - margin),
            y: random(margin, canvas.height - margin),
            diameter: random(minDiameter, maxDiameter),
        };
        // create a new circle using the Circle class
        const myCircle = new Circle(circleSettings.x, circleSettings.y, circleSettings.diameter);

        // add the circle to the circles array
        circles.push(myCircle);
    }
}
function draw() {
    //noLoop();
    background("lightgray"); // don't forget to clear the background

    // loop through the circles array
    for (let circle of circles) {
        // update the properties of each circle
        circle.update();

        // draw the circle
        circle.draw();
    }
}