# IST 363 Advanced Web Design - Spring 2024

# Conditional styling

## Overview

In this exercise, you will learn how to use conditional styling in React. Conditional styling is a technique that allows you to apply different styles to an element based on a condition. This is useful when you want to change the appearance of an element based on user interaction or other factors.

## Objectives

- Review the `classnames` npm package
- Review how to use conditional styling in React
- Review conditional styling to elements based on user interaction
- Learn how to make a `Container` component
- Learn how to make a `Row` component
- Learn how to make a `Col` component
- Learn how SASS mixins can power conditional styling

## Problem: Conditional styling

We don't want to have this:

    ```jsx
    <div className={`defaultClass ${isPrimary ? 'primaryClass' : 'secondaryClass'}`}>
    ```

Don't load up the `className` attribute with a bunch of ternary operators.

We want to have this:

    ```jsx
    <div className={divClasses}>
    ```

Where `divClasses` is a string that is either `'primary'` or `'secondary'` based on the value of `isPrimary`.

The classnames package helps us build one clean string to use in the `className` attribute. Example: "defaultClass primaryClass" or "defaultClass secondaryClass".

## classnames npm package

The `classnames` npm package is a utility that makes it easy to conditionally apply CSS classes to an element. It provides a simple API for combining multiple class names based on a condition.

1. Make sure you have the `classnames` package installed in your project using npm:

```bash
npm install classnames
```

2. Import the `classnames` package in your component:

```jsx
import classnames from "classnames/bind";
```

The bind method is used to bind the classnames function to a specific context. This allows you to create a reusable function that can be used to generate class names in different components.

3. Use the `classnames` function to generate class names based on a condition:

```jsx
import classnames from "classnames/bind";
import styles from "./MyComponent.module.scss";

const cx = classnames.bind(styles);
```

4. Use the `cx` function to generate class names based on a condition:

```jsx
const MyComponent = ({ isPrimary }) => {
  const divClasses = cx({
    defaultClass: true,
    primaryClass: isPrimary,
    secondaryClass: !isPrimary,
  });

  return <div className={divClasses}>Hello, world!</div>;
};
```

## Container

The `Container` component is a wrapper that centers the content horizontally and adds padding to the sides. It is typically used to contain the main content of a page.

### Usage

```jsx
// components/Header.js
import Container from "./Container";

const Header = () => (
  <header>
    <Container>
      <h1>Weather App</h1>
      <p>Navigation goes here.</p>
    </Container>
  </header>
);
export default Header;
```

````

### Definition

```jsx
import React from 'react';
import styles from './Container.module.scss';

const Container = ({ children }) => (
    <div className={styles.container}>
        {children}
    </div>
);
export default Container;
````

### Children prop

The `children` prop is a special prop that is automatically passed to a component by React. It represents the content that is nested inside the component. In this case, the `Container` component will render its children inside a `div` element with the class name `container`.

### Styling

```scss
@use "../sass/abstracts/mixins";

.container {
  margin: 0 auto;
  padding: 0 1rem;
  @include mixins.breakpoint(sm) {
    width: 700px;
  }
  @include mixins.breakpoint(md) {
    width: 980px;
  }
  @include mixins.breakpoint(lg) {
    width: 1140px;
  }
}
```

Note: Make sure to create a `sass` directory in your project and add the `abstracts` directory with the `mixins.scss` file. And make sure you have the breakpoint mixins defined in the `mixins.scss` file.

## Row

The `Row` component is a wrapper that contains a set of columns. It is typically used to group columns together and add spacing between them. I often think of it as a flex parent.

### Usage

```jsx
// components/Header.js
import Container from "./Container";
import Row from "./Row";

const Header = () => (
  <header>
    <Container>
      <Row>
        <h1>Weather App</h1>
        <p>Navigation goes here.</p>
      </Row>
    </Container>
  </header>
);
export default Header;
```

### Definition

```jsx
import styles from "./Row.module.scss";

const Row = ({ children }) => <div className={styles.row}>{children}</div>;
export default Row;
```

### Styling

```scss
.row {
  display: flex;
  flex-wrap: wrap;
}
```

### Problem: Flex properties

A flex parent like the `Row` component needs extra CSS properties to work properly, like justify-content and align-items.

### Solution: Utility classes

We can use utility classes to power our components. This way, we can keep our components clean and simple, and move the complex styling logic to the SASS files.

```scss
// Row.module.scss
.row {
  display: flex;
  flex-wrap: wrap;
  &.justify-content-space-between {
    justify-content: space-between;
  }
  &.justify-content-center {
    justify-content: center;
  }
  &.align-items-center {
    align-items: center;
  }
  &.align-items-flex-start {
    align-items: flex-start;
  }
}
```

### Improved Row component

```jsx
import classnames from 'classnames/bind';
import styles from './Row.module.scss';

const cx = classnames.bind(styles);

const Row = ({ children, alignItems, justifyContent }) => {
    const rowClasses = cx({
        row: true,
        `justify-content-space-between`: justifyContent === 'space-between',
        `justify-content-center`: justifyContent === 'center',
        `align-items-center`: alignItems === 'center',
        `align-items-flex-start`: alignItems === 'flex-start',
    });
    return <div className={styles.row}>
        {children}
    </div>
};
export default Row;
```

Translation: If the `justifyContent` prop is `'space-between'`, add the class `justify-content-space-between` to the `div` element. If the `alignItems` prop is `'center'`, add the class `align-items-center` to the `div` element.

### Usage

```jsx
// components/Header.js
import Container from "./Container";
import Row from "./Row";

const Header = () => (
  <header>
    <Container>
      <Row justifyContent="space-between" alignItems="center">
        <h1>Weather App</h1>
        <p>Navigation goes here.</p>
      </Row>
    </Container>
  </header>
);
export default Header;
```

Important: There's a small problem with this approach. If we expand upon the number of utility classes that the `Row` component supports, we'll have to continue to add them manually. This is not ideal. We want the `Row` component to have these properties by default.

### Solution: SASS mixins to generate classes

We can use SASS mixins to generate classes for the `Row` component. This way, we can keep the `Row` component clean and simple, and move the complex styling logic to the SASS files.

```scss
@use "../sass/abstracts/mixins";

.row {
  display: flex;
  flex-wrap: wrap;
  @include mixins.generateJustifyContentClasses();
  @include mixins.generateAlignItemsClasses();
}
```

```scss
// mixins.scss
@mixin generateJustifyContentClasses() {
  &.justify-content-space-between {
    justify-content: space-between;
  }
  &.justify-content-center {
    justify-content: center;
  }
}
@mixin generateAlignItemsClasses() {
  &.align-items-center {
    align-items: center;
  }
  &.align-items-flex-start {
    align-items: flex-start;
  }
}
```

Now, the `Row` component will have the flex properties by default, and we can use the generated classes to customize the layout as needed.

## (!!!) Refactor opportunity

When you use SASS, you have the ability to loop through an array of values. This is a great opportunity to refactor the `Row` component to use a loop to generate the classes.

```scss
// mixins.scss
@mixin generateJustifyContentClasses() {
  $values: flex-start, flex-end, center, space-between, space-around,
    space-evenly, initial, inherit;

  @each $value in $values {
    &.justify-content-#{$value} {
      justify-content: $value;
    }
  }
}
@mixin generateAlignItemsClasses() {
  $values: stretch, flex-start, flex-end, center, baseline, initial, inherit;

  @each $value in $values {
    &.align-items-#{$value} {
      align-items: $value;
    }
  }
}
```

Look how much cleaner the SASS file is now! We can easily add or remove values from the `$values` array to customize the component as needed.

## What other flex properties can we add?

- `flex-direction`
- `flex-wrap`
- `align-content`
- `gap`

## Col

The `Col` component is a wrapper that contains a column of content. It is typically used to define the layout of a page and specify the width of the column. Between `Container`, `Row`, and `Col`, you can build a grid system. These are my most used components.

### Weather app usage

```jsx
// components/page.js
// Homepage component
// skip over the top logic and imports
return (
  <div>
    {errorMsg && <div>{errorMsg}</div>}
    {weatherData && (
      <section>
        <Container>
          <Row>
            <Col sm={4}>
              <h2>{weatherData.city.name}</h2>
              <p>Current temp: {weatherData.list[0].main.temp}&deg; F</p>
              <p>{weatherData.list[0].weather[0].description}</p>
              <Image
                src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
                alt={`Weather icon for ${weatherData.list[0].weather[0].description}`}
                width={100}
                height={100}
              />
            </Col>
            <Col sm={8}>
              <Tabs
                activeIndex={activeDayIndex}
                items={daysOfWeek}
                clickHandler={setActiveDayIndex}
              />
              {
                // refactor this to a separate component, e.g. <List />
                weatherData?.list
                  .filter((block) => {
                    const date = new Date(block.dt * 1000);
                    const options = { weekday: "short" };
                    const day = date.toLocaleDateString("en-US", options);
                    return day === daysOfWeek[activeDayIndex];
                  })
                  .map((block, index) => {
                    return <p key={index}>{block.main.temp}</p>;
                  })
              }
            </Col>
          </Row>
        </Container>
      </section>
    )}
  </div>
);
export default Homepage;
```

### Definition

```jsx
// components/Col.js
import classnames from "classnames/bind";
import styles from "./Col.module.scss";

const cx = classnames.bind(styles);

const Col = ({ children, xs, sm, md, lg }) => {
  const colClasses = cx({
    col: true,
    [`col__xs__${xs}`]: xs,
    [`col__sm__${sm}`]: sm,
    [`col__md__${md}`]: md,
    [`col__lg__${lg}`]: lg,
    [`col__xl__${xl}`]: xl,
  });
  return <div className={colClasses}>{children}</div>;
};
export default Col;
```

### Styling

```scss
// Col.module.scss
@use "../sass/abstracts/mixins";

.col {
  width: 100%;
  @include mixins.generateColClasses();
}
```

```scss
// mixins.scss
@mixin generateColClasses() {
  $sizes: xs, sm, md, lg;

  @each $size in $sizes {
    @include mixins.breakpoint(#{$size}) {
      @for $i from 1 through 12 {
        &.col__#{$size}__#{$i} {
          width: calc(100% * (#{$i}/ 12));
        }
      }
    }
  }
}
```

This will generate classes like `col__xs__1`, `col__xs__2`, `col__xs__3`, etc. up to 12, per breakpoint. It'll generate classes like `col__sm__1`, `col__md__1`, `col__lg__1`, `col__xl__1`, too. This way, you can specify the width of the column based on the screen size.

### Example usage

```jsx
<Row>
  <Col xs={12} sm={9} md={8}>
    <p>Main content goes here.</p>
  </Col>
  <Col xs={12} sm={3} md={4}>
    <p>Sidebar content goes here.</p>
  </Col>
</Row>
```

## Conclusion

In this exercise, you learned how to use conditional styling in React. You learned how to use the `classnames` npm package to conditionally apply CSS classes to an element. You also learned how to create a `Container`, `Row`, and `Col` component to build a grid system in your application. By using conditional styling, you can create dynamic and interactive user interfaces that respond to user input and other factors.

## Resources

- [classnames npm package](https://www.npmjs.com/package/classnames)
- [React documentation](https://reactjs.org/docs/getting-started.html)
- [SASS documentation](https://sass-lang.com/documentation)

## Assignment

We probably didn't reach the `<Col>` component section. Let's focus on that for the assignment. Create a `<Col>` component that generates classes based on the screen size and width of the column. Use the `classnames` npm package to conditionally apply CSS classes to the column element. Test the component by using it in a layout with multiple columns of different widths. Make sure the columns are responsive and adjust their width based on the screen size.

Scroll back up and implement the `Weather app usage` example in your project. Make sure to use the `Col` component to define the layout of the page and specify the width of the columns. Test the layout by resizing the browser window and verifying that the columns adjust their width accordingly.

## Submission

Commit your changes and push them to your GitHub repository. Submit the URL of your GitHub repository to Blackboard/Assignments.