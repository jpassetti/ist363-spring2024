class Square {
    constructor(x, y, side, canvas, minSide, maxSide) {
        this.x = x;
        this.y = y;
        this.side = side;
        this.canvas = canvas;
        this.minSide = minSide;
        this.maxSide = maxSide;
        this.color = null;
        this.colorFrom = color(0, 84, 14);
        this.colorTo = color(0, 105, 247); 
        this.lerpAmount = 0;
    }
     // Method to draw square 
    draw() {
        fill(this.color);
        rect(this.x, this.y, this.side, this.side); // Draw the rectangle with this color

    }

    update() {
        this.lerpAmount = map(this.side, this.minSide, this.maxSide, 0, 1);
        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);

        this.x += moveLeft ? -2 : 2;  // Toggle direction based on moveLeft

        // reset position and loop around for squares 
        if (this.x > this.canvas.width + this.side) {
            this.x = -this.side;
        } else if (this.x < -this.side) {
            this.x = this.canvas.width + this.side;
        }
    }
      
}
