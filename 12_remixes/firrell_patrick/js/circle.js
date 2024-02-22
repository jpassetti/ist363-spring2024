class Circle {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.color = null;
        this.colorFrom = color(255,128,210);
        this.colorTo = color(255,0,0);
        this.lerpAmount = 0;

        //added new variables for speed
        this.ySpeed = -8
        this.xSpeed = 12
    }
    draw() {
        fill(this.color);
        circle(this.x, this.y, this.diameter);
    }
    update() {

        //changed lerp value so that color changes depending on the y value
        this.lerpAmount = map(this.y, 0, canvas.height, 0 , 1);
        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);

        //got rid of simulated gravity to create standard pong conditions
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //bottom boundary/losing condition
        if (this.y >= (canvas.height - this.diameter / 2)) {
            textSize (64);
            fill("red");
            text('GAME OVER', 200, 400);
        }

        //I think I could have used "or" to condense these three boundaries but thought I would stick to this for now

        //top boundary
        if (this.y <= (this.diameter / 2)) {
            this.ySpeed = -(this.ySpeed);
        }

        //left boundary
        if (this.x <= (canvas.width - this.diameter / 2)) {
            this.xSpeed = -(this.xSpeed);
        }

        //right boundary
        if (this.x >= (this.diameter / 2)) {
            this.xSpeed = -(this.xSpeed);
        }

        //used linear interpolation to make diameter increase as the ball bounces
        //tried using conditional statements but couldn't find the answer; felt this would work better anyways
        //removed diameter boundaries as they were redundant

        this.lerpAmount = map(this.y, canvas.height, 0, 0, 1);

        //minDiameter, maxDiameter, lerpAmount
        this.diameter = lerp(20, 100, this.lerpAmount);


        //used "and" to detect when the ball bounces off the paddle
        //increased score every time the ball hits the paddle
        //added bottom boundary to stop points adding up when the ball is beneath the paddle
        if ((this.x > mouseX && this.x < mouseX + paddleWidth) &&
            (this.y >= paddleY - this.diameter / 2) &&
            (this.y <= paddleY + paddleHeight - this.diameter / 2)) {
                this.ySpeed = -(this.ySpeed);
                score++;
        }
    }
}