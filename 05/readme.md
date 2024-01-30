# IST 363 Advanced Web Design - Spring 2024

## Welcome and Introduction to JavaScript

### Objectives:
* Learn the basics of JavaScript, specifically variables, methods and functions
* Learn how to create a HTML, CSS and JS boilerplate
* Learn how to use the console to debug your code

### Outline:
* Set up HTML and CSS quickly with the ! shortcut
* Utilize normalize.css and set up a small CSS reset of your own.
* Create a JS file and link it to your HTML.
* Insert a basic header element and style it
* Variables
* Methods: getElementById, addEventListener, classList.add, classList.remove
* Functions
* Debugging: `console.log();`

### Shortcut in VS Code

To set up a quick HTML boilerplate, type `!` and hit `tab`. This will create a nearly complete HTML document for you. 

### Normalize.css

Normalize.css is a small CSS file that resets the default styles of HTML elements. It's a good idea to use it in your projects. You can download it from [here](https://necolas.github.io/normalize.css/8.0.1/normalize.css).

You need to include it in your HTML file, before your own CSS file.

```html
<link rel="stylesheet" href="css/normalize.css" />
<link rel="stylesheet" href="css/style.css" />
```

### Creating a JS file

Create a new subdirectory in your project folder and name it `js`. Create a new file inside it and call it "main.js". Link it to your HTML file at the bottom. 

```html
<script src="js/main.js"></script>
</body>
</html>
```

### Add the header element

```html
<header>
    <h1>Airbnb</h1>
    <nav>
        <ul>
            <li><a href="#">Stays</a></li>
            <li><a href="#">Experiences</a></li>
            <li><a href="#">Online Experiences</a></li>
        </ul>
    </nav>
    <button id="menuBtn">
        Open menu
    </button>
</header>
```

### Style the header element

```css
html, body, h1, h2, h3, h4, h5, h6, p, ul, li, a, button {
    margin: 0;
    padding: 0;
    font: inherit;
}
body {
    background-color: yellow;
}
header {
    background-color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav ul li {
    list-style: none;
    margin-right: 1rem;
}
```

### Add overlay

```html
<div class="overlay" id="mobileMenu">
    <button id="closeBtn">
        Close menu
    </button>
    <h1>Airbnb</h1>
    <nav>
        <ul>
            <li><a href="#">Stays</a></li>
            <li><a href="#">Experiences</a></li>
            <li><a href="#">Online Experiences</a></li>
        </ul>
    </nav>
</div>
```

```css
.overlay {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .5s;
}
.overlay.active {
    left: 0;
}
```

### id attributes

An id attribute is a unique identifier for an element. It's used to target a specific element in JavaScript. 

```html
<button id="menuBtn">
    Open menu
</button>
```

### getElementById method

The .getElementById() method is used to target an element with a specific id.

```js
const menuBtn = document.getElementById('menuBtn');
```

### addEventListener

The .addEventListener() method is used to listen for an event on an element. The first argument is the event name, and the second argument is a function that will run when the event happens.

```js
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function() {
    console.log('clicked');
});
```

### classList.add

The .classList.add() method is used to add a class to an element. 

```js
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
});
```

### classList.remove

The .classList.remove() method is used to remove a class from an element. 

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

### Review: what role is JavaScript serving in our header?

In this project, JavaScript is utilized to manipulate the DOM (Document Object Model), specifically to alter HTML elements on the page. The functionality includes adding a class to the overlay element when the menu button is clicked and subsequently removing that class when the close button is clicked. This demonstrates JavaScript's dynamic capability to interact with and modify webpage elements based on user actions.


### Reading / Viewing:
* Read [JavaScript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) by Mozilla Developer Network (MDN)
* Watch [What is JavaScript?](https://www.youtube.com/watch?v=upDLs1sn7g4) by Mosh  Hamedani

### Assignment(s)
1. End of class attendance: zip up tonight's `airbnb` project folder and submit it on Blackboard/Assignments.
2. Before next class: Install Git on your computer (read below). Create a Github repository for your entire IST363 semester folder. It should include our creative coding projects and tonight's Airbnb project. Push your code up to the repository (read below). Submit the URL of your Github repository on Blackboard/Assignments.

### Github instructions
1. Install Git on your machine. Follow the instructions on Blackboard or [Git's website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). There's different instructions for Mac and Windows.
2. Log in or create an account on [GitHub](https://www.github.com).
3. Create a new repository called `ist363` (or something similar).
4. After the repository is created, Github gives you instructions on how to push your local project to the remote repository. Follow those instructions, but here's the gist:
    1. Open your IST363 project folder in VS Code
    2. Open the terminal in VS Code (View > Terminal)
    3. Run the command `git init`
    4. Run the command `git add .`
    5. Run the command `git commit -m "first commit"`
    6. Run the command `git branch -M master`
    7. Run the command `git remote add origin... (copy/paste this instruction from GitHub because it has the exact URL of your repository)`
    8. Run the command `git push -u origin master`
    9. Refresh the page on your Github repository and you should see your files there.
5. Copy/paste the URL of your Github repository and submit it on Blackboard/Assignments.