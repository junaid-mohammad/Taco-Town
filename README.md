# Taco Town 🌮

This repository contains the source code for **Taco Town**, a playful and interactive recipe app that helps users select their favorite taco and view its detailed ingredients. The project is built using **Node.js**, **Express**, and **EJS templating**, with a focus on dynamic content rendering, JSON data handling, and modern responsive web design.

---

## 🖥️ Live Website

You can access the live version of Taco Town here:  
👉 **[Taco Town](https://taco-town-junaid.azurewebsites.net)** (Hosted on Microsoft Azure — _link will go here when deployed_)

Link to **[Azure Project](https://dev.azure.com/Junaid-Arif/Taco%20Town)**

---

## 🎯 Purpose

**Taco Town** was created as part of my journey to strengthen my web development skills while also learning how to:

- Work with **private APIs and JSON data structures**.
- Parse and stringify JSON using `JSON.parse()` and `JSON.stringify()`.
- Handle dynamic routing and user input using **Express**.
- Dynamically render HTML content using **EJS** templating.
- Improve **frontend design** with responsive layouts and modern CSS techniques.
- Deploy a Node.js app using **Microsoft Azure**.

This project serves both as a creative exercise in designing a fun, user-friendly food app and as a technical learning experience in both frontend and backend web development concepts.

---

## 🛠️ Features

- **Home Page with Emoji Buttons**: Users can choose between chicken, beef, or fish tacos by clicking playful emoji buttons.
- **Dynamic Recipe Rendering**: Based on the user’s selection, the app dynamically retrieves the taco recipe data from a **private JSON API** and renders it using **EJS**.
- **JSON Data Parsing**: Recipes are stored in JSON format and parsed into JavaScript objects for dynamic use.
- **Clean, Responsive Design**: The app features a custom patterned background, centered content, and responsive layout that adapts gracefully to both desktop and mobile screens.
- **Navigation Bar**: Includes a home button to allow users to reset their selection.
- **Footer with Dynamic Year**: A personalized footer that automatically updates the copyright year.

---

## 💻 Technologies Used

- **Node.js**: Server-side runtime environment.
- **Express**: Web application framework for Node.js.
- **EJS (Embedded JavaScript Templates)**: Used for dynamic page rendering.
- **Body-Parser**: Middleware to parse incoming form data.
- **HTML5 / CSS3**: Frontend structure and styling.
- **JSON**: Used as a private API recipe.json to store and retrieve recipe data.
- **Microsoft Azure App Service**: Platform for deploying and hosting the app.

---

## 🧩 What I Learned

- **Working with JSON APIs**: Created a private JSON-based recipe dataset and learned how to access and manipulate the data within the app.
- **JSON.parse() and JSON.stringify()**: Practiced converting JSON data to JavaScript objects and vice versa.
- **Dynamic Content Rendering with EJS**: Learned to pass server-side data into EJS templates for user-friendly, dynamic webpage updates.
- **Routing and Form Handling with Express**: Built GET and POST routes to handle user input and display results.
- **Responsive Design Principles**: Created a clean, mobile-friendly layout using modern CSS techniques including flexbox, media queries, and responsive units.
- **Azure Deployment Workflow**: Understood the steps for deploying an app to **Microsoft Azure App Service**, including linking GitHub for CI/CD.

---

## 🚀 Deployment on Azure

The Taco Town app is automatically deployed on **Microsoft Azure App Service** using **Continuous Deployment (CI/CD)** from GitHub.

### 🛠 Deployment Workflow:

1. **App Service Creation**: Set up a new App Service on Azure.
2. **Connected to GitHub**:
   - Linked the App Service to the Taco Town GitHub repository through Azure's Deployment Center.
   - Configured the main branch (`main`) for automatic deployment.
3. **Push to Deploy**:
   - Whenever new code is pushed to the `main` branch, Azure automatically:
     - Pulls the latest commit.
     - Rebuilds the app.
     - Deploys the updated version to the live website.

This workflow ensures that updates are immediately reflected on the live site without any manual intervention.

---

## 🤝 Contribution

While this project is primarily for learning and portfolio purposes, feel free to fork the repository and submit a pull request if you'd like to contribute ideas for new features or improvements!

---

## 📄 License

This project is open-source and available for anyone to use, modify, and build upon for their own learning or projects.
