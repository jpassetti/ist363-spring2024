# Creative coding with p5.js

I believe creative coding is important because unlike more rigid programming tasks, like database development, creative coding often encourages experimentation and 'learning by doing,' which can be more effective in problem-solving and critical thinking.

Creative coding has forced me to think differently about how I approach problems. I have to think about how to break down a problem into smaller pieces, and then how to put those pieces back together to create a whole.

I've read and completed exercises from Daniel Shiffman's "The Nature of Code" book, where you explore how to simulate natural systems through code, like basic physical forces and particle systems. I've also read and completed exercises from his "Learning Processing" book, which is a great introduction to programming with Processing. I've also read and completed exercises from his "Make: Getting Started with p5.js" book, which is a great introduction to programming with p5.js.

## p5.js

p5.js is a JavaScript library that makes coding accessible for artists, designers, educators, and beginners. It's easy to learn and use, and it's free.

## First steps

- Create a new project folder "circles" and add an index.html file. Utilize the "!" shortcut in VS Code to create the basic HTML structure.
- Create a subdirectory 'js' to the root directory.
- Download the p5.min.js library file from https://p5js.org/download/ and add it to the js folder.
- Add a script tag to the body of the HTML file to link to the p5.min.js library.
- Add a script tag to the body of the HTML file to link to a new sketch.js file in the js folder.

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

## Turning off the draw loop

To turn off the draw loop, add the noLoop() function to the setup() function.

```javascript
function draw() {
  // setup code
  noLoop();
}
```

## Canvas

```javascript
function setup() {
  // create a canvas 800px wide and 800px high
  createCanvas(800,800);

  // set the background color to black
  // 0 = black, 255 = white
  background(0);
}
```


## Circle

To draw a circle, use the circle() function. The first two parameters are the x and y coordinates of the center of the circle. The third parameter is the radius.

```javascript
function draw() {
    // turn off the draw loop
    noLoop();

    // draw a circle at x = 300, y = 300, with a radius of 100
    circle(300, 300, 100);
}
```

## Color

To set the color of the circle, use the fill() function. You can simply type in the name of a color, like "red". Or you can specify an RGB color. The first parameter is the red value, the second parameter is the green value, and the third parameter is the blue value. The values range from 0 to 255.

```javascript
function draw() {
    // turn off the draw loop
    noLoop();

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
