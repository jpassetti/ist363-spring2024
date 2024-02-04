# IST 363 Advanced Web Design - Spring 2024

## Dev Environment

### Objectives

- Understand the importance of a development environment
- Understand the importance of a formatter
- Download and install **Prettier**
- Understand the importance of a linter
- Download and install **ESLint**
- Understand the importance of a version control system
- Download and install **Git**
- Utilize Git and GitHub

# Video 1: Prettier

### Development Environment

A development environment is a set of tools and processes that are used to create software. It includes the tools used to write code, the tools used to test code, and the tools used to deploy code. A development environment can be as simple as a text editor and a web browser, or it can be as complex as a suite of tools that are used to create, test, and deploy software.

The key is to create a system that does **works for you**. The tools that you use should help you write better code, test your code more effectively, and deploy your code more efficiently.

### Formatter

A formatter is a tool that is used to format code. It is used to ensure that code is written in a consistent style. This is important because it makes code easier to read and understand. It also makes it easier to maintain and update code.

**Prettier** is a popular code formatter that is used to format JavaScript, CSS, and HTML. It is easy to use and can be integrated into VSCode.

### Install Prettier

To install Prettier, open VSCode and click on the Extensions icon in the Activity Bar on the side of the window. Search for `Prettier` and click on the Install button.

### Set Prettier as the Default Formatter in VSCode

1. **Open VSCode Settings:** Go to `File > Preferences > Settings` if you're on Windows or Linux. On macOS, go to `Code > Preferences > Settings`.
1. **Search for Default Formatter:** In the search bar at the top of the Settings tab, type Default Formatter. This will filter the settings to show only those related to formatting.
1. **Set Prettier as the Default Formatter:** Look for the setting titled `Editor: Default Formatter`. Click on the dropdown menu next to it, and then select `esbenp.prettier-vscode` from the list of available formatters. This sets Prettier as the default formatter for all files.
1. **Enable Format on Save:** To ensure that files are automatically formatted whenever they are saved, search for `Format On Save` in the Settings search bar.
1. **Find the Editor: Format On Save checkbox** and make sure it is checked. This option makes VSCode automatically format the code every time you save a document, using the default formatter you've just set.
1. **Apply and Close Settings:** The changes are applied automatically as you make them. Once you've set Prettier as the default formatter and enabled format on save, you can close the Settings tab.

### Create `.prettierrc` File

Create a file in the root of your project called `.prettierrc`. The `rc` stands for "runtime configuration" or "run commands".

This file is used to configure Prettier for the project you're currently working on. Here is an example of a `.prettierrc` file:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

This configuration sets Prettier to use semicolons, single quotes, and a tab width of 2 spaces. It also sets Prettier to use spaces instead of tabs for indentation.

Don't worry, I can't memorize these options. The configuration options are documented on the [Prettier website](https://prettier.io/docs/en/options.html).

# Video 2: ESLint

### Install Node.js

We'll be downloading node packages, so you'll need to have Node.js installed. You can download it from the [Node.js website](https://nodejs.org/en/).

### npm

npm is a package manager for JavaScript. It is used to install, manage, and update packages that are used in a project. It is also used to run scripts that are defined in a project's `package.json` file.

It comes with Node.js, so if you've installed Node.js, you should have npm installed as well.

Check to see if you have npm installed by running the following command in a terminal:

```bash
npm -v
```

### Linter

A linter is a tool that is used to analyze code for potential errors. It is used to ensure that code is written in a way that is consistent with best practices and coding standards. This is important because it helps to identify and fix errors before they become problems.

**ESLint** is a popular linter that is used to analyze JavaScript code. It is easy to use and can be integrated into VSCode.

### Install ESLint VSCode Extension

To install ESLint, open VSCode and click on the Extensions icon in the Activity Bar on the side of the window. Search for `ESLint` and click on the Install button.

### Install ESLint npm Package

To install ESLint, open a terminal and navigate to the root of your project. Then run the following command:

```bash
npm install eslint --save-dev
```

This will install ESLint as a development dependency in your project.

### Initialize ESLint Configuration

To initialize ESLint, run the following command in the terminal:

```bash
npx eslint --init
```

This will start a wizard that will guide you through the process of setting up ESLint for your project. You can choose to use a popular style guide, such as Airbnb, or you can choose to answer questions about your preferences for code style.
