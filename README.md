# 🍽️ Cookify – Food Recipe Discovery Web Application

Cookify is a modern food recipe discovery web application that allows users to search for recipes and view complete cooking details in an interactive and user-friendly interface. The application helps users explore recipes, understand ingredients, follow step-by-step cooking instructions, check preparation time, dietary preferences, and view the cost per serving - all without reloading the page.

Cookify is built as a **Single Page Application (SPA)** using React and demonstrates real-world frontend development concepts such as API integration, component-based architecture, state management, and responsive UI design.

---

## 🚀 Features

- Search recipes by food name
- View detailed recipe information:
  - Ingredients with images
  - Cooking instructions
  - Preparation time
  - Vegetarian / Vegan / Non-Vegetarian classification
  - Cost per serving
- Smooth single-page experience without page reloads
- Animated navigation bar with rotating food GIFs
- Animated application title for branding
- Graceful error handling for API limits and network issues
- Clean and responsive user interface

---

## 🛠️ Technologies & Tools Used:

### Frontend Technologies
- **React.js**  
  Used to build the user interface using reusable and modular components.

- **JavaScript (ES6+)**  
  Used for application logic, API calls, state handling, and dynamic rendering.

- **HTML5**  
  Used to structure the web application.

- **CSS Modules**  
  Used for scoped and maintainable styling, preventing global CSS conflicts.

---

### React Concepts Utilized
- **useState** – Manages component state such as search queries, recipe data, and animations  
- **useEffect** – Handles API calls, side effects, and timed animations  
- **Conditional Rendering** – Displays loading states, errors, and data dynamically  

---

### API Integration
- **Spoonacular Food API**  
  Used to fetch real-time recipe data including recipe lists, ingredients, instructions, and pricing information.

---

### Development Tools
- **Create React App** – Project scaffolding and build setup  
- **npm** – Dependency management  
- **Git & GitHub** – Version control and source code hosting  
- **Visual Studio Code** – Code editor used for development  

---

## 🧠 How the Application Works

1. The user enters a recipe name in the search bar.
2. The application sends a request to the external food recipe API.
3. Matching recipes are displayed dynamically.
4. Selecting a recipe shows detailed cooking information.
5. The interface updates instantly without refreshing the page.

---

## 📦 Project Type

- **Single Page Web Application (SPA)**

---

## 🎯 Use Cases

- Discover new food recipes
- Learn cooking steps and ingredients easily
- Plan meals efficiently
- Demonstrate modern React and frontend development skills

---

## 📌 Future Enhancements

- User authentication and favorite recipes
- Advanced filtering (diet, calories, cuisine)
- Pagination and caching for better performance
- Progressive Web App (PWA) support
- Mobile version using React Native

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and medium deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
