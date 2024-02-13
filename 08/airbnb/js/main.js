// console.log("js has been loaded!");

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

// "event name", callback function
menuBtn.addEventListener('click', () => {
  // console.log("cllllllicked!!");
  mobileMenu.classList.add('active');
}); // end of menuBtn click

closeBtn.addEventListener('click', () => {
  // console.log("cllllllicked!!");
  mobileMenu.classList.remove('active');
}); // end of menuBtn click

// variables
// const roomName = 'Luxury King Room';
// const roomPrice = 300;
// const roomGuests = 2;
// const roomDescription = 'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.';

// const room = {
//   name: 'Luxury King Room',
//   price: 300,
//   guests: 2,
//   description:
//     'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
// };

// const roomTitle = 'Luxury King Room';
// const roomPrice = 300;
// const roomGuests = 2;
// const roomDescription =
//   'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.';

// const room = {
//   title: 'Luxury King Room',
//   price: 300,
//   guests: 2,
//   description:
//     'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
// };
// console.log(room.title);

// const roomsArr = [
//   {
//     title: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
//   },
//   {
//     title: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
//   },
//   {
//     title: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
//   },
//   {
//     title: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
//   },
// ]; // end of array

// for (let i = 0; i < roomsArr.length; i++) {
//   console.log(roomsArr[i].title);
// }

// roomsArr.forEach((room) => {
//   console.log(room.title);
//   const roomTitleEl = document.createElement('h3');
//   roomTitleEl.classList.add('room--title');
//   roomTitleEl.textContent = room.title;

//   document.body.appendChild(roomTitleEl);
// });

// array of objects
// const rooms = [
//   {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
//   },
//   {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
//   },
//   {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
//   },
// ]; // end of rooms

function renderProperties(properties) {
  properties.forEach((room) => {
    // create elements
    const roomArticle = document.createElement('article');
    roomArticle.classList.add('room');

    const roomNameElement = document.createElement('h3');
    roomNameElement.classList.add('room--name');
    roomNameElement.textContent = room.name;

    const roomDescriptionElement = document.createElement('p');
    roomDescriptionElement.classList.add('room--description');
    roomDescriptionElement.textContent = room.description;

    const roomPriceElement = document.createElement('p');
    roomPriceElement.textContent = `Price: ${room.price}`;

    const roomGuestsElement = document.createElement('p');
    roomGuestsElement.textContent = `Guests: ${room.guests}`;

    roomArticle.appendChild(roomNameElement);
    roomArticle.appendChild(roomDescriptionElement);
    roomArticle.appendChild(roomPriceElement);
    roomArticle.appendChild(roomGuestsElement);

    document.body.appendChild(roomArticle);
  }); // end of forEach
} // end of renderProperties

fetch('./js/properties.json')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    renderProperties(data);
  });
