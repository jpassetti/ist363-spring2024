### IST 363 Advanced Web Design - Spring 2024

# Creative coding with p5.js (continued)

## 1. Review: How did we enhance our circle sketch last class?

We started using a class to create a circle object. But what is a class? A class is a blueprint for creating objects. It defines the properties and methods that an object will have. 

A class needs a __constructor function__. The constructor function is called when you create a new object. It is used to set the initial values for the object's properties.


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

You want to avoid putting all the logic for your sketch in the draw() function. Instead, you can create a class to encapsulate the logic for a circle.

In the future, what if you want to draw a triangle, square, rectangle of polygon? You could create a class for each shape. Then you could create an array of shapes and loop over the array to draw each shape.

## 2. Save Image

Let's create a save button that will save the canvas as an image. We can use the `saveCanvas()` function to save the canvas as an image. We'll create a button in HTML, set up an event listener, and call the `saveCanvas()` function when the button is clicked.

```html
<button id="saveImageBtn">Save image</button>
```

```javascript

// add an event listener to the button
const saveImageBtn = document.getElementById('saveImageBtn');

// "event name", callback function
saveImageBtn.addEventListener('click', function() {
    // save the canvas as an image
    saveCanvas(canvas, 'myCanvas', 'png');
});
```


## 3. Enhance the circle sketch

### How can we  animate the circle up and down within the canvas?

We can add a property to the Circle class to keep track of the direction the circle is moving. We can use the `y` property to determine the position of the circle.

```javascript
class Circle {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.isGrowing = true;
        this.isRising = true;
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

        // if the circle is rising, decrease the y value by 2 (which moves it up)
        if (this.isRising) {
            this.y -= 2;
        } else {
            // otherwise, increase the y value by multiplying it by 1.05 (which moves it down and accelerates it)
            this.y *= 1.05;
        }

        // top boundary: if the y value is less than or equal to the diameter/2, stop rising
        if (this.y <= this.diameter/2) {
            this.isRising = false;
        }
        // bottom boundary: if the y value is greater than or equal to the canvas height minus the diameter/2, start rising
        if (this.y >= canvas.height - this.diameter/2) {
            this.isRising = true;
        }
    }
}
```

## 4. What is LERP?

LERP is short for linear interpolation. It is a mathematical formula that is used to find a value between two points. In our case, we want to find a percentage between two values. We can use the percentage to determine the color of the circle.

```javascript
// 1. add these lines to the constructor function
this.color = null;
this.colorFrom = color(0,14,84); // SU blue
this.colorTo = color(247,105,0); // SU orange
this.lerpAmount = 0;

// 2. add these two lines inside the update function:
// lerpAmount will hold a percentage or value between 0 and 1 (e.g. 0.59 = 59%)
// map() takes a value and maps it to a new range of values
// map(input value, input min, input max, output min, output max) 
this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0, 1);

// lerpColor() returns a color between two colors at a specific increment between 0 and 1 (0% and 100%)
this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);
```

## 5. Add interactivity

```javascript
// place this function outside setup() and draw()
// you don't invoke mouseMoved in a specific place in your code
// instead, p5.js will automatically call mouseMoved whenever the mouse moves
// also try mousePressed(), mouseDragged(), mouseReleased()
function mouseMoved() {
    // Create a circle at the mouse position with a random diameter
    const circleDiameter = random(minDiameter, maxDiameter);
    const newCircle = new Circle(mouseX, mouseY, circleDiameter);

    // Add the new circle to the circles array
    circles.push(newCircle);

    // Optional: Limit the total number of circles to avoid performance issues
    if (circles.length > totalCircles) {
        circles.shift(); // Remove the oldest circle
    }
}
```

## Challenges

Taking a sketch further is a great way to learn. Here are some ideas to take this sketch further:

- Add a button to clear the canvas
- Add a button to change the background color
- Add a button to change the color of the circles
- Add a button to change the min and max diameter of the circles
- Add a button to change the speed of the circles
- Add more shapes (triangle, square, rectangle, polygon)
- Add more randomness to the circles (e.g. random color, random size, random speed, random direction)
- Add a wiggle effect to the circles (e.g. move the circles left and right)
- Include a stroke and no fill to the circles to make them look like bubbles
- Instead of pulsing the circle diameters, make them progressively enlarge as they get closer to the top of the canvas
