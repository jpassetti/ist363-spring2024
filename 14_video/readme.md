# IST 363 Advanced Web Design - Spring 2024

## Review filter and learn SASS

### Objectives:

- Utilize SASS partials and mixins

### Resources:

- [SASS](https://sass-lang.com/)
- [SASS Guidelines](https://sass-guidelin.es/)
- [SASS 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)

In this video tutorial, we delve into the advanced functionalities of SASS, focusing particularly on the use of SASS partials and mixins to enhance your web design workflow. The tutorial is structured to guide you through two concepts: the organization of your stylesheet using the 7-in-1 pattern and the implementation of a responsive mixin named "breakpoint."

#### SASS Partials and the 7-in-1 Pattern:

After a quick review of SASS, I talk more about SASS partials, explaining how these can be used to break down your CSS into smaller, more manageable pieces. We then explore the 7-in-1 pattern, a methodology that organizes these partials into seven distinct folders: base, components, layout, pages, themes, abstracts, and vendors. This organizational strategy not only simplifies your stylesheet management but also promotes a modular design approach, making your stylesheets more adaptable and easier to maintain.

#### Mixins and the "Breakpoint" Responsive Mixin:

Following the discussion on partials, the video shifts focus to mixins, powerful tools in SASS that allow you to create reusable pieces of CSS code. Specifically, we examine the "breakpoint" mixin, an invaluable asset for responsive design. This mixin enables you to define CSS rules that apply at specific screen sizes, simplifying the process of making your website look great on devices of all dimensions. I provide step-by-step instructions on how to create and use the "breakpoint" mixin, demonstrating how it can significantly streamline the creation of responsive layouts.

### 7-1 Pattern

Developers and designers use SASS to improve the organization of their stylesheets. Many suggest using the "7-1 pattern" to organize your SASS files.

Read more: [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern)

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
    @media (min-width: 700px) {
      @content;
    }
  } @else if $size == "laptop" {
    @media (min-width: 1024px) {
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

### Homework

Commit your code to Blackboard/Assignments/Week 14 Homework. Your style.scss file should import all of your SASS files. Your SASS files should be organized using the 7-1 pattern. Your SASS files should use mixins to create a responsive design.

```bash
git add .
git commit -m "Homework: 7-1 pattern and mixins"
git push
```
