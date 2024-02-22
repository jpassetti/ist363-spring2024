class Circle {
    constructor(x, y, diameter, canvas, minDiameter, maxDiameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.canvas = canvas;
        this.minDiameter = minDiameter;
        this.maxDiameter = maxDiameter;
        this.color = null;
        this.colorFrom = color(0, 14, 84);   // Blue 
        this.colorTo = color(255, 0, 0);      // Red 
        this.lerpAmount = 0;
    }
// Method to draw circle
    draw() {
        fill(this.color);
        circle(this.x, this.y, this.diameter); // Draw the circle with this color
    }

    update() {
        this.lerpAmount = map(this.diameter, this.minDiameter, this.maxDiameter, 0, 1);
        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);

        this.x += moveLeft ? -2 : 2;// Toggle direction based on moveLeft


        // reset position and loop around for circles
        if (this.x > this.canvas.width + this.diameter) {
            this.x = -this.diameter;
        } else if (this.x < -this.diameter) {
            this.x = this.canvas.width + this.diameter;
        }
    }
}
