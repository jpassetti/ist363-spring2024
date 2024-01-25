class Circle {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.isRising = true;
        this.isGrowing = true;
        this.color = null;
        this.colorFrom = color(0,14,84); // SU blue
        this.colorTo = color(247,105,0); // SU orange
        this.lerpAmount = 0;
    }
    draw() {
        fill(this.color);
        circle(this.x, this.y, this.diameter);
    }
    update() {
        // initial value, min, max, outputMin, outputMax
        this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0, 1); // .45
        
        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);

        // move the circle
        if (this.isRising) {
            this.y -= 2;
        } else {
            this.y *= 1.05;
        }

        // top boundary
        if (this.y <= (this.diameter / 2)) {
            this.isRising = false;
        }
        // bottom boundary
        if (this.y >= (canvas.height - this.diameter / 2)) {
            this.isRising = true;
        }

        // if the circle is growing, increase the diameter by .5
        if (this.isGrowing) {
            this.diameter += 1;
        } else {
            // otherwise, decrease the diameter by .5
            this.diameter -= 1;
        }

        // if the diameter is greater than the maxDiameter, stop growing
        if (this.diameter > maxDiameter) {
            this.isGrowing = false;
        } 

        // if the diameter is less than the minDiameter, start growing
        if (this.diameter < minDiameter) {
            this.isGrowing = true;
        }
        
    }
}