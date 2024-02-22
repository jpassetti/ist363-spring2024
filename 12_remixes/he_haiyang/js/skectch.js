
let circles = [];


const totalCircles = 100;
const minDiameter = 10;
const maxDiameter = 50;

// Access the 'Save Image' button element from the HTML document
const saveImageBtn = document.getElementById('saveImageBtn');

// Add a click event listener to the 'Save Image' button
saveImageBtn.addEventListener('click', function() {
    // When the button is clicked, save the current state of the canvas as a PNG image named 'myCanvas'
    saveCanvas(canvas, 'myCanvas', 'png');
});


function setup() {
  // Create a canvas element of 800x800 pixels
  createCanvas(800, 800);

  // Populate the circles array with Circle objects at random positions and sizes
  for (let i = 0; i < totalCircles; i++) {
    let x = random(width); 
    let y = random(height); 
    let diameter = random(minDiameter, maxDiameter); 
    circles.push(new Circle(x, y, diameter)); 
  }
}


function draw() {
  // Set the background color to black at the beginning of each draw call
  background(0);

  // Disable drawing the stroke (outline) of shapes
  noStroke();

  // Iterate over each circle in the circles array
  for (let circle of circles) {
    circle.attractToPoint(mouseX, mouseY); // Attract each circle towards the mouse position
    circle.update(); // Update the circle's properties (like position, size, etc.)
    circle.draw(); // Draw the circle on the canvas
  }
}

// called once every time the mouse is pressed
function mouseClicked() {
  // Iterate over each circle in the circles array
  for (let circle of circles) {
    circle.repelFromPoint(mouseX, mouseY); // Repel each circle from the mouse click position
  }
}

