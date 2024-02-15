# IST 363 Advanced Web Design - Spring 2024

## Filter and sort

### Objectives:

- We're not reviewing tonight. We're going to jump right into the code.
- Learn how to use the .filter() method to filter an array of objects
- Learn how to use the .sort() method to sort an array of objects

### http-server

Don't forget to turn on your http-server. You can do this by opening a terminal window and typing the following command:

```bash
http-server
```

or

```bash
http-server -p 3000
```

Note: I prefer to use Chrome for the hard refresh. You can do this by right-clicking on the reload button and selecting "Hard Reload", or by pressing `Ctrl + Shift + R` on your Windows keyboard, or `Cmd + Shift + R` on your Mac keyboard.

http-server will often cache your CSS and JS files, and you won't see your changes unless you do a hard refresh.


### Filter method

The .filter() method creates a new array with all elements that pass the test implemented by the provided function. It's a great way to filter an array of objects. Here's an example:

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

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
  const filteredProperties = properties.filter(property => property.type === category.label.singular);


// New approach: Create a string to hold the HTML
// fill up the section with the new articles
  filteredProperties.forEach((property) => {
    const article = document.createElement('article');
    article.classList.add("property");

    // New approach: Create a string to hold the HTML
    let propertiesHTML = '';

    // Keep adding to the string to the new HTML articles
    // Look at this simpler format! It allows you to skip creating too many new elements
    /// Everything happens almost at once, and then you set the innerHTML in one operation
    propertiesHTML += `
        <h3 class="property--name">${property.name}</h3>
        <p class="property--description">${property.description}</p>
        <p class="property--price">Price: ${property.price}</p>
    `;

    // innerHTML sets the HTML content of an element
    article.innerHTML = propertiesHTML;

    // Append the article to the section
    section.appendChild(article);
    
  });

  // Append the section to the main container
  mainContent.appendChild(section);
}
```

### Sort method

The .sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. That's jargon for "it sorts the array alphabetically by default". Here's an example:

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

// You can also sort numbers, but it doesn't work automatically
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

### Sort by name

Take an array of objects and sort them by name. It's a simple example, but it should give you an idea of how to use the .sort() method to sort an array of objects.

```javascript
const properties = [
  { name: 'House', price: 100000 },
  { name: 'Apartment', price: 50000 },
  { name: 'Condo', price: 75000 }
];

properties.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
```

Translation: "Sort the properties by name. If the name of A is less than the name of B, put A before B. If the name of A is greater than the name of B, put A after B."

### Sort by price

Take an array of objects and sort them by price.

Sample:

```javascript
const properties = [
  { name: 'House', price: 100000 },
  { name: 'Apartment', price: 50000 },
  { name: 'Condo', price: 75000 }
];

properties.sort((a, b) => a.price - b.price);

console.log(properties);
// expected output: Array [{ name: 'Apartment', price: 50000 }, { name: 'Condo', price: 75000 }, { name: 'House', price: 100000 }]
```

Translation: "Sort the properties by price. If the price of A is less than the price of B, put A before B. If the price of A is greater than the price of B, put A after B."

### Conclusion

The .filter() and .sort() methods are powerful tools for working with arrays of objects. They can help you filter and sort your data in a variety of ways. They're also a great way to practice your JavaScript skills. In a project like Airbnb, you might use these methods to filter and sort properties based on a variety of criteria, such as price, location, and amenities. You might also use them to filter and sort reviews based on a variety of criteria, such as date, rating, and relevance. The possibilities are endless. Have fun experimenting with these methods and see what you can come up with!

### Time permitting: Conditional style

When we build the article and give it a class of "property", we can also use the "availability" property to give it a conditional style. For example, if the property is not available, we can give it a class of "property--unavailable". This will allow us to style the property differently based on its availability. Here's an example:

```javascript
filteredProperties.forEach((property) => {
    const article = document.createElement('article');
    article.classList.add("property");

    if (!property.available) {
      article.classList.add("property--unavailable");
    }
    // rest of the code
});
```

CSS styles:

```css
.property {
  background-color: #fff;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 20px;
}

.property--unavailable {
  background-color: #f2f2f2;
  color: #999;
  cursor: not-allowed;
}
```

We will be learning more CSS starting next week when we start using SASS in our projects, as well as CSS grid, CSS flexbox, and CSS variables. We'll also be learning how to use JavaScript to toggle classes and styles based on user interaction. It's going to be a lot of fun! 
