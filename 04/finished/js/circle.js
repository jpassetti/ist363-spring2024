class Circle {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.isGrowing = true;
        this.isRising = true;
        this.color = null;
        this.colorFrom = color(0,14,84);
        this.colorTo = color(247,105,0);
        this.lerpAmount = 0;
    }
    draw() {
        fill(this.color);
        circle(this.x, this.y, this.diameter);
    }
    update() {
        // lerpAmount produces a percentage or value between 0 and 1 (e.g. 0.59 = 59%)
        this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0, 1);

        // lerpColor() returns a color between two colors at a specific increment between 0 and 1 (0% and 100%)
        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);

        // if the circle is growing, increase the diameter by .5
        if (this.isGrowing) {
            this.diameter += .5;
        } else {
            // otherwise, decrease the diameter by .5
            this.diameter -= .5;
        }

        // if the diameter is greater than the maxDiameter, stop growing
        if (this.diameter > maxDiameter) {
            this.isGrowing = false;
        } 

        // if the diameter is less than the minDiameter, start growing
        if (this.diameter < minDiameter) {
            this.isGrowing = true;
        }

        // if the circle is rising, decrease the y value by 2 (which moves it up)
        if (this.isRising) {
            this.y -= 2;
        } else {
            // otherwise, increase the y value by multiplying it by 1.05 (which moves it down and accelerates it)
            this.y *= 1.05;
        }

        // top boundary: if the y value is less than or equal to the diameter/2, stop rising
        if (this.y <= this.diameter/2) {
            this.isRising = false;
        }
        // bottom boundary: if the y value is greater than or equal to the canvas height minus the diameter/2, start rising
        if (this.y >= canvas.height - this.diameter/2) {
            this.isRising = true;
        }
    }
}