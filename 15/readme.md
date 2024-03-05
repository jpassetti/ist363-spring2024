# IST 363 Advanced Web Design - Spring 2024

## BEM and SASS

### Objectives:

- Utilize BEM methodology
- Write SASS styles using the BEM methodology
- Learn how to use HTML, CSS/SCSS and BEM to create a responsive slider for our Airbnb project (time permitting).

### Resources:

- [BEM](http://getbem.com/)
- [BEM 101](https://css-tricks.com/bem-101/)
- [SASS](https://sass-lang.com/)
- [SASS Guidelines](https://sass-guidelin.es/)
- [SASS 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)

## What is BEM?

BEM stands for Block, Element, Modifier. It's a popular naming convention for CSS classes. It's a way of naming classes that makes it easier to understand the purpose of each class, and to create a consistent naming convention for your classes.

```css
.block__element--modifier {
  /* Styles here */
}
```

- A **block** is a standalone component that is meaningful on its own. (e.g., a button, a form, a card)
- An **element** is a part of a block, such as a card title, form input, or form label. It's not meaningful on its own, and is always part of a block.
- A **modifier** is a class that modifies the style of a block or element. For example, a primary button or a delete button. Modifiers are indicate variants or flavors of a block or element.

Examples of BEM class names:

- `.form` - The block
- `.form__group` - The element
- `.form__label` - The element

or

- `.btn` - The block
- `.btn--primary` - The modifier
- `.btn--secondary` - The modifier
- `.btn--delete` - The modifier
- `.btn--large` - The modifier
- `.btn--medium` - The modifier
- `.btn--small` - The modifier

We can add modifiers for both the button's style (--primary, --secondary) and its size (--large, --medium, --small). This allows you to mix and match style and size modifiers as needed while maintaining a clear and consistent naming convention.

### Examples

For a large primary button, you would have:

```html
<button class="btn btn--primary btn--large">Primary Large</button>
```

For a medium secondary button, it would be:

```html
<button class="btn btn--secondary btn--medium">Secondary Medium</button>
```

#### Form styles in old CSS

```css
.form {
  margin-bottom: 20px;
}
.form__group {
  margin-bottom: 20px; /* Add space between form groups */
}
.form__label {
  display: block; /* Make the label a block element, so it takes up the full width of the container */
  font-family: Arial;
  font-weight: bold;
}
.form__input,
.form__textarea {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-family: Arial;
}
```

#### Forms styles in SASS using BEM

```scss
.form {
  margin-bottom: 20px;
  &__group {
    margin-bottom: 20px; /* Add space between form groups */
  }
  &__label {
    display: block; /* Make the label a block element, so it takes up the full width of the container */
    font-family: Arial;
    font-weight: bold;
  }
  &__input,
  &__textarea {
    width: 100%;
    padding: 16px;
    font-size: 16px;
    font-family: Arial;
  }
}
```

#### Button styles

We need to make a system for buttons, so we can easily reuse buttons, or add new buttons with different styles based on their context. We'll use a base class of `.btn` and then add additional classes for different styles.

```html
<div class="btn__group">
  <button class="btn btn--primary">Primary Button</button>
  <button class="btn btn--delete">Delete Button</button>
  <button class="btn btn--secondary">Secondary Button</button>
</div>
```

#### Button styles in old CSS

```css
.btn {
  padding: 16px;
  color: white;
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid transparent;
}
.btn__group {
  margin-bottom: 20px;
  display: flex;
  gap: 16px;
}
.btn--primary {
  background-color: green;
}
.btn--delete {
  background-color: red;
  border-color: red;
}
.btn--secondary {
  background-color: white;
  border-color: black;
  color: black;
}
```

#### Button styles in SASS using BEM

```scss
.btn {
  padding: 16px;
  color: white;
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid transparent;
  &__group {
    margin-bottom: 20px;
    display: flex;
    gap: 16px;
  }
  &--primary {
    background-color: green;
  }
  &--delete {
    background-color: red;
    border-color: red;
  }
  &--secondary {
    background-color: white;
    border-color: black;
    color: black;
  }
}
```

### BEM: typography

Using BEM (Block, Element, Modifier) methodology for your HTML classes, especially for typography, is a great way to maintain consistency and scalability in your CSS.

Let's take a look at how you might use BEM for typography. I recommend making a `style-guide.php` page and use it as a page to test and develop your styles. This will help you to see how your styles look in a real-world context and make it easier to test and develop your styles.

#### Headings

Use `heading` as the block and `--1` through `--6` as modifiers to denote the hierarchy level. This structure makes it clear that these elements are variations of the same fundamental component (a heading) but with different stylistic or hierarchical implications.

```html
<h1 class="heading heading--1">Heading 1</h1>
<h2 class="heading heading--2">Heading 2</h2>
<h3 class="heading heading--3">Heading 3</h3>
<h4 class="heading heading--4">Heading 4</h4>
<h5 class="heading heading--5">Heading 5</h5>
<h6 class="heading heading--6">Heading 6</h6>
```

#### Headings styles in old CSS

```css
.heading {
  font-family: Arial;
  font-weight: bold;
  margin-bottom: 1rem;
}
.heading--1 {
  font-size: 2rem;
}
.heading--2 {
  font-size: 1.75rem;
}
.heading--3 {
  font-size: 1.5rem;
}
.heading--4 {
  font-size: 1.1rem;
}
.heading--5 {
  font-size: .9rem;
}
.heading--6 {
  font-size: .8rem;
}
```

#### Headings styles in SASS using BEM

```scss
.heading {
  font-family: Arial;
  font-weight: bold;
  margin-bottom: 1rem;
  &--1 {
    font-size: 2rem;
  }
  &--2 {
    font-size: 1.75rem;
  }
  &--3 {
    font-size: 1.5rem;
  }
  &--4 {
    font-size: 1.1rem;
  }
  &--5 {
    font-size: .9rem;
  }
  &--6 {
    font-size: .8rem;
  }
}
```

Notice how the BEM naming convention makes it clear that these elements are variations of the same fundamental component (a heading) but with different stylistic or hierarchical implications.

#### Responsive typography

When we write our typography styles, we should utilize the "breakpoint" mixin for responsive styles. This will allow us to write our responsive styles in a more organized and maintainable way.

```scss
.heading {
  font-family: Arial;
  font-weight: bold;
  margin-bottom: 1rem;
  &--1 {
    font-size: 2rem;
    @include mixins.breakpoint(tablet) {
      font-size: 2.5rem;
    }
    @include mixins.breakpoint(laptop) {
      font-size: 3rem;
    }
  }
  &--2 {
    font-size: 1.75rem;
    @include mixins.breakpoint(tablet) {
      font-size: 2rem;
    }
    @include mixins.breakpoint(laptop) {
      font-size: 2.25rem;
    }
  }
  &--3 {
    font-size: 1.5rem;
    @include mixins.breakpoint(tablet) {
      font-size: 1.6rem;
    }
    @include mixins.breakpoint(laptop) {
      font-size: 1.7rem;
    }
  }
  &--4 {
    font-size: 1.1rem;
    @include mixins.breakpoint(tablet) {
      font-size: 1.2rem;
    }
    @include mixins.breakpoint(laptop) {
      font-size: 1.3rem;
    }
  }
  &--5 {
    font-size: .9rem;
    @include mixins.breakpoint(tablet) {
      font-size: 1rem;
    }
    @include mixins.breakpoint(laptop) {
      font-size: 1.1rem;
    }
  }
  &--6 {
    font-size: .8rem;
    @include mixins.breakpoint(tablet) {
      font-size: .9rem;
    }
     @include mixins.breakpoint(laptop) {
      font-size: 1rem;
    }
  }
}
```

#### Paragraphs

For paragraphs, you might not need as many modifiers unless you have distinctly styled paragraphs throughout your site. You can use `paragraph` as the block. If you have variations, use modifiers to describe them, like `--lead` for introductory paragraphs, `--small` for smaller text, etc.

```html
<p class="paragraph">Regular paragraph.</p>
<p class="paragraph paragraph--lead">Lead paragraph with more emphasis.</p>
<p class="paragraph paragraph--small">Small text paragraph.</p>
```

#### Paragraph styles in old CSS

```css
.paragraph {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.35; /* 16px * 1.35 = 21.6px space between baselines */
  margin-bottom: 1rem;
}
.paragraph--lead {
  font-size: 1.5rem;
  font-family: Georgia, serif;
}
.paragraph--small {
  font-size: .9rem;
}
```

#### Paragraph styles in SASS using BEM

```scss
.paragraph {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.35; /* 16px * 1.35 = 21.6px space between baselines */
  margin-bottom: 1rem;
  &--lead {
    font-size: 1.5rem;
    font-family: Georgia, serif;
  }
  &--small {
    font-size: .9rem;
  }
}
```

#### Links

For links, you can use `link` as the block. Modifiers can denote different types or states of links, such as `--primary` for primary CTA links, `--secondary` for less emphasized links, or `--nav` for navigation links, etc. You can also use BEM for state-based styling like `--active` or `--disabled` if applicable.

```html
<a href="#" class="link">Regular Link</a>
<a href="#" class="link link--primary">Primary CTA Link</a>
<a href="#" class="link link--nav">Navigation Link</a>
<a href="#" class="link link--disabled">Disabled Link</a>
```

#### Link styles in old CSS

```css
.link {
  font-family: Arial;
  font-size: 1rem;
  color: blue;
  text-decoration: none;
}
.link--primary {
  color: green;
}
.link--nav {
  color: black;
}
.link--disabled {
  color: gray;
  pointer-events: none;
  opacity: 0.5;
}
```

#### Link styles in SASS using BEM

```scss
.link {
  font-family: Arial;
  font-size: 1rem;
  color: blue;
  text-decoration: none;
  &--primary {
    color: green;
  }
  &--nav {
    color: black;
  }
  &--disabled {
    color: gray;
    pointer-events: none;
    opacity: 0.5;
  }
}
```

#### General Advice

- **Consistency:** Stick to a naming convention across your project. If you're using BEM, make sure you apply it consistently.
- **Semantics:** Choose names based on the element's purpose rather than its presentation (e.g., `--lead` for a leading paragraph rather than `--big` for its size).
- **Scalability:** Design your classes with scalability in mind. It's better to have a slightly more general class name that can be used in various contexts than to be overly specific and end up with duplicate styles.

This approach should help keep your CSS organized and make it easier for you (or your team) to understand and maintain the codebase.

#### Why use BEM and not just regular CSS?

- **Consistency:** BEM provides a consistent naming convention for your classes, making it easier to understand the purpose of each class.
- **Scalability:** BEM makes it easier to scale your CSS as your project grows. It's easier to add new styles and modify existing ones without creating conflicts or confusion.
- **Readability:** BEM makes your HTML and CSS more readable and understandable. It's easier to see how different elements are related and how they should be styled.
- **Collaboration:** BEM makes it easier to collaborate with other developers. If everyone follows the same naming convention, it's easier to understand and work with each other's code.

__Is it a rule that you need to use BEM?__ No, it's not a rule, but it's a good practice that can help you maintain a clean and organized codebase. It's a tool that can simply help you write better CSS.

