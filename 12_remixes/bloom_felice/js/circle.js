class Circle {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.isRising = true;
        this.isGrowing = true;
        this.color = null;
        this.colorFrom = 0;
        this.colorTo = 360;
        this.lerpAmount = 0;
    }
    draw() {
        const grayscaleValue = map(this.x, 0, canvas.width, 0, 100);
        fill(grayscaleValue); // Grayscale color mode (0 for black, 100 for white)
        circle(this.x, this.y, this.diameter);
    }


    update() {

        // initial vaue, min, max, outputMin, outputMax
        this.color = map(this.x, 0, canvas.width, this.colorFrom, this.colorTo);

        if (this.isRising) {
            this.y -= 2;
        } else {
            this.y *= 1.05;
        }
        
        //top boundary
        if (this.y <= (this.diameter / 2)) {
            this.isRising = false;
        }
        if (this.y >=(canvas.height - this.diameter / 2)) {
            this.isRising = true;
        }

        // the update() method will grow or shrink the diameter of the circle

        // if the circle state is growing, increase the diameter
        if (this.isGrowing) {
            this.diameter += 1;
        } else {
            // otherwise, decrease the diameter
            this.diameter -= 1;
        }
        // if the diameter is greater than the max diameter, stop growing
        if (this.diameter > maxDiameter) {
            this.isGrowing = false;
        } 
        // if the diameter is less than the min diameter, start growing
        if (this.diameter < minDiameter) {
            this.isGrowing = true;
        }
        
    }
}