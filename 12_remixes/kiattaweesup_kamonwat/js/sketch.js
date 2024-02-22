const saveImageBtn = document.getElementById("saveImageBtn");
saveImageBtn.addEventListener("click",function() {
    saveCanvas("myCanvas","png");
});
const canvas = {
    width: 800,
    height: 800
}
const totalCircles = 500;
const circles = [];
const minDiameter = 5;
const maxDiameter = 10;

function setup(){
    createCanvas(canvas.width, canvas.height);
    for (let i = 0; i < totalCircles; i++) {
        const circleSetting = {
            x: random(0, canvas.width),
            y: random(0, canvas.height),
            diameter: random(minDiameter, maxDiameter)
        }

        const myCircle = new Circle(circleSetting.x, 
            circleSetting.y, circleSetting.diameter);
            circles.push(myCircle)
    }
}
function mouseClicked() {
    for (let i = 0; i < 2; i++) { 
        let newDiameter = random(minDiameter, maxDiameter);
        let newCircle = new Circle(mouseX, mouseY, newDiameter);
        circles.push(newCircle);
    }
}
function draw(){
    //noLoop();
    //noStroke();
    stroke(238,238,238)
    background(0);

    for (let i = 0; i < circles.length; i++) {
        circles[i].update();
        circles[i].draw();
    }
}