// Set Canvas width and height boundaries
const canvasConfig = {
  width: 800,
  height: 800,
};

// Set parameters for circle spin animation
const spinConfig = {
  circlesArr: [],
  circleRadius: 10,
  spinning: true,
  //center the spin at intialization
  spinCenterX: canvasConfig.width / 2,
  spinCenterY: canvasConfig.height / 2,
  spinRadius: 20,
  numCircles: 50,
  // The circles rotate 0.04 radians each frame, so this parameter helps control rotiational speed.
  angleStepSize: 0.04,
};

// Creates a new evenly spaced circle loop, placing the output into circlesArr
function newEvenSpacedCircleLoop(numberCircles) {
  // Erase the previous circle loop and calulate equal radial spacing for the new loop
  spinConfig.circlesArr.length = 0;
  let circleRadianGap = (2 * Math.PI) / numberCircles;
  // Intiailize each circle to starting conditions and palce into array. No color is provided here yet, but it is updated before the circle is shown.
  for (let i = 0; i < numberCircles; i++) {
    const circleInstance = new SpinCircle(
      circleRadianGap * i,
      spinConfig.spinCenterX,
      spinConfig.spinCenterY,
      spinConfig.circleRadius,
      "#ff0000",
      spinConfig.spinRadius
    );
    spinConfig.circlesArr.push(circleInstance);
  }
}

// Create the canvas boundaries, set background black, create an evenly spaced loop with the starting parameters
function setup() {
  createCanvas(canvasConfig.width, canvasConfig.height);
  background(0);
  newEvenSpacedCircleLoop(spinConfig.numCircles);
}

function draw() {
  noLoop();

  // If boolean spin control is set to true, continue updating each circle's position and assigning a color that
  // is consistent with the current spinning speed.
  if (spinConfig.spinning) {
    background(0);
    //Establish color fade from blue to orange with logarithms, depending on rotational speed ("angleStepSize")
    for (let i = 0; i < spinConfig.circlesArr.length; i++) {
      spinConfig.circlesArr[i].updateCirc(
        spinConfig.angleStepSize,
        (spinConfig.spinRadius += 0.01)
      );
      spinConfig.circlesArr[i].draw();
    }
  }
}
