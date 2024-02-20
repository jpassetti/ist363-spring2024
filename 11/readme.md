# IST 363 Advanced Web Design - Spring 2024

## Review filter and learn SASS

### Objectives:

- Review the array filter method
- Practice using the array filter method
- Learn how to utilize SASS (time permitting)

### Resources:

- [MDN Web Docs: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [SASS](https://sass-lang.com/)


### JavaScript instructions:

1. Review the array filter property and how it can be used to filter out elements from an array.
2. Create a new JavaScript file to experiment with and load it into your HTML file.
3. Complete exercises #1-4 of how to use the array filter method. Please refer to the code and instructions below.

```javascript
// Exercise #1
// 1. Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// 2. Use the filter method to include all numbers less than 10
// 3. Print the result to the console
// expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Exercise #2
// 1. Create an array of objects of people
const people = [
  { name: 'John', age: 25 },
  { name: 'Bill', age: 30 },
  { name: 'Dave', age: 22 },
  { name: 'Jill', age: 35 },
  { name: 'Katie', age: 28 },
  { name: 'Martha', age: 27 }
];
// 2. Use the filter method to include all objects that have a property of 'age' less than 30
// 3. Print the result to the console
// expected result: [{ name: 'John', age: 25 }, { name: 'Dave', age: 22 }, { name: 'Katie', age: 28 }, { name: 'Martha', age: 27 }]


// Exercise #3
// 1. Create an array of objects containing Ford and Chevrolet cars
const cars = [
  { make: 'Ford', model: 'Fusion', year: 2019 },
  { make: 'Chevrolet', model: 'Malibu', year: 2018 },
  { make: 'Ford', model: 'Focus', year: 2017 },
  { make: 'Chevrolet', model: 'Cruze', year: 2016 },
  { make: 'Ford', model: 'Taurus', year: 2015 },
  { make: 'Chevrolet', model: 'Impala', year: 2014 }
];
// 2. Use the filter method to include all objects that have a property of 'make' equal to 'Ford'
// 3. Print the result to the console
// expected result: [{ make: 'Ford', model: 'Fusion', year: 2019 }, { make: 'Ford', model: 'Focus', year: 2017 }, { make: 'Ford', model: 'Taurus', year: 2015 }]

// Exercise #4
// 1. Fetch a JSON array of objects containing the SU men's basketball schedule (please download the entire schedule.json file from Blackboard/Content below tonight's agenda)

const schedule = [
    {
        "date": "2023-10-27",
        "opponent": "Deamon",
        "location": "JMA Wireless Dome",
        "exhibition": true
    },
    {
        "date": "2023-11-01",
        "opponent": "College of St. Rose",
        "location": "JMA Wireless Dome",
        "exhibition": true
    },
    // etc.
];

// 2. Use the filter method to only include the games in February
// Big question: How do you evaluate the date property in the filter method to only include games in February? Convert the date string to a Date object and evaluate the month property.
// 3. Print the result to the console

const februaryGames = schedule.filter(game => {
    // write your code here
    const dateObj = new Date(game.date); // convert the date string to a Date object
    return dateObj.getMonth() === 1; // February is the second month, so the index is 1, January is 0, March is 2, April is 3, etc.
});
console.log(februaryGames);
```

### Conclusion:

- The array filter method is a powerful tool to filter out elements from an array based on a condition.
- The filter method can be used to filter out elements from an array of objects based on any property or value, including dates.


### SASS instructions:

1. Install SASS on your computer
2. Use the SASS watch command to compile your SASS file into a CSS file
3. Use variables, nesting, partials and mixins in SASS

### What is SASS?

SASS is a preprocessor scripting language that is interpreted or compiled into CSS. SASS is a powerful tool used to maintain large stylesheets, and allows you to use variables, nesting, partials, and mixins to create more efficient and maintainable CSS.

### How to install SASS

1. Install Node.js on your computer (if you haven't already)
2. Open a terminal and type the following command to install SASS globally on your computer
```bash
npm install -g sass
```

Translation: "Hey npm, install the SASS package globally on my computer".

3. If you are using a Mac, you may need to use `sudo` to install SASS globally. This is because the global flag `-g` requires administrator privileges. 
```bash
sudo npm install -g sass
```
4. Check to see if SASS was installed by typing the following command
```bash
sass --version
```

### How to use SASS

1. Rename your "css" folder to "sass"
2. Rename your style.css with the `.scss` extension.
3. Open a terminal and type the following command to compile your SASS file into a CSS file
```bash
sass --watch sass/style.scss:css/style.css
```

Translation: "Hey sass, watch the style.scss file in the sass directory and compile it into a style.css file and place it into the css directory".

The watch command syntax requires the input file and the output file. The input file is the SASS file and the output file is the CSS file.

```
sass --watch input.scss:output.css
```

Important: please remember the browser can't read SASS files, so you need to compile your SASS file into a CSS file.

### SASS variables

SASS variables are used to store information that you want to reuse throughout your stylesheet. You can store things like colors, fonts, or any CSS value you think you'll want to reuse.

```scss
$color__primary: #ff0000;
$color__secondary: #00ff00;
$font__primary: Arial, sans-serif;
$font__secondary: Georgia, serif;

body {
  background-color: $color__primary;
  color: $color__secondary;
  font-family: $font__primary;
}
```

Note: Why use SASS variables and not CSS variables? There is no right or wrong answer, but SASS variables are compiled into CSS and use a simpler syntax. I encourage you to use prefixing for your SASS variables to make them easier to identify. For example, in my opinion `$color__primary` and `$font__primary` are easier to identify than `var(--primary-color)` and `var(--primary-font)`.

### SASS nesting

SASS nesting is a way to nest CSS selectors within one another. This is a great way to organize your CSS and make it more readable.

First, let's remember our HTML for the navigation:

```html
 <nav>
  <ul>
    <li>
      <a href="">Stays</a>
    </li>
    <li>
      <a href="">Experiences</a>
    </li>
    <li>
      <a href="">Online experiences</a>
    </li>
  </ul>
</nav>
```

We can style the navigation using SASS nesting:

```scss
nav {
  background-color: pink; // temporary color
  ul {
    display: flex;
    gap: 1rem;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: $color__primary;
        }
      }
    }
  }
}
```

### SASS partials

SASS partials are used to break up your SASS files into smaller, more maintainable files. This is a great way to organize your stylesheets and make them more manageable.

```scss
// _header.scss
header {
  background-color: #000;
  color: white;
}

// _footer.scss
footer {
  background-color: #000;
  color: white;
}
```

### Import SASS partials

You can import SASS partials into your main SASS file using the `@use` rule.

```scss
// style.scss
@use 'header';
@use 'footer';
```

### Improve folder and file structure

Developers and designers use SASS to improve the organization of their stylesheets. Many suggest using the "7-1 pattern" to organize your SASS files.

```plaintext
sass/
| - abstracts/
| | - _variables.scss
| | - _mixins.scss
| - base/
| | - _reset.scss
| | - _typography.scss
| | - _index.scss
| - components/
| | - _buttons.scss
| | - _carousel.scss
| | - _cover.scss
| | - _dropdown.scss
| | - _index.scss
| - layout/
| | - _grid.scss
| | - _header.scss
| | - _footer.scss
| | - _index.scss
| - pages/
| | - _home.scss
| | - _contact.scss
| | - _about.scss
| | - _index.scss
| - themes/
| | - _default.scss
| | - _dark.scss
| | - _light.scss
| | - _index.scss
| - vendors/
| | - _normalize.scss
| | - _index.scss
| - style.scss
```

### Local index files

You can create an index file in each folder to import all of the SASS files in that folder.

```scss
// base/_index.scss
@use 'reset';
@use 'typography';
```
  
  ```scss
// components/_index.scss
@use 'buttons';
@use 'carousel';
@use 'cover';
@use 'dropdown';
```

And repeat this process for each folder.

### Import all SASS files into one file

If you have local index files in each folder, you can easily import by referencing the folder without the name of the index file. SASS assumes you have an index file in each folder.

Your style.scss file becomes a table of contents, importing all of the SASS files in your project. This is a great way to organize your stylesheets and make them more manageable.

```scss
// style.scss
@use 'vendor';
@use 'base';
@use 'components';
@use 'layout';
@use 'pages';
@use 'themes';
```

### SASS mixins

SASS mixins are used to store a group of CSS declarations that you want to reuse throughout your stylesheet. You can store things like vendor prefixes, animations, or any group of CSS declarations you think you'll want to reuse.

```scss
// declare mixins in a file, specifically: abstracts/_mixins.scss
@mixin fontProperties() {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
}

// then import the mixins and use it in a file
// base/_base.scss
@use 'abstracts/mixins';

body {
  @include mixins.fontProperties();
}
```

### Why use mixins?

Mixins can write code for you. For example, you can write a mixin that includes all of the media query breakpoints for your project. This is a great way to keep your media queries consistent and maintainable.

```scss
// abstracts/_mixins.scss
@mixin breakpoint($size) {
  @if $size == 'phone' {
    @media (max-width: 699px) {
      @content;
    }
  }
  @else if $size == 'tablet' {
    @media (min-width: 700px) and (max-width: 1023px) {
      @content;
    }
  }
  @else if $size == 'laptop' {
    @media (min-width: 1024px) and (max-width: 1139px) {
      @content;
    }
  }
  @else if $size == 'desktop' {
    @media (min-width: 1140px) {
      @content;
    }
  }
}

// components/_container.scss
@use 'abstracts/mixins';

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @include mixins.breakpoint(tablet) {
    width: 700px;
  }
  @include mixins.breakpoint(laptop) {
    width: 1024px;
  }
  @include mixins.breakpoint(desktop) {
    width: 1140px;
  }
}
```


### Conclusion:

By utilizing SASS, you can create more efficient and maintainable CSS. Variables, nesting, partials, and mixins are all powerful tools that makes SASS a great choice for maintaining large stylesheets.


### Attendance:

- Commit your code to your GitHub repository. It will most likely include our filter exercises and just the beginning of your SASS file.