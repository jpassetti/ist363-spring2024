class Circle {
    constructor (x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.isRising = true;
        this.isGrowing = true;
        this.color = null;
        this.colorFrom = color(255,0,0); //SU blue
        this.colorTo = color(255,255,0); //SU orange
        this.lerpAmount = 0;
        this.ySpeed = 0; 
        this.gravity = 0.1;
        this.goLeft = Math.random() < 0.5; // 50% chance of starting as true or false (allows for circle movement)
        this.goLeftY = Math.random() < 0.5; // 50% chance of starting as true or false (allows for circle movement)
    }

    draw() {
        fill(this.color)
        circle(this.x, this.y, this.diameter);
    }

    update() {
        // initial value, min, max, outputMin, outputMax
        this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0, 1); //.45
        
        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);

        // make circles move to the right
        if (this.goLeft == false) {
            this.x += 3
        }
        // make circles move to the left
        if (this.goLeft == true) {
            this.x -= 3
        }
        // set right boundary
        if (this.x > 800) {
            this.goLeft = true;
        }
        // set left boundary
        if (this.x < 0) {
            this.goLeft = false;
        }
        // make circles move up
        if (this.goLeftY == false) {
            this.y += 3
        }
        // make circles move to the left
        if (this.goLeftY == true) {
            this.y -= 3
        }
        // set right boundary
        if (this.y > 800) {
            this.goLeftY = true;
        }
        // set left boundary
        if (this.y < 0) {
            this.goLeftY = false;
        }
        // make circles grow 
        if (this.isGrowing) {
            this.diameter += 1;
        } else {
            this.diameter -=1;
        }
        // maximum boundary
        if (this.diameter > maxDiameter){
            this.isGrowing = false
        }
        // minimum boundary
        if (this.diameter < minDiameter){
            this.isGrowing = true;
        }
    }
}