# IST 363 Advanced Web Design - Spring 2024

## JavaScript progression: variables, objects and arrays

### Objectives:

- Learn how to use JavaScript to create variables, objects and arrays, but also how to use them in a real-world example.

### Outline:

- Review variables, but now in a Airbnb context
- Create elements using JavaScript and append them to the DOM
- Create an object
- Create an array
- Utilize a foreach loop to iterate through the array

### Variables

In a previous class, we learned how to create basic variables. Let's now use them in a real-world example. We will use Airbnb information as an example. We will create a variable for the name of the room, price of a room, the type of room, the number of guests, and description.

```javascript
const roomName = "Luxury Suite";
const roomPrice = 200;
const roomType = "Private Room";
const roomGuests = 2;
const roomDescription =
  "This is a luxury suite with a private bathroom and a king-size bed.";
```

### Create elements

We will create a simple webpage that will display the information of the room. We will use JavaScript to create the elements and append them to the DOM.

```javascript
// 1. variables
const roomName = "Luxury Suite";
const roomPrice = 200;
const roomType = "Private Room";
const roomGuests = 2;
const roomDescription =
  "This is a luxury suite with a private bathroom and a king-size bed.";

// 2. create elements and fill them with the room information
const roomInfo = document.createElement("article");

const roomNameElement = document.createElement("h3");
roomNameElement.textContent = roomName;

const roomPriceElement = document.createElement("p");
roomPriceElement.textContent = `Price: $${roomPrice}`;

const roomTypeElement = document.createElement("p");
roomTypeElement.textContent = `Type: ${roomType}`;

const roomGuestsElement = document.createElement("p");
roomGuestsElement.textContent = `Guests: ${roomGuests}`;

const roomDescriptionElement = document.createElement("p");
roomDescriptionElement.textContent = roomDescription;

// 3. append elements to the ARTICLE
roomInfo.appendChild(roomNameElement);
roomInfo.appendChild(roomPriceElement);
roomInfo.appendChild(roomTypeElement);
roomInfo.appendChild(roomGuestsElement);
roomInfo.appendChild(roomDescriptionElement);

// 4. append the ARTICLE to the body
document.body.appendChild(roomInfo);
```

This turns into a very tedious process. We can simplify this by creating an object and an array.

### Create an object

An object is a collection of properties, and a property is an association between a name (or key) and a value.

```javascript
const room = {
  name: "Luxury Suite",
  price: 200,
  type: "Private Room",
  guests: 2,
  description:
    "This is a luxury suite with a private bathroom and a king-size bed.",
};
```

### Accessing object properties

We can access the properties of an object using the dot notation.

```javascript
console.log(room.name); // Luxury Suite
console.log(room.price); // 200
```

This improves the readability of the code and makes it easier to maintain. But it's still not the best way to structure and display the information. We can use an array to store the information of multiple rooms.

### Create an array

An array is a special variable that can hold more than one value at a time.

```javascript
const rooms = [
  {
    name: "Luxury Suite",
    price: 200,
    type: "Private Room",
    guests: 2,
    description:
      "This is a luxury suite with a private bathroom and a king-size bed.",
  },
  {
    name: "Standard Room",
    price: 100,
    type: "Shared Room",
    guests: 4,
    description:
      "This is a standard room with a shared bathroom and two queen-size beds.",
  },
  {
    name: "Economy Room",
    price: 50,
    type: "Shared Room",
    guests: 6,
    description:
      "This is an economy room with a shared bathroom and three twin-size beds.",
  },
];
```

### Utilize a foreach loop

A foreach loop is used to iterate through the elements of an array.

```javascript
rooms.forEach((room) => {
  const roomInfo = document.createElement("article");

  const roomNameElement = document.createElement("h3");
  roomNameElement.textContent = room.name;

  const roomPriceElement = document.createElement("p");
  roomPriceElement.textContent = `Price: $${room.price}`;

  const roomTypeElement = document.createElement("p");
  roomTypeElement.textContent = `Type: ${room.type}`;

  const roomGuestsElement = document.createElement("p");
  roomGuestsElement.textContent = `Guests: ${room.guests}`;

  const roomDescriptionElement = document.createElement("p");
  roomDescriptionElement.textContent = room.description;

  roomInfo.appendChild(roomNameElement);
  roomInfo.appendChild(roomPriceElement);
  roomInfo.appendChild(roomTypeElement);
  roomInfo.appendChild(roomGuestsElement);
  roomInfo.appendChild(roomDescriptionElement);

  document.body.appendChild(roomInfo);
});
```

This is a more efficient way to display the information of multiple rooms. We can easily add or remove rooms from the array, and the code will still work.

### Conclusion

In this class, we learned how to use JavaScript to create variables, objects and arrays, but also how to use them in a real-world example. We also learned how to utilize a foreach loop to iterate through the elements of an array. This is a very important concept in JavaScript, and it will be used in many real-world examples.
