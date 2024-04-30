## Video 2: Spotify API

This video will walk you through the process of setting up the Spotify API. We will create a Spotify Developer account, create a new application, and generate the necessary credentials to access the Spotify API.

[Video 2: Spotify API](https://youtu.be/Ud7tuNZpYW4)

## Overview

- Create a Spotify Developer account
- Create environment variables for the Spotify API credentials
- Create an endpoint in the project to access the Spotify API
- Fetch an access token from the Spotify API
- Fetch artist information from the Spotify API
- Display artist information in the application

## Patience

The Spotify API can be a little tricky to set up. Take your time and follow the instructions carefully. If you get stuck, don't hesitate to ask for help.

## Create a Spotify Developer account

In order to create interact with the Spotify API, you will need to create a Spotify Developer account. You can create an account at the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

Note: You will need a Spotify account (free or premium) to create a Spotify Developer account.

## Create environment variables

We will store the Spotify API credentials in environment variables. This will allow us to access the credentials securely in our application.

Create a `.env.local` file in the root of the project and add the following environment variables:

```env
SPOTIFY_CLIENT_ID=your-client-id
SPOTIFY_CLIENT_SECRET=your-client-secret
```

Replace `your-client-id` and `your-client-secret` with the credentials from the Spotify Developer Dashboard.

## Create an endpoint to access the Spotify API

We will create an endpoint in the project to access the Spotify API. This endpoint will fetch an access token from the Spotify API.

Create a new file `app/api/artists/route.js` and add the following code:

```javascript
import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
 const token = await getAccessToken();

 return new Response({token});
}
```

## Create the getAccessToken function

Create a new file `lib/spotify.js` and add the following code:

```javascript
export async function getAccessToken() {
 const clientId = process.env.SPOTIFY_CLIENT_ID;
 const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

 // Requesting access token from Spotify
 const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
   "Content-Type": "application/x-www-form-urlencoded",
   Authorization: `Basic ${Buffer.from(clientId + ":" + clientSecret).toString(
    "base64"
   )}`,
  },
  body: "grant_type=client_credentials",
 });

 const tokenData = await tokenResponse.json();
 if (tokenResponse.status !== 200) {
  throw new Error(`Failed to fetch token: ${tokenData.error_description}`);
 }
 return tokenData.access_token;
}
```

Translation: The `getAccessToken` function fetches an access token from the Spotify API using the client ID and client secret stored in the environment variables. The token is used to authenticate requests to the Spotify API.

## Fetch artist information from the Spotify API

We will fetch artist information from the Spotify API using the access token. Let's expand the file `app/api/artists/route.js` and add the following code:

```javascript
import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
 const token = await getAccessToken();

 const taylorSwift = "06HL4z0CvFAxyc27GXpf02";
 
 const apiResponse = await fetch(
  `https://api.spotify.com/v1/artists/${taylorSwift}`,
  {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  }
 );

 const artistData = await apiResponse.json();

 return new Response(JSON.stringify(artistData));
}

```

Translation: The `GET` function fetches artist information from the Spotify API using the access token. We are fetching information about Taylor Swift in this example. You can replace `taylorSwift` with the artist ID of your choice.

Where do you get the artist ID? You can search for an artist on the Spotify website and extract the ID from the URL. For example, Taylor Swift's artist ID is `06HL4z0CvFAxyc27GXpf02`.

## Display artist information in the application

We will display the artist information in the application. Let's edit `app/page.js` and add the following code:

```javascript
"use client";

import { useEffect, useState } from "react";

function HomePage() {
 const [artist, setArtist] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 if (isLoading) return <p>Loading...</p>;
 if (error) return <p>Error loading artists</p>;

 return (
  <div>Artist information will go here...</div>
 );
}

export default HomePage;
```

Translation: The `HomePage` component will eventually fetch artist information from the Spotify API and displays it in the application. We are using React hooks (`useState`) to manage state.

Nothing is happening yet. We will fetch the artist information in the next step.

The state of the application is managed by the `useState` hook. The `isLoading` state is used to display a loading message while the data is being fetched. The `error` state is used to display an error message if the data cannot be fetched.

I think of `isLoading` as a curtain that is drawn while the data is being fetched. Once the data is ready, the curtain is pulled back to reveal the content.

## useEffect

The `useEffect` hook is used to fetch the artist information when the component is mounted. Add the following code to `app/page.js`:

```javascript
"use client";

import { useEffect, useState } from "react";

function HomePage() {
 const [artist, setArtist] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  try {
   fetch("/api/artists")
    .then((res) => res.json())
    .then((data) => {
     setArtist(data.artist);
     setIsLoading(false);
    });
  } catch (error) {
   setError(error);
  }
 }, []);

 if (isLoading) return <p>Loading...</p>;
 if (error) return <p>Error loading artists</p>;

 return (
  <div>
    <h1>{artist.name}</h1>
  </div>
 );
}

export default HomePage;
```

Translation: The `useEffect` hook fetches artist information from the Spotify API when the component is mounted. The artist information is stored in the `artist` state. The `isLoading` state is set to `false` when the data is fetched.

We should see "Taylor Swift" displayed on the page. If you see an error message, double-check the artist ID and the Spotify API credentials.

## Reflection point

In this video, we set up the Spotify API in the project. We created a Spotify Developer account, stored the API credentials in environment variables, created an endpoint to access the Spotify API, fetched an access token, fetched artist information from the Spotify API, and displayed the artist information in the application.

This is a significant milestone in the project. We are now able to interact with the Spotify API and fetch artist information. The next step is to expand the application to display more artists.

## Multiple artists

The Spotify API allows us to fetch multiple artists at once. It requires a different endpoint, specifically `https://api.spotify.com/v1/artists?ids={ids}`.

We need an array of artists, a string of IDs, and a modified fetch request.

In `app/api/artists/route.js`, we can fetch multiple artists by modifying the code:

```javascript
import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
 const token = await getAccessToken();

 const artists = [
  {
   name: "Taylor Swift",
   spotify_id: "06HL4z0CvFAxyc27GXpf02",
  },
  {
   name: "Beyoncé",
   spotify_id: "6vWDO969PvNqNYHIOW5v0m",
  },
  {
   name: "Ariana Grande",
   spotify_id: "66CXWjxzNUsdJxJ2JdwvnR",
  },
 ];
 
 // Extract the artist IDs
 const artistsIds = artists.map((artist) => artist.spotify_id);

 // Convert the artist IDs to a string
 const artistsString = artistsIds.join(",");

 const artistsResponse = await fetch(
  `https://api.spotify.com/v1/artists?ids=${artistsString}`,
  {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  }
 );

 const artistsData = await artistsResponse.json();

 return new Response(JSON.stringify(artistsData));
}
```

Translation: The `GET` function fetches multiple artists from the Spotify API using the access token. We are fetching information about Taylor Swift, Beyoncé, and Ariana Grande in this example. You can add more artists to the `artists` array.

## Display multiple artists in the application

We will display multiple artists in the application. 

I've modified the state to be plural (`artists`). And we have to set state with the `artists` array from the API response `setArtists(data.artists);`.

The return statement will map over the `artists` array and display the artist names in `h1` elements.

Let's edit `app/page.js` and add the following code:

```javascript
"use client";

import { useEffect, useState } from "react";

function HomePage() {
 const [artists, setArtists] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  try {
   fetch("/api/artists")
    .then((res) => res.json())
    .then((data) => {
     setArtists(data.artists);
     setIsLoading(false);
    });
  } catch (error) {
   setError(error);
  }
 }, []);

 if (isLoading) return <p>Loading...</p>;
 if (error) return <p>Error loading artists</p>;

 return (
  <div>
   {artists.map((artist) => (
    <h1 key={artist.id}>{artist.name}</h1>
   ))}
  </div>
 );
}

export default HomePage;
```

Translation: The `HomePage` component fetches multiple artists from the Spotify API and displays them in the application. The `artists` state is an array of artist objects. The `map` function is used to iterate over the array and display the artist names.

You should see "Taylor Swift," "Beyoncé," and "Ariana Grande" displayed on the page. If you see an error message, double-check the artist IDs and the Spotify API credentials.

## Vercel

The final step is to deploy the project to Vercel. This will allow us to view the application online and share it with others.

You need to add the environment variables to the Vercel project settings. Go to the project settings in Vercel and add the environment variables (`SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET`) from the `.env.local` file.

## Conclusion

This is not easy. The Spotify API can be a challenge to set up. But once you have it working, you have access to a wealth of information about artists, albums, tracks, and more.

In the next video, we'll start building the application interface to display the artist information in a more user-friendly way.
