class SpinCircle {
  // store data about each circle, including position, center of rotational orbit, size, and color
  constructor(
    startAngle,
    spinCenterX,
    spinCenterY,
    circleRadius,
    circleColor,
    spinRadius
  ) {
    this.x = 0;
    this.y = 0;
    this.spinCenterX = spinCenterX;
    this.spinCenterY = spinCenterY;
    this.angle = startAngle;
    this.circleRadius = circleRadius;
    this.color = circleColor;
    this.spinRadius = spinRadius;
  }

  draw() {
    fill(this.color);
    circle(this.x, this.y, this.circleRadius);
  }

  // Increase the rotational angle by the specified amount, then translate into x & y coordinates.
  updateCirc(angleIncrease, spinRadius) {
    this.angle += angleIncrease;
    this.x = this.spinCenterX + spinRadius * Math.cos(this.angle);
    this.y = this.spinCenterY + spinRadius * Math.sin(this.angle);
  }
}
