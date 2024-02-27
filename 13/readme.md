# IST 363 Advanced Web Design - Spring 2024

## Review filter and learn SASS

### Objectives:

- Learn how to utilize SASS

### Resources:

- [SASS](https://sass-lang.com/)
- [SASS Guidelines](https://sass-guidelin.es/)
- [SASS 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)

### SASS instructions:

1. Quickly review how to install SASS on your computer
2. Review the SASS watch command
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

To use SASS, you need to create a SASS file and compile it into a CSS file. Here's how you can do that:

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

### How to run SASS and http-server simultaneously

To run both `http-server` and `SASS` simultaneously in a vanilla JavaScript project, you can utilize a package like `npm-run-all`. This tool allow you to run multiple commands concurrently from the same terminal window. Here's how you can set it up:

1. Install npm-run-all

```bash
npm install --save-dev npm-run-all
```

2. Edit your package JSON file to include the following scripts:

```json
"scripts": {
  "start-server": "http-server -p 3000",
  "watch-sass": "sass --watch sass/style.scss:css/style.css",
  "start": "npm-run-all --parallel start-server watch-sass"
}
```

3. With everything set up, you can now run your project by executing the start script:

```bash
npm start
```

Translation: "Hey npm, run the script called start".

In the start script, you talk to npm-run-all. "Hey npm-run-all, run the start-server and watch-sass scripts simultaneously".

With everything set up, let's get into the details of SASS.

### Why use SASS?

1. [Variables](#variables)
2. [Nesting](#nesting)
3. [Partials](#partials)
4. [Mixins](#mixins)

#### Variables

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

#### Nesting

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

#### Partials

SASS partials are used to break up your SASS files into smaller, more maintainable files. This is a great way to organize your stylesheets and make them more manageable.

Partial files are prefixed with an underscore `_` and are imported into your main SASS file.

```scss
// File: _header.scss
header {
  background-color: #000;
  color: white;
}

// File: _footer.scss
footer {
  background-color: #000;
  color: white;
}
```

### Import SASS partials

You can import SASS partials into your main SASS file using the `@use` rule. You don't need to include the underscore `_` or the file extension `.scss`.

```scss
// style.scss
@use "header";
@use "footer";
```

### Improve folder and file structure

Developers and designers use SASS to improve the organization of their stylesheets. Many suggest using the "7-1 pattern" to organize your SASS files.

Read more: [7-1 wpattern](https://sass-guidelin.es/#the-7-1-pattern)

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
@use "reset";
@use "typography";
```

```scss
// components/_index.scss
@use "buttons";
@use "carousel";
@use "cover";
@use "dropdown";
```

And repeat this process for each folder.

### Import all SASS files into one file

If you have local index files in each folder, you can easily import by referencing the folder without the name of the index file. SASS assumes you have an index file in each folder.

Your style.scss file becomes a table of contents, importing all of the SASS files in your project. This is a great way to organize your stylesheets and make them more manageable.

```scss
// style.scss
@use "vendor";
@use "base";
@use "components";
@use "layout";
@use "pages";
@use "themes";
```

#### Mixins

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
@use "../abstracts/mixins";

body {
  @include mixins.fontProperties();
}
```

### Why use mixins?

Mixins can write code for you. For example, you can write a mixin that includes all of the media query breakpoints for your project. This is a great way to keep your media queries consistent and maintainable.

```scss
// abstracts/_mixins.scss
@mixin breakpoint($size) {
  @if $size == "phone" {
    @media (max-width: 699px) {
      @content;
    }
  } @else if $size == "tablet" {
    @media (min-width: 700px) and (max-width: 1023px) {
      @content;
    }
  } @else if $size == "laptop" {
    @media (min-width: 1024px) and (max-width: 1139px) {
      @content;
    }
  } @else if $size == "desktop" {
    @media (min-width: 1140px) {
      @content;
    }
  }
}

// components/_container.scss
@use "../abstracts/mixins";

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

Yes, it will feel like more work upfront, but the payoff is worth it. You will have a more organized and maintainable stylesheet that will save you time and effort in the long run.

### Attendance:

- Commit your code to your GitHub repository. It should include code from ALL of my lessons about SASS, specifically variables, nesting, partials and mixins.
