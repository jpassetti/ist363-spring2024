class Circle {
    constructor(x, y, diameter){
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.isRising = true;
        this.color = null
        this.colorFrom = color(74,101,131); 
        this.colorTo = color(113,121,161)
        this.lerpAmount = 0; 
        this.active = true;
    }
    draw(){
        fill(this.color)
        circle(this.x, this.y, this.diameter);
    }

    update() {
        this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0,1); 
        
        if (this.isGrowing) {
            this.diameter += .5;
        } else {
            this.diameter -= .5;
        }
        if (this.diameter > maxDiameter) {
            this.isGrowing = false;
        } 
        if (this.diameter < minDiameter) {
            this.isGrowing = true;
        }
        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);
        this.y += 3;
        this.x -= 0.3;
        if (this.y <= (this.diameter)/2) {
            this.isRising = false;
        }
        if (this.y >= (canvas.height - this.diameter / 2)){
            this.isRising = true;
        }
        if (this.y > height || this.x > width || this.x < 0) {
            this.y = -this.diameter;
            this.x = random(width); 
        }
    }
}