// Buttons to control circle spin animation
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const increaseCircles = document.getElementById("increaseCircles");
const lessCircles = document.getElementById("lessCircles");
const moreSpeedBtn = document.getElementById("moreSpeedBtn");
const lessSpeedBtn = document.getElementById("lessSpeedBtn");

// Set Canvas width and height boundaries
const canvasConfig = {
    width: 800,
    height: 800
}

// Set parameters for circle spin animation
const spinConfig = {
    circlesArr: [],
    circleRadius: 50,
    // individual r,g,b values for speed color gradient
    rColor: 247,
    gColor: 105,
    bColor: 250,
    spinning: false,
    //center the spin at intialization
    spinCenterX: canvasConfig.width/2,
    spinCenterY: canvasConfig.height/2,
    spinRadius: 70,
    numCircles: 2,
    // The circles rotate 0.04 radians each frame, so this parameter helps control rotiational speed.
    angleStepSize: 0.04
}

// Button Action Listeners Below
startBtn.addEventListener("click", function () {
    spinConfig.spinning = true;
});

stopBtn.addEventListener("click", function () {
    spinConfig.spinning = false;
});

increaseCircles.addEventListener("click", function(){
    spinConfig.numCircles += 1;
    newEvenSpacedCircleLoop(spinConfig.numCircles);
});

lessCircles.addEventListener("click", function(){
    spinConfig.numCircles -= 1;
    newEvenSpacedCircleLoop(spinConfig.numCircles);
});

moreSpeedBtn.addEventListener("click", function(){
    spinConfig.angleStepSize += 0.01;
    spinConfig.spinRadius *= 1.03;
});

lessSpeedBtn.addEventListener("click", function(){
    spinConfig.angleStepSize -= 0.01;
    spinConfig.spinRadius /= 1.03;
});

// Creates a new evenly spaced circle loop, placing the output into circlesArr
function newEvenSpacedCircleLoop(numberCircles){
    // Erase the previous circle loop and calulate equal radial spacing for the new loop
    spinConfig.circlesArr.length = 0;
    let circleRadianGap = (2*Math.PI)/numberCircles;
    // Intiailize each circle to starting conditions and palce into array. No color is provided here yet, but it is updated before the circle is shown.
    for (let i = 0; i < numberCircles; i++) {
        const circleInstance = new SpinCircle(circleRadianGap*i, spinConfig.spinCenterX, spinConfig.spinCenterY, spinConfig.circleRadius, null)
        spinConfig.circlesArr.push(circleInstance);
    }
}

// Create the canvas boundaries, set background black, create an evenly spaced loop with the starting parameters
function setup() {
    createCanvas(canvasConfig.width, canvasConfig.height);
    background(0);
    newEvenSpacedCircleLoop(spinConfig.numCircles);
}

// If the user clicks and drags their mouse within the canvas boundaries, update the spinning circle locations.
function mouseDragged(){
    console.log(mouseY);
    if(mouseX > 0 && mouseY > 0 && mouseX < canvasConfig.width && mouseY < canvasConfig.height){
        spinConfig.spinCenterX = mouseX;
        spinConfig.spinCenterY = mouseY;
        
        for (let i = 0; i < spinConfig.numCircles; i++) {
            spinConfig.circlesArr[i].spinCenterX = spinConfig.spinCenterX;
            spinConfig.circlesArr[i].spinCenterY = spinConfig.spinCenterY;
        }
    }
}

function draw() {
    //noLoop();

    // If boolean spin control is set to true, continue updating each circle's position and assigning a color that
    // is consistent with the current spinning speed.
    if(spinConfig.spinning){
        background(0);
        //Establish color fade from blue to orange with logarithms, depending on rotational speed ("angleStepSize")
        let speedColor = color(spinConfig.rColor * Math.log((1.3*spinConfig.angleStepSize) + 1.2),
                                spinConfig.gColor * Math.log((1.3*spinConfig.angleStepSize) + 1.2),
                                spinConfig.bColor * -Math.log((1*spinConfig.angleStepSize) + 0.6));
                                
        for (let i = 0; i < spinConfig.circlesArr.length; i++) {
            spinConfig.circlesArr[i].updateCirc(spinConfig.angleStepSize, spinConfig.spinRadius);
            spinConfig.circlesArr[i].color = speedColor;
            spinConfig.circlesArr[i].draw();
        }
    }
}
