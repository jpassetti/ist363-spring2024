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

# Video 3: Git and Github

**Git** is a version control system that is used to track changes in code. It is used to manage the history of a project, and it is used to collaborate with other developers.

**GitHub** is a web-based platform that is used to host code repositories. It is used to store, manage, and share code with other developers.

### Install Git

To install Git, go to the [Git website](https://git-scm.com/) and download the version for your operating system. There are separate installers for Windows, macOS, and Linux. Follow the instructions to install Git on your computer.

Note: We aren't using the Github Desktop application. We are using the command line interface (CLI) to interact with Git and Github.

### Check git version

To check if Git is installed, open a terminal and run the following command:

```bash
git --version
```

This will display the version of Git that is installed on your computer.

### Create a New Repository on GitHub

To create a new repository on GitHub, go to the [GitHub website](https://www.github.com) and log in. Then click on the `New` button in the top-right corner of the screen. This will open a form that you can use to create a new repository.

Github gives you the commands to run in the terminal to initialize the repository and push your code to the repository.

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin (paste the url from github)
git push -u origin main
```

Translation: "Initialize the repository, add all the files to the staging area, commit the changes with a message, set the branch to main, add the remote repository, and push the changes to the remote repository."

Note: when you run the push command, you will be prompted to enter your GitHub username and password. This authentication method is deprecated by GitHub, so we need to configure Git to use a Personal Access Token (PAT) instead of a password. We'll cover that in the next section.

### Configure Git and Personal Access Token (PAT)

GitHub has moved away from password authentication for Git operations. Since August 13, 2021, GitHub has required the use of token-based authentication, such as personal access tokens (PATs) or SSH keys, for all Git operations to increase security. Here's a step-by-step guide to resolve this issue:

### Use a Personal Access Token (PAT) for HTTPS Git Operations

Instead of using a password, you will need to create a Personal Access Token (PAT) on GitHub to use as a substitute for her GitHub password.

### Steps to Create a PAT:

1. **Log into GitHub account:** Go to the GitHub website and log in.
2. **Access Settings:** Click on your profile icon in the top-right corner, then click "Settings."
3. **Developer settings:** Scroll down to the bottom of the sidebar and click on "Developer settings."
4. **Personal access tokens:** In the left sidebar, click on "Personal access tokens."
5. **Generate new token:** Click on the "Generate new token" button.
6. **Token description and expiration:** Give the token a descriptive name and optionally set an expiration date.
7. **Select scopes:** Choose the scopes or permissions you want to grant this token. For basic repository operations, select repo.
8. **Generate token:** Click the "Generate token" button at the bottom.

After creating the token, make sure to copy it and store it securely; GitHub won't show it again.

### Using the PAT

Try pushing your code again.

```bash
git push -u origin main
```

You will be prompted to enter your GitHub username and password.

Use the username as usual, but instead of the password, use the PAT created.

### Configure Git to Remember the PAT

To avoid entering the PAT each time, you can use the Git credential helper to store the PAT. Here's how to do it:

```bash
git config --global credential.helper store
```

After running this command, the next time Git prompts for a username and password, you should enter your GitHub username and the PAT as the password. Git will store these credentials, so they won't have to enter them for future operations.

Refresh your browser and you should see your code in the repository on GitHub.

# Using Git in the future

When you make changes to your code, you can use the following commands to track and commit your changes:

```bash
git add .
git commit -m "commit message"
git push
```

Translation: "Add all the changes to the staging area, commit the changes with a message, and push the changes to the remote repository."

You don't need to run `git init` again. You only need to run `git init` once, when you create a new repository.

### .gitignore file

The `.gitignore` file is used to specify files and directories that should be ignored by Git. This is useful for excluding files that are generated by the development process, such as log files, build artifacts, and configuration files.

Create a file in the root of your project called `.gitignore`. Add the following content to the file:

```plaintext
node_modules
```

### Re-commit your code with the .gitignore file

After creating the `.gitignore` file, you need to re-commit your code to the repository. Run the following commands in the terminal:

```bash
git add .
git commit -m "add .gitignore file"
git push
```

### Conclusion

In this video series, we covered the importance of a development environment, the importance of a formatter, the importance of a linter, and the importance of a version control system. We also installed Prettier, ESLint, and Git, and we utilized Git and GitHub to store and share code.
