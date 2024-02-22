
class Circle {
  // Constructor to initialize a new instance of the Circle class
  constructor(x, y, diameter) {
    this.x = x; 
    this.y = y; 
    this.diameter = diameter; 
    
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.isGrowing = true; 

    this.colorFrom = color(0, 14, 94, 150);
    this.colorTo = color(247, 105, 0, 150);

    this.lerpAmount = random(0, 1);
    
    this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);
  }

  //  draw the circle on the canvas
  draw() {
    fill(this.color); 
    stroke(255, 255, 255, 50); 
    strokeWeight(2); 
    circle(this.x, this.y, this.diameter); 
  }

  //  modify the circle's properties for animation effects
  update() {
    this.move(); // Move the circle based on its velocity
    this.checkEdges(); // Check and handle if the circle hits the canvas edges

    // Implement the pulsating effect by increasing or decreasing the diameter
    if (this.isGrowing) {
      this.diameter += 0.2; 
      // Reverse the growth direction if the max diameter is reached
      if (this.diameter > maxDiameter) this.isGrowing = false;
    } else {
      this.diameter -= 0.2; // Shrink the circle
      // Reverse the shrinking direction if the min diameter is reached
      if (this.diameter < minDiameter) this.isGrowing = true;
    }

   
    this.lerpAmount += 0.01; 

    if (this.lerpAmount > 1) this.lerpAmount = 0;
   
    this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);
  }

  // apply the circle's velocity to its position for movement
  move() {
    this.x += this.velocity.x; // Update the x-coordinate
    this.y += this.velocity.y; // Update the y-coordinate
  }

  // attract the circle towards a specific point (e.g., mouse cursor)
  attractToPoint(pointX, pointY) {
    // Calculate the force vector pointing towards the target point
    let force = createVector(pointX - this.x, pointY - this.y);
    force.setMag(0.05); 
    this.velocity.add(force); 
    this.velocity.limit(3); 
  }

  // repel the circle from a specific point (e.g., mouse click position)
  repelFromPoint(pointX, pointY) {
    // Calculate the force vector pointing away from the target point
    let force = createVector(this.x - pointX, this.y - pointY);
    force.setMag(5); // Set the magnitude of the force 
    this.velocity.add(force); // Apply the force to the circle's velocity
    this.velocity.limit(5); // Limit the circle's velocity to prevent excessively fast movement
  }

  // Method to check and handle collisions with the canvas edges
  checkEdges() {
    // Invert the x-velocity if the circle hits the left or right edge
    if (this.x - this.diameter / 2 < 0 || this.x + this.diameter / 2 > width) {
      this.velocity.x *= -1;
    }
    // Invert the y-velocity if the circle hits the top or bottom edge
    if (this.y - this.diameter / 2 < 0 || this.y + this.diameter / 2 > height) {
      this.velocity.y *= -1;
    }
  }
}
