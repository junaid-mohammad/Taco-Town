# Taco Town 🌮

This repository contains the source code for **Taco Town**, a playful and interactive recipe app that helps users select their favorite taco and view its detailed ingredients. The project is built using **Node.js**, **Express**, and **EJS templating**, with a focus on dynamic content rendering, JSON data handling, and modern responsive web design.

---

## 🖥️ Live Website

You can access the live version of Taco Town here:  
👉 **[Taco Town](https://taco-town-dbcefedjbge9c5hf.canadacentral-01.azurewebsites.net)** (Hosted on Microsoft Azure)

Link to **[Azure DevOps Project](https://dev.azure.com/Junaid-Arif/Taco%20Town)**

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
- **Azure Deployment Workflow**: Understood the steps for deploying an app to **Microsoft Azure App Service**, including manual and automatic deployment options.

---

## 🚀 Deployment & Workflow

The **Taco Town** app is hosted on **Microsoft Azure App Service** and deployed using **Azure DevOps**, with code managed on **GitHub**.

### 🛠 Deployment Setup

The **Taco Town** app is hosted on **Microsoft Azure App Service** with the code managed across **GitHub** and **Azure DevOps**.

### 🛠 Deployment Setup (Steps We Took)

1. **Created Azure App Service**

   - Set up a new App Service instance through the Azure portal.

2. **Created GitHub Repo**

   - Initialized a new GitHub repository (`Taco-Town`) and pushed all project files to it.

3. **Created Azure DevOps Project**

   - Created a project called _Taco Town_ in Azure DevOps.

4. **Added Azure DevOps as a Git Remote**

   - Used the following to connect local code to Azure DevOps:
     ```bash
     git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Taco%20Town/_git/Taco%20Town
     ```

5. **Push to Both Remotes**

   - Pushed the same codebase to both GitHub (`origin`) and Azure DevOps (`azure`):
     ```bash
     git push origin main
     git push azure main
     ```

6. **Configured Azure App Service to Pull from Azure DevOps Repo**

   - In the App Service Deployment Center, linked the Azure DevOps repo for Continuous Deployment (CI/CD).

7. **Deployment Trigger Testing**

   - Confirmed that pushing to Azure DevOps automatically triggers a deployment to Azure App Service.

8. **Port Configuration**
   - No custom environment variables required since the app already supports:
     ```javascript
     const port = process.env.PORT || 3000;
     ```

---

### 🔥 Deployment Workflow (Current)

Whenever you update code:

```bash
git add .
git commit -m "Your commit message"
git push origin main   # Pushes to GitHub
git push azure main    # Pushes to Azure DevOps and triggers deployment
```

## 🤝 Contribution

While this project is primarily for learning and portfolio purposes, feel free to fork the repository and submit a pull request if you'd like to contribute ideas for new features or improvements!

---

## 📄 License

This project is open-source and available for anyone to use, modify, and build upon for their own learning or projects.
