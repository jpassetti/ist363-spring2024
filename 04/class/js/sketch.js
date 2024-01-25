const saveImageBtn = document.getElementById("saveImageBtn");

// "event name", callback function
saveImageBtn.addEventListener("click", function() {
    saveCanvas("myCanvas", "png");
});

const canvas = {
    width: 800,
    height: 800
}
const totalCircles = 100;
const circles = [];
const minDiameter = 10;
const maxDiameter = 100;

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
    createCanvas(canvas.width, canvas.height);
    

    // counter, condition, increment
    for (let i = 0; i < totalCircles; i++) {
        const circleSettings = {
            x: random(0, canvas.width),
            y: random(0, canvas.height),
            diameter: random(minDiameter, maxDiameter)
        }
        const myCircle = new Circle(circleSettings.x, circleSettings.y, circleSettings.diameter);
        circles.push(myCircle);
    }
}
function draw() {
    //noLoop();
    noStroke();
    background(0);

    for (let i = 0; i < circles.length; i++) {
        circles[i].update();
        circles[i].draw();
    }
}