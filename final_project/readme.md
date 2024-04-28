# IST 363 Advanced Web Design - Spring 2024

# Final project

## Overview

The final project is our opportunity to bring all of our skills together (HTML, CSS, JavaScript, React) and to push them further. Just when you're comfortable with a technology, I'm asking you to go a little further. The final project is a chance to show off what you've learned and to create something that you can be proud of.

We will be programming a web application that showcases Top 10 lists, powered by Wordpress and the Spotify API. The Wordpress CMS will allow users to create top 10 lists. The Next.js application will display the top 10 lists and allow users to view and expand the information.

## Requirements

The web application must be:

- Built with Next.js
- Use the Wordpress API to create top 10 lists
- Use the Spotify API to display information about the top 10 items
- Use SASS to style the application
- Use React components to build the application
- Use React hooks to manage state
- Hosted on Vercel

## Video 1: Environment setup

In this video, we will set up the environment for the final project. We will create a new Next.js application and install the necessary dependencies.

[Video 1: Environment setup](https://www.youtube.com)

- Create a new Next.js application
- Install the necessary dependencies (sass, classnames)
- Reset the CSS and add a global stylesheet
- Create a new repository on GitHub
- Deploy to Vercel

### New Next.js application

All the information you need to create a new Next.js application can be found in the [Next.js documentation](https://nextjs.org/docs/getting-started).

Before I run the install command, I like to drag my `Sites` folder into the terminal. This way, the new project will be created in the correct location.

```bash
npx create-next-app@latest
```

The Next.js installation process will walk you through a few questions. I recommend using the default settings.

- What is your project named? `nextjs-ist363-spotify`
- Would you like to use TypeScript? No
- Would you like to use ESLint? Yes
- Would you like to use Tailwind CSS? No
- Would you like to use `src/` directory? No
- Would you like to use App Router? (recommended) Yes
- Would you like to customize the default import alias (@/*)? No

After it downloads the necessary files, you can navigate into the new project folder and start the development server.

```bash
cd nextjs-ist363-spotify
```

### Install the necessary dependencies

The final project will use `sass` to style the application. We will also use the `classnames` package to conditionally apply classes to elements.

```bash
npm install sass classnames
```

### Reset the CSS and add a global stylesheet

The Next.js application comes with a default stylesheet. We will remove it and create our own global stylesheet in SASS.

Create a `sass` directory in the root of the project and add a `global.scss` file inside.

#### Almost 7-in-1 pattern

The `global.scss` file will use the almost 7-in-1 pattern. This pattern is a simplified version of the 7-in-1 pattern that is commonly used in SASS projects.

```scss
@use './vendor';
@use './base';
```

#### Vendor

The `vendor` file will contain any third-party stylesheets that we need to include in the project.

```scss
// vendor.scss
@import './normalize';
```

Create a `_normalize.scss` file in the `sass/vendor` directory. Google "normalize.css" and copy the contents of the file into `_normalize.scss`.

```scss
// _normalize.scss
// Copy the contents of normalize.css here
```

#### Base

The `base` directory will contain the base styles for the project. This includes a custom reset, imported fonts, and global styles (as needed).

#### _reset.scss

```scss
h1, h2, h3, h4, h5, h6, p, ul, li {
  margin: 0;
  padding: 0;
  font: inherit; // Inherit font styles from parent element
}
ul, li {
  list-style: none; // Remove bullet points from lists
}
img {
  vertical-align: top; // Remove extra space below images
}
* {
  box-sizing: border-box; // Invert padding. CSS now includes padding and border in element width
}
```

#### _fonts.scss

```scss
// Import fonts from Google Fonts
// I will walk you through this in a video. For now, just create the file.
```

#### _base.scss

```scss
// Global styles for the project (as needed)
body {
  background-color: black;
  color: white;
}
```

#### local index.scss

```scss
// base/index.scss
// Bring all of the partials together
@use './reset';
@use './fonts';
@use './base';
```

### Verify the setup

After you have created the `sass` directory and added the `global.scss` file, you can import the global stylesheet into the `app/layout.js` file.

```jsx
// app/layout.js
import "../sass/global.scss";

export const metadata = {
 title: "IST 363 Spotify",
 description:
  "A web application that showcases Top 10 lists, powered by WordPress and the Spotify API.",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body>{children}</body>
  </html>
 );
}
```

Checkpoint: View the application in the browser (localhost:3000) to verify that the global stylesheet is being applied. You should see a black background and white text with no border around the body element.

### Create a new repository on GitHub

Go to Github and create a new repository for the project. You can use the same name as the project folder, specifically `nextjs-ist363-spotify`.

Then go back to your terminal, quit the server (ctrl+c), and attach the repository to the project.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

Copy/paste the next commands from the GitHub repository page to attach the repository to the project.

```bash
git remote add origin <repository-url>
git push -u origin main
```

### Deploy to Vercel

The final step in the environment setup is to deploy the project to Vercel. This will allow us to view the application online and share it with others.

Go to your Verce account and click the "New Project" button. Select the repository that you just created and click "Deploy".

After a few moments, the project will be live at the URL provided by Vercel.

### Conclusion

In this video, we set up the environment for the final project. We created a new Next.js application, installed the necessary dependencies, reset the CSS, added a global stylesheet, created a new repository on GitHub, and deployed the project to Vercel. 

If it's all working, you're ready to move on to the next video. If not, please review the steps and make sure you have completed each one and contact me if you need support.


