
const canvas = {
    width: 800,
    height: 800
};

const totalShapes = 100; // Total number of shapes to be drawn
const shapes = []; // Array to store Circle and Square objects
const minDiameter = 10;
const maxDiameter = 100;
const minSide = 10;
const maxSide = 100;
let moveLeft = false;

function setup() {
    createCanvas(canvas.width, canvas.height);
    document.getElementById('toggleDirection').addEventListener('click', function() {
        moveLeft = !moveLeft;
    });
 // Create a circles and squares
    for (let i = 0; i < totalShapes; i++) {
        if (random() > 0.5) {
            const circleSettings = {
                x: random(-maxDiameter, canvas.width),
                y: random(0, canvas.height),
                diameter: random(minDiameter, maxDiameter),
            };
            const myCircle = new Circle(circleSettings.x, circleSettings.y, circleSettings.diameter, canvas, minDiameter, maxDiameter);
            shapes.push(myCircle);
        } else {
            const squareSettings = {
                x: random(-maxSide, canvas.width),
                y: random(0, canvas.height),
                side: random(minSide, maxSide),
            };
            const mySquare = new Square(squareSettings.x, squareSettings.y, squareSettings.side, canvas, minSide, maxSide);
            shapes.push(mySquare);
        }
    }
}

function draw() {
    background(0);
    stroke(255,0,0)
    strokeWeight(30)
    for (let shape of shapes) {
        shape.update();
        shape.draw();
    }// Event listener for the button
    
}