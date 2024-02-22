class Circle {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.isGrowing = false;
        this.color = null;
        this.colorFrom = color("pink");
        this.colorTo = color("red");
        this.lerpAmount = 5;

    
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

        // if the circle is growing, increase the diameter a random amount between (1 and 5)
        if (this.isGrowing) {
            this.diameter += random(1,5);
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



    

}

}