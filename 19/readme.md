# IST 363 Advanced Web Design - Spring 2024

# React: useState

## Objectives

- Understand how to use the `useState` hook in React.
- Learn how to manage state in a functional component.

## Introduction

In the previous class, we learned about components and props in React. We also built a simple application that used components to display information. In this class, we will dive deeper into React and learn about state management using the `useState` hook.

## State

State is a way to store data that can change over time in a React component. It allows you to keep track of information that affects the behavior of your application. For example, you can use state to store the current temperature in a weather app or the number of likes on a post.

In React, state is managed using the `useState` hook. The `useState` hook is a function that returns a stateful value and a function to update it. Let's see how we can use the `useState` hook in a functional component.

## `useState` Hook

The `useState` hook is a built-in hook in React that allows you to add state to functional components. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update the state.

The syntax for useState is as follows:

```jsx
const [stateValue, setStateFunction] = useState(initialValue);
```

Definitions:

- `stateValue`: A variable holding the current state value.
- `setStateFunction`: A function that allows you to update the state value.
- `initialValue`: The initial value of the state.

# Example 1: Counter

Here's an example of how to use the `useState` hook on the homepage:

```jsx
"use client";

import { useState } from 'react';

const Homepage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}
export default Homepage;
```

Translation: We imported the `useState` hook from the `react` package and used it inside the `Homepage` component to add state to the component. We initialized the state with an initial value of `0` and used the `setCount` function to update the state when the button is clicked.

Challenge: Modify the code to add a decrement button that decreases the count when clicked.

# Example 2: Toggle visibility

Here's another example of how to use the `useState` hook to toggle the visibility of a message:

```jsx
"use client";

import { useState } from 'react';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide message' : 'Show message'}
      </button>
      {isVisible && <p>Hello, world!</p>}
    </div>
  );
}
export default Homepage;
```

Translation: We used the `useState` hook to add a boolean state called `isVisible` to the component. We toggled the visibility of the message by updating the state when the button is clicked.

# Refactor: Use our Button component

Let's refactor the code to use our `Button` component:

```jsx
// app/page.js

import Button from '../components/Button';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Button 
        label={isVisible ? 'Hide message' : 'Show message'} 
        clickHandler={() => setIsVisible(!isVisible)} 
        />
      {isVisible && <p>Hello, world!</p>}
    </div>
  );
}
export default Homepage;
```

```jsx
// components/Button.js

import styles from './Button.module.scss';

const Button = ({ label, clickHandler }) => {
  return <button className={styles.btn} onClick={clickHandler}>{label}</button>;
}
export default Button;
```

Translation: We refactored the code to use the `Button` component to create the toggle button. We passed the label and click handler as props to the `Button` component.

# Example 3: Color array

Let's create a simple component that uses state to display an active color from an array of colors:

```jsx
// components/ColorPicker.js

import { useState } from 'react';

import Button from './Button';

const colors = [
    { 
        name: 'Red', 
        value: '#ff0000' 
    }, 
    { 
        name: 'Green', 
        value: '#00ff00' 
    }, 
    { 
        name: 'Blue', 
        value: '#0000ff' 
    }
];

const ColorPicker = () => {
    // an array of color names and values
 
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  return (
    <div className={styles.colorpicker}>
        <div 
            className={styles.colorpicker__block} 
            styles={{ backgroundColor: colors[activeColorIndex].value }}
        >
            <p>Active color: {colors[activeColorIndex].name}</p>
        </div>
      <Button 
        label="Change color"
        clickHandler={() => { 
            const newIndex = activeColorIndex >= colors.length - 1 ? 0 : activeColorIndex + 1;
            setActiveColor(newIndex);
        }}>
       />
    </div>
  );
}
export default ColorPicker;
```

Translation: We created a `ColorPicker` component that uses the `useState` hook to manage the active color index. We displayed the active color and created a button to change the active color. The index number allows us to access the color from the `colors` array. Instead of us typing `colors[0]`, `colors[1]`, etc., we can use the `colors[activeColorIndex]` to access the active color.

# Example 4: People array

Let's create a simple component that uses state to display one person from an array of people.

Please download the images from Blackboard/Content and place them in the `public/images` folder.

```jsx
// components/PeoplePicker.js

import { useState } from 'react';

import Image from 'next/image';

import Button from './Button';

const people = [
    { 
        name: 'Alice', 
        age: 25,
        slug: 'alice' 
    }, 
    { 
        name: 'Bob', 
        age: 30,
        slug: 'bob' 
    }, 
    { 
        name: 'Charlie', 
        age: 35,
        slug: 'charlie' 
    }
];

const PeoplePicker = () => {
    // an array of people objects
 
  const [activePersonIndex, setActivePersonIndex] = useState(0);

  return (
    <div className={styles.peoplepicker}>
        <article>
            <Image 
                src={`/images/${people[activePersonIndex].slug}.jpg`} 
                alt={people[activePersonIndex].name} 
                width={200} 
                height={200}
            />
            <h3>Name: {people[activePersonIndex].name}</h3>
            <p>Age: {people[activePersonIndex].age}</p>
        </article>
      <Button 
        label="Next person"
        clickHandler={() => { 
            const newIndex = activePersonIndex >= people.length - 1 ? 0 : activePersonIndex + 1;
            setActivePersonIndex(newIndex);
        }}>
       />
    </div>
  );
}
export default PeoplePicker;
```

Translation: We created a `PeoplePicker` component that uses the `useState` hook to manage the active person index. We displayed the active person's information and created a button to display the next person. The index number allows us to access the person from the `people` array.

## Conclusion

In this class, we learned about the `useState` hook in React and how to manage state in a functional component. We created examples that demonstrated how to use the `useState` hook to add state to a component and update the state value. We also refactored the code to use a custom `Button` component and created components that displayed an active color and person from an array.
