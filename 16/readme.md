# IST 363 Advanced Web Design - Spring 2024

# Responsive Slider

## Description

In tonight's class, we will build a responsive slider that uses HTML, CSS, and JavaScript. The slider is responsive and will adjust to the size of the browser window. 

## Hands on

As you know, our class sessions are always hands-on, and tonight's class will be no exception. We will be dedicating our time to building a slider from scratch. Unlike previous sessions, I won't be providing a step-by-step tutorial. Instead, we'll dive into the building process together, encounter challenges, and work collaboratively to resolve them.

This approach will not only help solidify your understanding of the concepts we've been discussing but also give you valuable problem-solving experience in real-time. Expect to experiment, make mistakes, and, most importantly, learn from them as we progress.

Please be prepared to engage and ask questions.

## Sandbox environment

Before we implement and merge the slider with our JavaScript code, we will build a sample slider in our HTML. This will allow us to focus on the slider's HTML and CSS without the distraction of JavaScript. And we'll be using silly background colors to help us visualize the slider's layout.

Let's start by taking our index.html file and adding the following code:

```html
<section class="slider"></section>
```

## SCSS

We will be using SCSS to style our slider. We will start by creating a new partial file called `_slider.scss`, saving it inside `sass/components` and importing it into the local index file inside `components`.

```scss
// _slider.scss
.slider {
    background-color: lightblue;
}
```

## New CSS properties

We need to use the following items in our CSS/SCSS to build our slider:

- CSS grid layout
- calc() function
- SCSS variables for viewport width
- overflow-x: scroll

## Components

In our slider, you'll see me use the following components, increasing the complexity of the slider as we progress:

- `.slider` - The main container for the slider
- `.slider__container` - The container for the slides, which will crop the overflow, and allow us to scroll horizontally
- `.slider__grid` - A div that will hold the slides and use CSS grid layout
- `.slider__item` - The individual slides


## CSS Grid Layout

The slider will use CSS grid layout to create a responsive grid of images. I'm just listing the properties here for reference, and we'll discuss them in class.

```scss
display: grid;
grid-auto-flow: column;
grid-template-columns: repeat(auto-fill, 300px);
gap: 1rem;
```

## Definitions

- `display: grid;` - This property is used to create a grid container.
- `grid-auto-flow: column;` - This property is used to make grid items flow horizontally.
- `grid-template-columns: repeat(auto-fill, 300px);` - This property is used to create a grid with 300px columns. The `auto-fill` keyword is used to create as many columns as possible to fill the container.
- `gap: 1rem;` - This property is used to create a gap between grid items.

## What's the difference between grid and flex?

Using CSS Grid for a responsive slider, especially when you want to create an infinitely repeating pattern of columns, can indeed offer some unique advantages over Flexbox, particularly in terms of layout control and simplicity in setting up your grid structure.

If I were using flexbox, I would have to calculate the width of each slide manually AND the total width of the parent container, which can be a bit of a headache.

Using CSS Grid allows you to sidestep the need to calculate widths manually. This approach also gives you the flexibility to easily adjust the size, spacing, and arrangement of your slides purely with CSS, making it a powerful option for your responsive slider.

## Problem

We need the left edge of the slider container to align with the container class used in other regions of our website. Specifically, we need `padding-left` of the slider to align with the `.container` `margin-left`.  We will use the `calc()` function to solve this problem.

```scss
.slider {
    // ...abbreviating stuff about the slider
&__container {
    background-color: pink; // silly color to see the container
    height: 300px; // match the height of the slides
    overflow-x: scroll;
    padding-left: 1rem; // mobile first
    @include mixins.breakpoint(tablet) {
      padding-left: calc((100% - vars.$breakpoint__tablet) / 2);
    }
    @include mixins.breakpoint(laptop) {
      padding-left: calc((100% - vars.$breakpoint__laptop) / 2);
    }
    @include mixins.breakpoint(desktop) {
      padding-left: calc((100% - vars.$breakpoint__desktop) / 2);
    }
  }
}
```

Translation: The `padding-left` of the slider container will be `1rem` on mobile, and on larger screens, the `padding-left` will be the difference between the container width and the viewport width divided by 2.

## JavaScript

We need to go back to our main.js file and add implement the slider.

The main steps are to dynamically create:

- a section `.slider` for the entire category
- a div `.slider__container` to crop the slides and allow for horizontal scrolling
- a div `.slider__grid` to hold the slides and apply CSS grid layout
- article elements with the class `.slider__item` for each Airbnb property

If we build these items dynamically, insert date and append them to the DOM, we will create the same type of slider we built in the sandbox environment.

I believe it's a matter of some small modifications to our JavaScript code to make this happen.