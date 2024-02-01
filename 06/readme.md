# IST 363 Advanced Web Design - Spring 2024

## CSS Flexbox, CSS Variables, Git and Github

### Objectives:
* Review how we used JavaScript to create a simple flyout menu
* Learn how to use CSS Flexbox and CSS Variables
* Continue styling the header and flyout navigation
* Try to troubleshoot issues with Git and Github

### Outline:
* Review JavaScript basics, like variables, methods and functions
* Review addEventListener and classList methods
* Review CSS the ``.overlay.active` class
* Review the CSS transition property
* Review the `display: flex` property
* Review the `justify-content` and `align-items` properties
* Review the `position: fixed` property
* Learn how to use CSS Variables
* Learn how to use Git and Github, and probably troubleshoot a few items

### JavaScript Review

#### Variables

A variable is a container for a value. You can think of it as a box that holds a value. 

```js
const menuBtn;
```

#### Methods

A method is a function that is attached is an object. 

```js
const menuBtn = document.getElementById();
```

Typically, methods require arguments. 

```js
const menuBtn = document.getElementById('menuBtn');
```

#### Functions

A function is a block of code that contains a series of statements.  

```js
function() {
  // do something
}
```

#### addEventListener method

The `addEventListener` method is used to attach an event to an element. 

It requires two arguments: the event name and a function that will run when the event happens. 

```js
menuBtn.addEventListener('click', function() {
    console.log('The menu button was clicked');
});
```

#### classList.add method

The `classList.add` method is used to add a class to an element. 

```js
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
});
```

#### classList.remove method

The `classList.remove` method is used to remove a class from an element. 

```js
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
});
```

### Important milestone: Combining JavaScript and CSS

We've learned how to use JavaScript to target elements and add or remove classes. 

We've also learned how to use CSS to style elements and create transitions.

We can combine these two skills to create a simple flyout menu, and many other similar components.

### CSS Variables

CSS Variables are a powerful tool that allow you to define a value once and use it in multiple places. 

```css
/* define a variable */
:root {
  --airbnb-red: #FF5A5F;
}

/* use the variable */
.overlay {
  background-color: var(--airbnb-red);
}
```


### Troubleshotting Git and Github

Since August 13, 2021, GitHub has required the use of token-based authentication, such as personal access tokens (PATs) or SSH keys, for all Git operations to increase security. Here's a step-by-step guide to resolve this issue:

#### Use a Personal Access Token (PAT) for HTTPS Git Operations

Instead of using a password, you will need to create a Personal Access Token (PAT) on GitHub to use as a substitute for her GitHub password.

#### Steps to Create a PAT:

- Log into GitHub account: Go to the GitHub website and log in.
Access Settings: Click on your profile icon in the top-right corner, then click "Settings."
- Developer settings: Scroll down to the bottom of the sidebar and click on "Developer settings."
- Personal access tokens: In the left sidebar, click on "Personal access tokens."
Generate new token: Click on the "Generate new token" button.
- Token description and expiration: Give the token a descriptive name and optionally set an expiration date.
- Select scopes: Choose the scopes or permissions you want to grant this token. For basic repository operations, select repo.
- Generate token: Click the "Generate token" button at the bottom.
- After creating the token, make sure to copy it and store it securely; GitHub won't show it again.
 
#### Using the PAT:

When pushing or pulling from the repository, use your Github username as usual, but instead of the password, use the PAT created.

#### Configure Git to Remember the PAT

To avoid entering the PAT each time, you can use the Git credential helper to store the PAT. Here's how to do it:

`git config --global credential.helper store`

After running this command, the next time Git prompts for a username and password, you should enter their GitHub username and the PAT as the password. Git will store these credentials, so they won't have to enter them for future operations.

 