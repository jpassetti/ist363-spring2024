# IST 363 Advanced Web Design - Spring 2024

## Learn how to filter an array of objects

### Objectives:

- Review variables, objects and arrays
- Learn arrow function syntax
- Review how to fetch a JSON file with the fetch API
- Learn how to use the .filter() method to filter an array of objects

### Outline:

- JavaScript syntax review
- What is the `http-server` package?
- What is the fetch API?
- Use the .filter() method to filter an array of objects

### JavaScript syntax review

- Variable: A container for storing data values.
- Object: A variable that can store multiple values, specifically key-value pairs.
- Array: A collection of items, specifically a list of items. In our case, we'll use an array of objects.
- .forEach() method: A method that loops through the array and executes the code block for each item in the array.


### Arrow function syntax

An arrow function is a shorter way to write a function in JavaScript. It's a more modern way to write functions, and it's especially useful when you're working with arrays and objects. Here's an example of a traditional function and an arrow function:

```javascript
// 1. Traditional function
function add(a, b) {
  return a + b;
}
add(5, 10); // 15

// 2. Improved function
const add = function(a, b) { 
  return a + b;
}
add(5, 10); // 15, makes no difference that it's a const

// 3. Arrow function, no function keyword
const add = (a, b) => { 
  return a + b 
};
add(5, 10); // 15, 

// 4. Arrow function with implicit return (no return keyword)
const add = (a, b) => a + b;

add(5, 10); // 15

// 5. Arrow function with one parameter, no parentheses, implicit return, shortest syntax
const doubleMyDigit = x => x * 2;

doubleMyDigit(5); // 10

```

My personal preference is to type functions in one consistent manner. I use the arrow function syntax for all my functions, even if they're only one line long. But I don't type it super short. It's a matter of personal preference, but it's good to be familiar with all ways of writing functions, because you'll see them in modern JavaScript tutorials.

```javascript
// My preference:
const doubleMyDigit = (x) => {
  return x * 2;
};
```

### Prepare to fetch

Before you can fetch a JSON file, you need to have a server running. You can't fetch a file from your local file system. You need to fetch it from a server. You can use a server that's running on your computer, or you can use a server that's running on the internet. For this example, we'll use the `http-server` package to serve a directory on our computer.


### http-server package

The `http-server` package is a simple, zero-configuration command-line HTTP server. It's a quick way to serve a directory via HTTP. It's a great way to avoid CORS issues when working with local files.

### Turn on the http-server package

1. Drag your project folder into Visual Studio Code
2. Open a terminal (view > terminal)
3. Run the command `http-server -p 3000` to start the server on port 3000.
4. Open a browser and go to `http://localhost:3000` or cmd+click the URL in the terminal.


### Fetch API

The fetch API is a tool that replaces the older way of making web requests called XMLHttpRequest. It lets you ask for data from the internet in a way that's easier to use and understand. It's part of the web browser itself, and it works with promises, which are a feature in JavaScript that help manage tasks that might take some time to finish, like downloading data from the internet.

### Fetch API example

```javascript
fetch("js/properties.json")
  .then((response) => {
    // response returns a status code and a body
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // convert the body to JSON
    return response.json();
  })
  .then((data) => {
    console.log(data); // Here's your data
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });
```

Translation: "Hey server, can I have the data from this URL? If there's no network error, I'll convert it to JSON, and then display it in the console. If there's a problem with the file or contents or anything with this entire process, I'll display an error message in the console."

The fetch method has then() and catch() methods. The then() method is called when the promise is resolved, and the catch() method is called when the promise is rejected. The catch() method is like a safety net. It catches any errors that happen in the fetch request.

### Multiple fetches

The fetch example above only allows you to fetch one item. However, you can fetch multiple files at once with Promise.all(). Here's an example:

```javascript
Promise.all([
  // fetch 1
  fetch('properties.json').then(response => response.json()),
  // fetch 2
  fetch('categories.json').then(response => response.json())
  ])
  .then(([properties, categories]) => {
    categories.forEach(category => {
      displayCategory(category, properties);
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });
```

Promise.all() takes an array of promises and waits for them all to resolve. Then it returns an array of the results.

### displayCategory function

This function takes a category and an array of properties and displays them in the DOM. It's a simple example, but it should give you an idea of how to use the .filter() method to filter an array of objects.

```javascript
function displayCategory(category, properties) {
  const mainContent = document.getElementById('mainContent'); // Assuming an element with this ID exists in your HTML

  // Create a section for the current category
  const section = document.createElement('section');
  section.classList.add("section--category");
  
  // Create and append an h2 element for the category name
  const title = document.createElement('h2');
  title.textContent = category.name;
  section.appendChild(title);

  // Filter properties for the current category
  const filteredProperties = properties.filter(property => property.categoryId === category.id);

  // New approach: Create a string to hold the HTML
  let propertiesHTML = '';

  filteredProperties.forEach((property) => {

    // Keep adding to the string with new HTML articles
    // Look at this simpler format! It allows you to skip creating new elements
    /// Everything happens at once, and then you set the innerHTML in one operation
    propertiesHTML += `
      <article class="property">
        <h3 class="property--name">${property.name}</h3>
        <p class="property--description">${property.description}</p>
        <p class="property--price">Price: ${property.price}</p>
      </article>
    `;
  });

// Now, set the innerHTML in one operation, more efficient than multiple appends
section.innerHTML = propertiesHTML;

  // Append the section to the main container
  mainContent.appendChild(section);
}
```