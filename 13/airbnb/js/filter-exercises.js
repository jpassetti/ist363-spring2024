// console.log("filter file ready to go!");

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

// include only numbers that are less than 10
const filteredNumbers = numbers.filter((number) => {
  return number < 10
}) // end of filter

// console.log({ filteredNumbers })

// example 2

const people = [
  { name: 'John', age: 25 },
  { name: 'Bill', age: 30 },
  { name: 'Dave', age: 22 },
  { name: 'Jill', age: 35 },
  { name: 'Katie', age: 28 },
  { name: 'Martha', age: 27 },
]

const filteredPeople = people.filter((person) => {
  return person.age < 30
}) // end of filter

// console.log({ filteredPeople })

// example 3

const cars = [
  { make: 'Ford', model: 'Fusion', year: 2019 },
  { make: 'Chevrolet', model: 'Malibu', year: 2018 },
  { make: 'Ford', model: 'Focus', year: 2017 },
  { make: 'Chevrolet', model: 'Cruze', year: 2016 },
  { make: 'Ford', model: 'Taurus', year: 2015 },
  { make: 'Chevrolet', model: 'Impala', year: 2014 },
]

const filteredCars = cars.filter((car) => {
  return car.make === 'Ford'
}) // end of filter

// console.log({ filteredCars })

// example 4
const filterGames = (games, monthIndex) => {
  const filteredGames = games.filter((game) => {
    const dateObject = new Date(game.date)
    return dateObject.getMonth() === monthIndex
  })
  console.log({ filteredGames })
} // end of filterGames

fetch('js/schedule.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // console.log({ data })
    filterGames(data, 11)
  })
  .catch() // promise
