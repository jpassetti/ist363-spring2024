# IST 363 Advanced Web Design - Spring 2024

## Review and expand upon JavaScript objects and arrays

### Objectives:

- Review what an object is
- Review what an array is
- Review how to loop through an array
- Learn how to set up a localhost server
- Learn how to fetch a JSON file
- Learn how to filter an array

### Outline:

- Object syntax terminology (key, value)
- Object example
- Array syntax terminology (index, length)
- Download my big JSON array of objects from Blackboard/Content/Week 4
- Install `http-server` npm package
- Fetch the JSON file with the fetch API
- Use the .filter() method to filter the array based on the room type

### Object syntax terminology

An object is a collection of properties, and a property is an association between a name (or key) and a value.

### Object example

```javascript
const room = {
  name: "Luxury Suite",
  price: 200,
  type: "Private Room",
  guests: 2,
  description:
    "This is a luxury suite with a private bathroom and a king-size bed.",
  available: true,
};
```

### Array syntax terminology

An array is a collection of items. In our example, we will use an array of objects. Arrays have the terminology of index and length. The index is the position of an item in the array, and the length is the number of items in the array.

### Sample array of objects

```javascript
const rooms = [
  {
    name: "Luxury Suite",
    price: 200,
    type: "Private Room",
    guests: 2,
    description:
      "This is a luxury suite with a private bathroom and a king-size bed.",
    available: true,
  },
  {
    name: "Economy Room",
    price: 100,
    type: "Shared Room",
    guests: 1,
    description:
      "This is a small room with a shared bathroom and a twin-size bed.",
    available: false,
  },
  {
    name: "Family Suite",
    price: 300,
    type: "Entire Place",
    guests: 4,
    description:
      "This is a large suite with a private bathroom and two queen-size beds.",
    available: true,
  },
];

// access the array manually
console.log(rooms.length); // 3
console.log(rooms[0].name); // Luxury Suite
```

### Loop through the array

With the .forEach() method, we can loop through the array and display the information in the console. This is easier than a for loop because we don't have to worry about the counter, condition, and increment. The .forEach() method will loop through the array and execute the code block for each item in the array. In the parentheses, we have a callback function that takes a parameter. The parameter is the local variable that represents the current item in the array.

```javascript
rooms.forEach((room) => {
  console.log(room.name); // quick test to see if it works

  // simplified version of the code

  // 1. create elements
  const roomArticle = document.createElement("article");
  const roomNameElement = document.createElement("h2");

  // 2. add content
  roomNameElement.textContent = room.name;

  // 3. append to the ARTICLE
  roomArticle.appendChild(roomNameElement);

  // 4. append to the BODY
  document.body.appendChild(roomArticle);
});
```

### Big data time

We'll start using a larger amount of data. I'll provide a JSON file with a large array of objects. We'll download the file and use it in our code.

- Download the my `properties.json` file from Blackboard/Content/Week 4 and place the file in the `js` subdirectory in our `airbnb` directory.

### CORS (my krptonite)

I've had many CORS issues in the past when trying to work in a local dev environment. I've found that using a localhost server is the best way to avoid CORS issues. I'll explain what CORS is and why it's important.

Imagine the internet is a big city, and within this city, there are many different buildings. Each building represents a different website. Now, for security reasons, there are rules about who can enter a building and who can't. These rules are important because they help protect the people and information inside each building.

CORS is like a security protocol for websites. It's a rule that says, "Before you can share or use resources from our building (website), you need to have permission." This is similar to needing a key or access code to enter a specific building in our city analogy.

Here's a more technical breakdown:

1. **Origin**: In the context of websites, an "origin" is essentially the address or location of a website, which includes the protocol (http or https), the domain (such as example.com), and the port (like 80 for http). If two URLs have the same protocol, domain, and port, they're considered to be from the same origin.

2. **Cross-Origin**: A request is "cross-origin" if it's trying to access resources from a different origin (building) than the one it originated from. For example, if your website is hosted on https://mywebsite.com and tries to request data from https://anotherwebsite.com, it's a cross-origin request because it's attempting to access resources from a different "building".

3. **The Issue**: For security reasons, web browsers restrict cross-origin HTTP requests initiated by scripts (like JavaScript). This is because allowing requests to any website could expose users to attacks where malicious websites access sensitive data from other sites the user is logged into.

4. **How CORS Works**: CORS is a mechanism that allows web servers to declare who can access their resources. It's like the building manager specifying which visitors (other websites) are allowed to enter. When a web server supports CORS, it can include special headers in its responses that tell the browser which origins are allowed to access its resources. If your website's origin is on the list, the browser will let your script use the resources.

In practice, when you make a request to a server that's configured with CORS, the server checks to see if the request is coming from an allowed origin. If it is, the server responds with the requested resources and includes a header like Access-Control-Allow-Origin to tell the browser that the request is permitted.

In summary, CORS is like a security guard for websites, ensuring that only authorized visitors (websites) can access certain resources. It helps keep the internet safe by preventing unauthorized sharing and access to data between websites.

### Why will I have CORS if I have the file in the same directory?

**The Actual Issue: Local File System vs. HTTP Protocol**

The confusion often arises when local files are involved, especially during development. If you're developing directly on your local file system (using file:// URLs in your browser to open your HTML files), then the browser's security model treats these local files differently than it does files served over HTTP/HTTPS. This difference in treatment can lead to behaviors that resemble CORS errors.

When you use the fetch API (or XMLHttpRequest, etc.) to request a local file from your file system, the browser might block this request because it's being made from a file:// URL, which doesn't have the same origin as an HTTP server. This is a security measure to prevent potentially malicious scripts from reading files directly from a user's file system.

### Solution: Use a Localhost Server

**Install `http-server` package**

We'll use the `http-server` package to set up a localhost server. This will allow us to fetch the JSON file and use it in our code. It will prevent CORS errors (Cross-Origin Resource Sharing).

1. Open a terminal
2. Navigate to the `airbnb` directory
3. Run the command `npm install http-server` to install the package into your project.
4. Run the command `http-server -p 3000` to start the server on port 3000 (e.g. localhost:3000 in the browser).
5. Ctrl+click the URL to open it in the browser.
6. When it's time to stop the server, press Ctrl+C in the terminal (even on a Mac!!)

### Fetch the JSON file with the fetch API

We'll use the fetch API to get the JSON file from the server. We'll use the .then() method to handle the response and convert it to JSON. We'll use the .then() method again to handle the JSON data and display it in the console.

```javascript
fetch("/js/properties.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Here's your data
  })
  .catch((error) => {
    console.error("There was a problem fetching the properties data:", error);
  });
```

Translation: "Hey server, can I have the properties.json file? If it's okay, I'll convert it to JSON and display it in the console. If there's a problem, I'll display an error message in the console."

### What is the fetch API?

The fetch API is a modern replacement for XMLHttpRequest. It's a powerful and flexible feature that allows you to make network requests similar to XMLHttpRequest, but with a simpler and more intuitive interface. It's built into the global window object, and it's promise-based, which means it uses JavaScript's native promises to handle results and errors.

### What are promises?

Promises are a way to handle asynchronous operations in JavaScript. They're a way to write asynchronous code that's easier to read, write, and debug. They're a pattern that helps you avoid deeply nested callbacks, which can be difficult to read and maintain. JavaScript will resolve the promise when the operation is successful, and it will reject the promise when the operation fails.

### Refactor our code

Let's capture the looping of properties in its own `renderProperties` function. This will make our code more modular and easier to read.

```javascript
function renderProperties(properties) {
  properties.forEach((room) => {
    // create elements
    const roomArticle = document.createElement("article");
    roomArticle.classList.add("room");

    const roomNameElement = document.createElement("h3");
    roomNameElement.classList.add("room--name");
    roomNameElement.textContent = room.name;

    const roomDescriptionElement = document.createElement("p");
    roomDescriptionElement.classList.add("room--description");
    roomDescriptionElement.textContent = room.description;

    const roomPriceElement = document.createElement("p");
    roomPriceElement.textContent = `Price: ${room.price}`;

    const roomGuestsElement = document.createElement("p");
    roomGuestsElement.textContent = `Guests: ${room.guests}`;

    roomArticle.appendChild(roomNameElement);
    roomArticle.appendChild(roomDescriptionElement);
    roomArticle.appendChild(roomPriceElement);
    roomArticle.appendChild(roomGuestsElement);

    document.body.appendChild(roomArticle);
  }); // end of forEach
}
```

And then we'll call the function in the .then() method.

```javascript
fetch("/js/properties.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Call renderProperties with the fetched data
    renderProperties(data);
  })
  .catch((error) => {
    console.error("There was a problem fetching the properties data:", error);
  });
```

### .filter() method

The .filter() method creates a new array with all elements that pass the test implemented by the provided function. In our case, we'll use the .filter() method to filter the array based on the room type.

```javascript
// inside the .then() method
const cabins = data.filter((room) => {
  return room.type === "Cabin";
});
// instead of rendering all the properties, we'll render the filtered properties
renderProperties(cabins);
```

Translation: "Hey JavaScript, can you grab all the cabins for me? Please loop through the data array, and if the room type is a cabin, add it to the new array called cabins. Then render the cabins."

### Homework

I'll be creating a video on Saturday that will cover the following:

- Review key items from tonight's demo
- Show how to loop over all room types and display them in html sections.
- Add styling to the sections to make them look like cards.
- Learn how to utilize `display: grid` to create a grid layout.
- Add conditional styling to the cards based on the room availability.
- Clean up all the CSS styling
