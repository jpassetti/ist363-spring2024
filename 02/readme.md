# Creative coding with p5.js

I believe creative coding is important because unlike more rigid programming tasks, like database development, creative coding often encourages experimentation and 'learning by doing,' which can be more effective in problem-solving and critical thinking.

Creative coding has forced me to think differently about how I approach problems. I have to think about how to break down a problem into smaller pieces, and then how to put those pieces back together to create a whole.

I've read and completed exercises from Daniel Shiffman's "The Nature of Code" book, where you explore how to simulate natural systems through code, like basic physical forces and particle systems. I've also read and completed exercises from his "Learning Processing" book, which is a great introduction to programming with Processing. I've also read and completed exercises from his "Make: Getting Started with p5.js" book, which is a great introduction to programming with p5.js.

## p5.js

p5.js is a JavaScript library that makes coding accessible for artists, designers, educators, and beginners. It's easy to learn and use, and it's free.

## Resources

- [p5.js website](https://p5js.org/)
- [Nature of Code](https://nature-of-code-2nd-edition.netlify.app/) 2nd edition by Daniel Shiffman. This book is available for free online.
- [Learning Processing](http://learningprocessing.com/) by Daniel Shiffman.
- [Make: Getting Started with p5.js](https://www.amazon.com/Make-Getting-Started-p5-js-Interactive/dp/1457186772) by Lauren McCarthy, Casey Reas, and Ben Fry.
- [The Coding Train](https://thecodingtrain.com/) Website and YouTube channel by Daniel Shiffman.
- [Processing Foundation](https://processingfoundation.org/) Website for the Processing Foundation.

## First steps

- Create a new project folder "circles" and add an index.html file. Utilize the "!" shortcut in VS Code to create the basic HTML structure.
- Create a subdirectory 'js' to the root directory.
- Download the p5.min.js library file from https://p5js.org/download/ and add it to the js folder.
- Add a script tag to the body of the HTML file to link to the p5.min.js library.
- Add a script tag to the body of the HTML file to link to a new sketch.js file in the js folder.

```html
<script src="js/p5.min.js"></script>
<script src="js/sketch.js"></script>
```

## p5.js sketch basics

Every p5.js sketch has two functions: setup() and draw(). The setup() function runs once when the sketch loads, and the draw() function runs continuously until the sketch is stopped.

```javascript
function setup() {
  // setup code
}
function draw() {
  // draw code
}
```

## What is a function?

A function is a block of code that performs a specific task. Functions are used to organize code into logical blocks, and they can be reused throughout the code.

## What is a comment?

A comment is a line of code that is not executed. Comments are used to explain code and make it easier to understand. Comments are ignored by the browser.

## Turning off the draw loop

To turn off the default draw loop, add the noLoop() function to the draw() function.

```javascript
function draw() {
  // setup code
  noLoop();
}
```

## Set up the canvas

```javascript
function setup() {
  // create a canvas 800px wide and 800px high
  createCanvas(800,800);

  // set the background color to black
  // 0 = black, 255 = white
  background(0);
}
```


## Draw a circle

To draw a circle, use the circle() function. The first two parameters are the x and y coordinates of the center of the circle. The third parameter is the radius.

```javascript
function draw() {
    // turn off the draw loop
    noLoop();

    // translation: draw a circle at x = 300, y = 300, with a radius of 100
    circle(300, 300, 100);
}
```

## Color

To set the color of the circle, use the fill() function. You can simply type in the name of a color, like "red". Or you can specify an RGB color. The first parameter is the red value, the second parameter is the green value, and the third parameter is the blue value. The values range from 0 to 255.

```javascript
function draw() {
    // turn off the draw loop
    noLoop();

    // turn off the default stroke
    noStroke();

    // set the fill color to red
    fill("red");

    // OR red = 255, green = 0, blue = 0
    // fill(255, 0, 0);

    // draw a circle at x = 300, y = 300, with a radius of 100
    circle(300, 300, 100);
}
```

## Multiple circles

First, we're going to manually draw circles. Then we'll utilize a loop to draw multiple circles.

```javascript
    // skipping the above code for brevity

    circle(50, 300, 100);
    circle(150, 300, 100);
    circle(250, 300, 100);
    circle(350, 300, 100);

```

You'll quickly realize that manually drawing circles is tedious. Let's use a loop to draw multiple circles.

A __for loop__ needs a counter, condition, and increment. In this example, we're going to use a counter variable called i. We're going to start at 0, and we're going to increment by 1. The condition is that i is less than 10. So the loop will run 10 times.

```javascript
    // skipping the above code for brevity

    let circleX = 50;

    // draw 10 circles
    // a for loop needs a counter, condition, increment
    for (let i = 0; i < 10; i++) {
        circle(circleX, 300, 100);
        circleX += 100;
    }
```

## Rows and columns

Now we're going to draw multiple rows and columns of circles. We're going to use two for loops. The outer loop will draw the rows, and the inner loop will draw the columns.

```javascript
    // skipping the above code for brevity

    // draw 10 rows
    for (let i = 0; i < 10; i++) {
        // draw 10 columns
        for (let j = 0; j < 10; j++) {
            circle(circleX, circleY, 100);
            circleX += 100;
        }
        // reset the x position
        circleX = 50;
        // move down to the next row
        circleY += 100;
    }
```

## Save image

To save an image of the sketch, use the saveCanvas() function. The first parameter is the name of the file, and the second parameter is the file type. The file type can be "jpg", "png", or "gif".

We'll place a button element with an ID of "saveCanvas" in the HTML file. Then we'll add an event listener to the button in the sketch.js file.

```html
<button id="saveCanvas">Save canvas</button>
```

```javascript
// add this at the bottom of sketch.js

// add an event listener to the saveCanvas button
document.getElementById("saveCanvas").addEventListener("click", function() {
    // save the canvas as a png file
    saveCanvas("ist363-circles", "png");
});
```

## Gap between circles

To add a gap between the circles, we'll add 10px to the x and y coordinates of the circle. But let's refactor our code to include more variables.

```javascript
    // place the variables at the top of your sketch.js file
    let circleX = 50;
    let circleY = 50;
    let circleRadius = 50;
    let circleDiameter = circleRadius * 2;
    let circleGap = 10;

    // draw 10 rows
    for (let i = 0; i < 10; i++) {
        // draw 10 columns
        for (let j = 0; j < 10; j++) {
            circle(circleX, circleY, circleRadius);
            circleX += (circleDiameter + circleGap);
        }
        // after each row is complete, reset the x position
        circleX = 50;
        // after each row is complete, move down to the next row by adding the circle radius, gap, and diameter
        circleY += (circleDiameter + circleGap);
    }
```

## Introducing randomness

To add some randomness to the circles, we'll use the random() function. The first parameter is the minimum value, and the second parameter is the maximum value. The random() function will return a random number between the minimum and maximum values.

```javascript
    // draw 10 rows
    for (let i = 0; i < 10; i++) {
        // draw 10 columns
        for (let j = 0; j < 10; j++) {
            // add some randomness to the circle radius
            circleRadius = random(10, 100);
            circle(circleX, circleY, circleRadius);
            circleX += (circleDiameter + circleGap);
        }
        // after each row is complete, reset the x position
        circleX = 50;
        // after each row is complete, move down to the next row by adding the circle radius, gap, and diameter
        circleY += (circleDiameter + circleGap);
    }
```

## Random color

To add some randomness to the circle color, we'll use the random() function again. But this time, we'll use the random() function to generate a random number between 0 and 255 for the red, green, and blue values.

```javascript
    // draw 10 rows
    for (let i = 0; i < 10; i++) {
        // draw 10 columns
        for (let j = 0; j < 10; j++) {
            // add some randomness to the circle radius
            circleRadius = random(10, 100);
            // add some randomness to the circle color
            const randomRed = random(0, 255);
            const randomGreen = random(0, 255);
            const randomBlue = random(0, 255);
            const randomAlpha = random(0, 255);
            fill(randomRed, randomGreen, randomBlue, randomAlpha);

            circle(circleX, circleY, circleRadius);

            circleX += (circleDiameter + circleGap);
        }
        // after each row is complete, reset the x position
        circleX = 50;
        // after each row is complete, move down to the next row by adding the circle radius, gap, and diameter
        circleY += (circleDiameter + circleGap);
    }
```

## Global variable management and refactoring

```javascript
const canvasWidth = 800;
const canvasHeight = 800;

const totalColumns =  10;
const totalRows = 10;
let gap = 10;

let circleRadius = 50;

// calculate the offset to center the circles
// the offset is the difference between the canvas width and the total width of the circles (plus the gaps)
let startX = (canvasWidth - (totalColumns * circleRadius) - (totalColumns * gap))/2;
let startY = (canvasHeight - (totalRows * circleRadius) - (totalRows * gap))/2;
```

Update the loop to use startX and startY as reset values.

```javascript
    // draw 10 rows
    for (let i = 0; i < totalColumns; i++) {
        // draw 10 columns
        for (let j = 0; j < totalRows; j++) {
            // add some randomness to the circle radius
            circleRadius = random(10, 100);
            // add some randomness to the circle color
            const randomRed = random(0, 255);
            const randomGreen = random(0, 255);
            const randomBlue = random(0, 255);
            const randomAlpha = random(0, 255);
            fill(randomRed, randomGreen, randomBlue, randomAlpha);

            circle(circleX, circleY, circleRadius);

            circleX += (circleDiameter + circleGap);
        }
        // after each row is complete, reset the x position
        circleX = 50;
        // after each row is complete, move down to the next row by adding the circle radius, gap, and diameter
        circleY += (circleDiameter + circleGap);
    }
```

## Conclusion

In this lesson, we learned how to create a p5.js sketch, how to draw a circle, how to use a for loop to draw multiple circles, how to save an image of the sketch, how to add a gap between the circles, and how to add randomness to the circles.

With informal sketches like these, you'll be surprised on how it can become a foundation for diving into more advanced and creative coding projects and a springboard into higher level programming concepts like object-oriented programming, game development, and data visualization.


