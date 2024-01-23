# Review: Creative coding with p5.js

## 1. What is p5.js? 

p5.js is a JavaScript library that aims to make coding accessible for artists, designers, educators, and beginners. It's a great tool for creating interactive experiences on the web, mobile devices, and even the desktop.

You don't have to draw everything from scratch. p5.js has a full set of drawing functionality built in. You can create shapes, lines, curves, etc. and even apply color to them.

## 2. How did we get started? 

We downloaded the p5.min.js file from their official website. We then created a new folder and added the p5.min.js file to it. We then created a new file called sketch.js and added the following code to it:

```javascript
function setup() {
    createCanvas(800, 800);
    background(0);
}
function draw() {
    noLoop();
}
```

Every sketch in p5.js needs a __setup()__ and __draw()__ function. 

The setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts. 

The draw() function is called directly after setup() and it's used to continuously execute the lines of code contained inside its block until the program is stopped or noLoop() is called.

## 3. Refactoring with objects

An object is a collection of properties, and a property is an association between a name (or key) and a value.

When you have too many variables, it's a good idea to refactor them into an object.

```javascript
var circle = {
    x: 100,
    y: 100,
    diameter: 50
};
```

## 4. How do we draw a circle?

We can use p5.js's circle() function to draw a circle. The circle() function takes three parameters: x, y, and diameter. 

```javascript
var circle = {
    x: 100,
    y: 100,
    diameter: 50
};
circle(circle.x, circle.y, circle.diameter);
```

## 5. Be random

We can use the random() function to generate random numbers. The random() function takes two parameters: min and max. 

```javascript
var circle = {
    x: random(0, canvas.width),
    y: random(0, canvas.height),
    diameter: random(10, 100)
};
circle(circle.x, circle.y, circle.diameter);
```

## 6. Refactoring with a class

A __class__ is a blueprint for creating objects with pre-defined properties and methods. Classes are usually stored in separate files and then imported into the HTML file.

The __constructor() method__ is a special method for creating and initializing an object created with a class.

The __`this` keyword__ refers to the current object.

```javascript
// create a circle.js file
// add the following code to it
class Circle {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }
    draw() {
        circle(this.x, this.y, this.diameter);
    }
}
```

In your html file, you need to add a script element for the circle class:

```html
<script src="js/p5.min.js"></script>
<script src="js/circle.js"></script>
<script src="js/sketch2.js"></script>
```

## 7. Refactoring with arrays

An array is a collection of elements. Each element in an array is assigned a number, called its index. The first element is at index 0, the second element is at index 1, and so on.

```javascript
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// to access the first element in the array
fill(colors[0]); // red
```

## 8. Array of objects

Arrays not only hold numbers and strings, but also objects. Arrays have a length property that tells you how many elements are in the array, and you can use this to loop over the array.

```javascript
// manually create an array of circles (yes, it's tedious, we'll refactor this later)
const circles = [
    new Circle(100, 100, 50),
    new Circle(200, 200, 50),
    new Circle(300, 300, 50)
];

// loop over the array of circles
for (let i = 0; i < circles.length; i++) {
    circles[i].draw();
}
```

## 9. Refactoring by creating circles in the setup() function

Let the computer do the work for you. We can create circles dynamically in the setup() function.


```javascript
const totalCircles = 100;
const circles = [];
const margin = 50;
const minDiameter = 10;
const maxDiameter = 100;

function setup() {
    createCanvas(800, 800);
    background(0);

    // create 100 circles dynamically
    for (let i = 0; i < totalCircles; i++) {
        // prevent the circles from being drawn too close to the edge of the canvas
        const randomX = random(margin, canvas.width-margin);
        const randomY = random(margin, canvas.height-margin);
        const randomDiameter = random(minDiameter, maxDiameter);

        // create a new circle and add it to the array
        // push() method adds an element to the end of an array
        circles.push(new Circle(randomX, randomY, randomDiameter));
    }
}
function draw() {
    noLoop();

    // loop over the array of circles
    for (let i = 0; i < circles.length; i++) {
        circles[i].draw();
    }
}
```

## 10. Add life by animating the diameter

Before we draw each circle, we can update its diameter. We can do this by adding a new update() method to the Circle class.

```javascript
class Circle {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }
    draw() {
        circle(this.x, this.y, this.diameter);
    }
    update() {
        this.diameter += 1;
    }
}
```

Back in the sketch, we can call the update() method before we draw each circle.

```javascript
function draw() {
    // loop over the array of circles
    for (let i = 0; i < circles.length; i++) {
        circles[i].update();
        circles[i].draw();
    }
}
```

The diameter of each circle will increase by 1 pixel every time the draw() function is called.

It will be more interesting if we improve the update method to grow or shrink the diameter if certain conditions are met.

```javascript
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
        // the update() method will grow or shrink the diameter of the circle

        // if the circle state is growing, increase the diameter
        if (this.isGrowing) {
            this.diameter += 1;
        } else {
            // otherwise, decrease the diameter
            this.diameter -= 1;
        }
        // if the diameter is greater than the max diameter, stop growing
        if (this.diameter > maxDiameter) {
            this.isGrowing = false;
        } 
        // if the diameter is less than the min diameter, start growing
        if (this.diameter < minDiameter) {
            this.isGrowing = true;
        }
    }
}
```

## 11. More challenges

Adding life to your sketch is a great way to make it more interesting. Here are some challenges to try:

- How would you animate the circle up and down within the canvas?
- How would you animate the fill color of the circle?






