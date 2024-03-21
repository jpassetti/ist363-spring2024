# IST 363 Advanced Web Design - Spring 2024

# React and Next.js

## Description

In tonight's class, we will be diving into the world of React and Next.js. We will be building a simple application that uses React and Next.js.

## Hands on

As you know, our class sessions are always hands-on, and tonight's class will be no exception. We will be dedicating our time to building a simple application from scratch. Unlike previous sessions, I won't be providing a step-by-step tutorial. Instead, we'll dive into the building process together, encounter challenges, and work collaboratively to resolve them.

## Review: What is React?

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of web apps, mobile apps, and even desktop apps.

## Review: What is Next.js?

Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications. It is a production-ready framework that allows developers to build static and server-rendered applications using React.

## What does this mean?

React and Next.js are powerful tools that allow us to build modern web applications. They're built on top of JavaScript, so since you're familiar with JavaScript, you're already ahead of the game. 

### React features

- Component-Based: Build encapsulated components that manage their state.
- State Management: React makes it painless to create interactive UIs.
- Learn Once, Write Anywhere: You can develop new features in React without rewriting existing code.

### Next.js features

- Server Rendering: Next.js pre-renders each page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript.
- Static Site Generation: Next.js can generate a static website from your React application. This can be useful for performance, SEO, and cost reasons.
- File System Based Routing: Next.js has a file-system based router. This means that you can create a new page by adding a new file.

## New vocabulary

- **Component**: A reusable piece of code that can be used to build elements of a user interface.
- **Props**: Short for properties, props are used to pass data from parent to child components in React.
- **State**: An object that holds some information that may change. For example, a carousel component might have a state that keeps track of which slide is currently being displayed. (Next week)

## Components

A component is a reusable piece of code that can be used to build elements of a user interface. In React, everything is a component. We will be building a simple application that uses components to display information.

Let's create a new file called `Button.js` inside the `components` folder and add the following code:

```jsx
// components/Button.js

const Button = () => {
  return <button>Click me</button>;
}
export default Button;
```

Let's use it inside the homepage by importing it and adding it to the page:

```jsx
// app/page.js

import Button from '../components/Button';

const Homepage = () => {
  return <div>
      <h1>Weather app</h1>
      <Button />
    </div>
}
export default Homepage;
```

Translation: We created a new component called `Button` and used it or instantiated it inside the `Homepage` component.

## Props

Props are used to pass data from parent to child components in React. They are read-only and help you to make your components reusable. Let's modify our `Button` component to accept a `label` prop:

```jsx
// components/Button.js

const Button = ({ label }) => {
  return <button>{label}</button>;
}
export default Button;
```

The `{ label }` syntax is called destructuring. It's a way to extract the `label` property from the props object.

And let's use it inside the homepage by passing a `label` prop:

```jsx
// app/page.js

import Button from '../components/Button';

const Homepage = () => {
  return <div>
      <h1>Weather app</h1>
      <Button label="Download" />
      <Button label="Register now" />
      <Button label="Learn more" />
    </div>
}
export default Homepage;
```

Translation: We modified the `Button` component to accept a `label` prop and used it inside the `Homepage` component by passing different labels.

## Styling components

We can style our components using SASS. 

First we need to install SASS into our Next.js project. Quit the server. Run this command in your terminal. And then restart the server.
    
```bash
npm install sass
```

Let's create a new file called `Button.module.scss` inside the `components` folder and add the following code:

```scss
// components/Button.module.scss

.btn {
  background-color: blue;
  color: white;
  padding: .5rem 1.5rem;
  border: none;
  border-radius: .5rem;
}
```

And let's import it into the `Button` component:

```jsx
// components/Button.js

import styles from './Button.module.scss';

const Button = ({ label }) => {
  return <button className={styles.btn}>{label}</button>;
}
export default Button;
```

Translation: We created a new SASS file called `Button.module.scss` and imported it into the `Button` component to style the button.

Notice the `className` attribute? In React, you use `className` instead of `class` to apply CSS classes to elements.

Notice ths dot syntax with the styles object? This is how you access the CSS classes in your JavaScript code when using CSS modules. We imported all of the styles from the `Button.module.scss` file into the `styles` object and can now access them using dot notation.



## Header component

Let's create a new component called `Header` and use it inside the `Homepage` component:

```jsx
// components/Header.js

const Header = () => {
  return <header>
        Logo and nav will go here.
  </header>;
}
export default Header;
```

```jsx
// app/layout.js
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <Header />
            {children}
        </body>
    </html>
  );
}

```

Translation: We created a new component called `Header` and used it inside the `RootLayout` component.

## Styling

Let's style the `Header` component using SASS. Create a new file called `Header.module.scss` inside the `components` folder and add the following code:

```scss
// components/Header.module.scss

.header {
  background-color: white;
  padding: 1rem;
}
```

And let's import it into the `Header` component:

```jsx
// components/Header.js

import styles from './Header.module.scss';

const Header = () => {
  return <header className={styles.header}>
        Logo and nav will go here.
  </header>;
}
export default Header;
```

Translation: We created a new SASS file called `Header.module.scss` and imported it into the `Header` component to style the header.

## Logo and Nav components

Let's create a new component called `Logo` and use it inside the `Header` component:

```jsx
// components/Logo.js
import Image from 'next/image';

const Logo = () => {
  return <div>
        <Image 
            src="/logo-weather.svg"
            alt="Weather logo"
            width={100}
            height={100}
        />
  </div>;
}
export default Logo;
```

Translation: We created a new component called `Logo` and used it inside the `Header` component. 

### What is `next/image`?

Next.js has built in support for images. The `next/image` component is an extension of the HTML `<img>` element. It allows you to optimize images for performance, lazy load images, and more.

### Conclusion

We've covered a lot of ground in tonight's class. We've learned about React and Next.js, built a simple application, and learned about components, props, and styling. We've also learned about the `next/image` component and how to use it to optimize images for performance.





