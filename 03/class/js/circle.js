class Circle {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.isGrowing = true;
    }
    draw() {
        circle(this.x, this.y, this.diameter);
    }
    update() {
        if (this.isGrowing) {
            this.diameter += 1;
        } else {
            this.diameter -= 1;
        }
        // maximum boundary
        if (this.diameter > maxDiameter) {
            this.isGrowing = false;
        }
        // minimum boundary
        if (this.diameter < minDiameter) {
            this.isGrowing = true;
        }
       
    }
}