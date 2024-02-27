let marbles = [];
let maxRadius = 400; // Maximum radius before a marble is removed
let center;

function setup() {
  createCanvas(600, 600);

  center = createVector(width / 2, height / 2); // Center of the canvas
  angleMode(DEGREES); // Making it easier to work with angles
}

function draw() {
  background("black");

  // Add a new marble every so often
  if (frameCount % 10 === 0) {
    addMarble();
  }

  // loop backwards through the array to avoid skipping elements when removing
  for (let i = marbles.length - 1; i >= 0; i--) {
    let m = marbles[i];

    // Calculate the new position around the circle
    let x = center.x + cos(m.angle) * m.radius;
    let y = center.y + sin(m.angle) * m.radius;

    // Draw marble
    fill(100, 100, 240); // Color of marble
    ellipse(x, y, m.size, m.size);

    // Update properties
    m.angle += m.velocity; // Update the angle to move along the orbit
    m.radius += 2; // Increase the radius to simulate outward movement
    m.size += 0.2; // Gradually increase the size

    // Remove marble if it exceeds the maximum radius
    if (m.radius > maxRadius) {
      marbles.splice(i, 1);
    }
  }
}

function addMarble() {
  marbles.push({
    angle: random(360), // Start at a random angle
    radius: 10, // Starting distance from the center
    size: 10, // Starting size of the marble
    velocity: random(0.5, 2), // Speed of the orbit
    //velocity: 2, // Speed of the orbit
  });
}
