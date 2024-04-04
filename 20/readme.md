# IST 363 Advanced Web Design - Spring 2024

# Next.js and Weather App

In this session, we will be creating a weather app using Next.js and OpenWeatherMap API.

## Objectives

Part 1:
- Use OpenWeatherMap API to get weather data
- Use Postman to test the API
- Perform a basic request to the API and display the data on the page
- Use `useState` and `useEffect` hooks to manage state and side effects

Part 2:
- Get geographical location of the user
- Convert latitude and longitude to zip code
- Request data from OpenWeatherMap API based on zip code
- Display weather data based on user's location

## OpenWeatherMap API

OpenWeatherMap is a service that provides weather data, including current weather data, forecasts, and historical data to the developers. It provides a free tier that allows you to make 60 requests per minute.

In order to use OpenWeatherMap API, you need to create an account and get an API key. You can sign up for a free account at [OpenWeatherMap](https://openweathermap.org/).

## Getting Started

To get started, you will need to turn on your existing Next.js project. Drag your project folder into VS Code. Turn on the server by running the following command:

```bash
npm run dev
```

This will start the development server and you can access your project at [http://localhost:3000](http://localhost:3000).


## Postman

Postman is a popular API client that allows you to test APIs. You can use Postman to test the OpenWeatherMap API before integrating it into your project.

To test the OpenWeatherMap API, you will need to create a new request in Postman. You can do this by following these steps:

1. Open Postman
2. Click on the `+` button to create a new request
3. Enter a name for the request
4. Enter the URL for the OpenWeatherMap API:
`http://api.openweathermap.org/data/2.5/forecast?zip=13244&appid=XXXX
5. Copy/paste the API key from OpenWeatherMap and replace the XXXX in the URL
6. Click on the `Send` button to make the request

Translation: "I want to get the weather forecast for the zip code 13244."

## Preview data

You should see the weather data for the zip code 13244 in the response. This data will include information such as the city, a list of weather conditions, coordinates, and more.

## Why you need to use Postman?

Postman is a great tool for testing APIs because it allows you to see the response data in a structured format. This makes it easier to understand the data BEFORe you use it in your project.

## Where do we call the API?

We will be calling the OpenWeatherMap API in a new directory and file `lib/api.js` file. This file will contain the logic to call the API and return the weather data.

Keeping it in a separate file will make it easier to manage and test the API calls.

```javascript
export async function getAllWeatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=13244&appid=XXXX&units=imperial`
  );
  const data = await response.json();
  return data;
}
```

## units=imperial ---what?

The `units=imperial` parameter in the API URL tells OpenWeatherMap to return the temperature in Fahrenheit. You can also use `units=metric` to get the temperature in Celsius.

## How do we use the API?

We will be using the `getAllWeatherData` function in the `app/page.js` file to get the weather data and display it on the page.

```javascript
import { getAllWeatherData } from "../lib/api";

const Homepage = () => {
  const data = getAllWeatherData();

  return (
    <div>
      <h1>Weather App</h1>
      <h2>{data.city.name}</h2>
    </div>
  );
}
export default Homepage;
```

## Failure

You will see an error message because the `<h2>` tag is trying to access the `city.name` property of the `data` object before the API call is complete. This is because the `getAllWeatherData` function is asynchronous and returns a **promise**.

## What is a promise?

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

## How do we fix it?

We can fix this by using the `useState` hook to store the weather data and update the state when the API call is complete. And we'll use the `useEffect` hook to call the API when the component is mounted.

## Review: useState

The `useState` hook is a function that allows you to add state to functional components. It returns an array with two elements: the current state value and a function that lets you update it.

```javascript
// raw syntax
const [stateVariable, setStateVariable] = useState(initialState);
```

## New: useEffect

The `useEffect` hook is a function that lets you perform "side effects" in functional components. Personally, I don't like the name "use effect" or "side effects". I like to focus on how it runs AFTER the component has rendered and can be used to fetch data and more. It takes two arguments: a function and an array of dependencies.

```javascript
// raw syntax
useEffect(() => {
  // code to run after component has rendered
}, [dependencies]);
```

**What are dependencies?** Dependencies are variables that the effect depends on. If any of the dependencies change, the effect will run again.

## How do we use `useState` and `useEffect`?

We will update the `app/page.js` file to use the `useState` and `useEffect` hooks to call the API and store the weather data.

```javascript
import { useState, useEffect } from "react";

import { getAllWeatherData } from "../lib/api";

const Homepage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllWeatherData();
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {data && <h2>{data.city.name}</h2>}
    </div>
  );
};
```








