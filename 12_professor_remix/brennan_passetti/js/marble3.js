let circles = [];
let hockeyPuck;
let mouseCircle = {
  x: 0,
  y: 0,
  diameter: 50,
};

function setup() {
  createCanvas(600, 600);
  hockeyPuck = {
    x: width / 2,
    y: height / 2,
    diameter: 25,
  };

  let circle = new Circle(hockeyPuck.x, hockeyPuck.y, hockeyPuck.diameter);
  circles.push(circle);
}

function draw() {
  background(0);

  fill(255);
  circle(mouseX, mouseY, mouseCircle.diameter); // Mouse-controlled circle

  circles.forEach((circle) => {
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d <= circle.diameter / 2 + mouseCircle.diameter / 2) {
      // Assuming the mouse circle has a radius of 25
      circle.color = "red";
      // Apply a force to repel the circle from the mouse
      // The force is a vector pointing from the circle to the mouse
      let force = createVector(circle.x - mouseX, circle.y - mouseY);
      force.setMag(1); // Adjust this value to control the initial repulsion strength
      circle.applyForce(force);
    } else {
      circle.color = "teal";
    }

    circle.update(); // Update circle's position based on its velocity
    circle.edges(); // Check for canvas edges and handle appropriately
    circle.draw(); // Draw the circle
  });
}

function Circle(x, y, diameter) {
  this.x = x;
  this.y = y;
  this.diameter = diameter;
  this.color = "blue";
  this.velocity = createVector(0, 0); // Initial velocity
  this.acceleration = createVector(0, 0); // Initial acceleration

  this.applyForce = function (force) {
    this.acceleration.add(force); // Apply force as acceleration
  };

  this.update = function () {
    this.velocity.add(this.acceleration); // Update velocity with acceleration
    this.x += this.velocity.x; // Update position with velocity
    this.y += this.velocity.y;
    this.acceleration.mult(0); // Reset acceleration each frame
    this.velocity.mult(0.95); // Apply damping to the velocity
  };

  this.edges = function () {
    // left and right edges
    if (this.x - this.diameter / 2 < 0 || this.x + this.diameter / 2 > width) {
      this.velocity.x *= -1;
      // keep the circle within the canvas
      this.x = constrain(this.x, this.diameter / 2, width - this.diameter / 2);
    }
    // top and bottom edges
    if (this.y - this.diameter / 2 < 0 || this.y + this.diameter / 2 > height) {
      this.velocity.y *= -1;
      // keep the circle within the canvas
      this.y = constrain(this.y, this.diameter / 2, height - this.diameter / 2);
    }
  };

  this.draw = function () {
    fill(this.color);
    circle(this.x, this.y, this.diameter);

    // Draw a line to indicate the vector direction
    stroke(255); // Line color
    strokeWeight(2); // Line thickness
    line(
      this.x,
      this.y,
      this.x + this.velocity.x * 10,
      this.y + this.velocity.y * 10
    ); // Adjust the multiplier for visibility
    noStroke(); // Reset drawing state
  };
}
