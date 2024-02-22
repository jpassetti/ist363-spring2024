//button to save an image of your score
const saveScoreBtn = document.getElementById("saveScoreBtn");
saveScoreBtn.addEventListener("click", function() {
    saveCanvas("myScore", "png")
});

//button to reset the game that reloads the page
const resetGameBtn = document.getElementById("resetGameBtn");
resetGameBtn.addEventListener("click", function() {
    location.reload();
})

const canvas = {
    width: 800,
    height: 800
}
const totalCircles = 1;
const circles = []
const minDiameter = 10
const maxDiameter = 100

//variables for pong paddle dimensions
const paddleY = 750
const paddleWidth = 120
const paddleHeight = 35

//variable for score; the game broke if I used const instead of var
var score = 0

function setup() {
    createCanvas(canvas.width, canvas.height);
    background(0);

    //counter, condition, increment
    for (let i = 0; i < totalCircles; i++) {
        const circleSettings = {
            x: random(0, canvas.width),
            //decreased max y value to ensure ball doesn't start beneath the paddle
            y: random(0, canvas.height - 100),
            diameter: random(minDiameter, maxDiameter)
        }
        const myCircle = new Circle(circleSettings.x, circleSettings.y, circleSettings.diameter);
        circles.push(myCircle);
    }
}
function draw() {
    //noLoop();
    noStroke();
    background(0);

    for (let i = 0; i < circles.length; i++) {
        circles[i].update();
        circles[i].draw();
    }

    //adds the paddle; mouseX creates interactivity
    fill(255);
    rect(mouseX, paddleY, paddleWidth, paddleHeight);

    //score counter; "+ score" lets the score increase with conditional statements
    textSize (32);
    fill(255);
    text('Score: ' + score, 30, 50);
}


