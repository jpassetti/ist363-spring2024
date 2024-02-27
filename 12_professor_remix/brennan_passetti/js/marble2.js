let marbles = [];
let maxRadius = 400; // Maximum radius before a marble is removed
let center;

function setup() {
  createCanvas(600, 600);

  center = createVector(width / 2, height / 2); // Center of the canvas

  angleMode(DEGREES); // Making it easier to work with angles
}

function addMarble() {
  marbles.push({
    position: createVector(center.x, center.y),
    orbitRadius: 10,
    radius: 10,
    velocity: p5.Vector.random2D().mult(random(0.5, 2)),
    color: "blue",
    angle: random(360), // Initialize angle
    angularVelocity: random(0.5, 2), // Initialize angular velocity
  });
}

function draw() {
  background("black");

  marbles.forEach((m) => (m.color = "blue"));

  if (frameCount % 10 === 0) {
    addMarble();
  }

  // Update positions based on angular motion and handle collisions
  marbles.forEach((marble) => {
    marble.angle += marble.angularVelocity;
    marble.position.x = center.x + cos(marble.angle) * marble.orbitRadius;
    marble.position.y = center.y + sin(marble.angle) * marble.orbitRadius;
    marble.orbitRadius += 2; // Simulate outward movement
    marble.radius += 0.1; // Gradually increase the size
  });

  handleCollisions();

  // Draw marbles and apply linear velocity adjustments
  drawMarbles();
}

function handleCollisions() {
  for (let i = 0; i < marbles.length; i++) {
    for (let j = i + 1; j < marbles.length; j++) {
      let m1 = marbles[i];
      let m2 = marbles[j];
      let d = p5.Vector.dist(m1.position, m2.position); // Use vector positions
      if (d <= m1.radius + m2.radius) {
        m1.color = "red";
        m2.color = "red";
        let overlap = (m1.radius + m2.radius - d) / 2;
        let direction = p5.Vector.sub(m2.position, m1.position).normalize();
        let moveStep = direction.mult(overlap);
        m1.position.sub(moveStep);
        m2.position.add(moveStep);
      }
    }
  }
}

function drawMarbles() {
  marbles.forEach((marble, index) => {
    marble.position.add(marble.velocity);

    fill(marble.color);
    circle(marble.position.x, marble.position.y, marble.radius * 2);

    // Correctly calculate distance from center to marble for removal
    let distanceFromCenter = p5.Vector.dist(marble.position, center);
    if (distanceFromCenter > maxRadius) {
      marbles.splice(index, 1);
    }
  });
}
