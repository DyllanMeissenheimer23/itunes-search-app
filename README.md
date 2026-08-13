# 🎵 iTunes Search Application

A full-stack web application built with React and Express.js that allows users to search the Apple iTunes catalogue across multiple media types and manage a temporary favourites list.

The project demonstrates frontend and backend integration, REST API communication, JWT-based request authentication, environment-based configuration, responsive UI development, and state management using React.

---

## 📌 Overview

The iTunes Search Application provides a simple interface for searching the Apple iTunes catalogue for music, movies, podcasts, audiobooks, TV shows, software, eBooks, and other supported media types.

The application uses a React frontend and an Express.js backend. Search requests are sent from the frontend to the Express API, where the request is authenticated using a JSON Web Token before the backend retrieves results from Apple's iTunes Search API.

Search results are displayed in a responsive card-based interface, allowing users to view media information and add or remove items from a temporary favourites list.

---

## ✨ Features

- Search the Apple iTunes catalogue
- Search across multiple media types
- Display search results in a responsive interface
- Display album or collection artwork
- Display collection or track name
- Display artist name
- Display media type
- Display release date
- Add items to a temporary favourites list
- Remove items from favourites
- Prevent duplicate favourites
- Display the number of search results
- Display the number of saved favourites
- Loading state while searching
- Error handling for unsuccessful requests
- Responsive layout using React Bootstrap
- Express backend API
- JWT-protected search endpoint
- Environment-based configuration using dotenv

---

## 🛠️ Technologies Used

### Frontend

- React
- JavaScript (ES6)
- React Bootstrap
- Bootstrap 5
- CSS

### Backend

- Node.js
- Express.js
- JSON Web Token (JWT)
- CORS
- dotenv

### External API

- Apple iTunes Search API

### Development Tools

- Git
- GitHub
- npm
- Visual Studio Code

---

## 🔐 Authentication & Request Security

The application uses JSON Web Tokens (JWT) to authenticate search requests between the React frontend and Express backend.

The request flow is:

1. The React application requests a JWT from the Express backend.
2. The backend generates a short-lived token.
3. The frontend includes the token in the Authorization header.
4. Express middleware verifies the token.
5. If the token is valid, the search request continues.
6. The backend retrieves the requested data from Apple's iTunes Search API.

This demonstrates how middleware can be used to protect API routes in an Express application.

> Note: The JWT implementation in this project is intended to demonstrate API request authentication and is not a full user authentication system.

---

## 🔒 Environment Configuration

The backend uses environment variables to store configuration values that should not be hard-coded directly into the application.

The dotenv package is used to load environment variables from a local .env file.

Create a .env file inside the server directory.

Add your JWT secret:

JWT_SECRET=your-secret-key

The .env file is used locally and should not be committed to GitHub.

Make sure .env is included in .gitignore.

---

## 🔗 API Integration

The React frontend does not communicate directly with Apple's iTunes Search API.

Instead, requests follow this architecture:

User
  ↓
React Frontend
  ↓
Express Backend
  ↓
JWT Verification
  ↓
Apple iTunes Search API
  ↓
Express Backend
  ↓
React Frontend
  ↓
Search Results

The Express backend acts as an intermediary between the frontend and the external API.

The backend accepts a search term and selected media type, sends the request to Apple's iTunes Search API, and returns the search results to the React application.

---

## 🧠 Application State

The React application manages several pieces of state using React's useState hook:

- Search results
- Favourites
- Loading status
- Error messages

Favourites are stored in the application's React state and are therefore temporary. They are not currently stored in a database or browser storage.

---

## 🏗️ Project Structure

itunes-search-app/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── SearchBar.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json
│
├── server/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   └── searchRoutes.js
│   ├── utils/
│   │   └── itunesApi.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md

---

## ⚙️ Installation

### 1. Clone the repository

git clone https://github.com/DyllanMeissenheimer23/itunes-search-app.git

Navigate into the project:

cd itunes-search-app

### 2. Install backend dependencies

Navigate to the server directory:

cd server

Install the required packages:

npm install

### 3. Configure environment variables

Inside the server directory, create a file named .env.

Add your JWT secret:

JWT_SECRET=your-secret-key

The .env file is used locally and should not be committed to GitHub.

Make sure .env is included in .gitignore.

### 4. Install frontend dependencies

Open a second terminal window.

Navigate to the client directory:

cd client

Install the required packages:

npm install

---

## 🚀 Running the Application

The frontend and backend need to run separately.

### Start the Backend

From the server directory:

npm start

The Express server runs on:

http://localhost:3001

### Start the Frontend

From the client directory:

npm start

The React application runs on:

http://localhost:3000

Open the frontend URL in your browser to use the application.

---

## 🔄 Application Workflow

1. User enters a search term
        ↓
2. User selects a media type
        ↓
3. React requests a JWT from Express
        ↓
4. React sends the search request with the JWT
        ↓
5. Express verifies the JWT
        ↓
6. Express requests data from the iTunes Search API
        ↓
7. Results are returned to React
        ↓
8. Results are displayed to the user
        ↓
9. User can add or remove favourites

---

## 📱 Responsive Design

The application uses React Bootstrap and Bootstrap's responsive grid system to provide a layout that adapts across different screen sizes.

Search results and favourites are presented in separate responsive panels, with media cards adjusting according to the available screen width.

The interface also includes responsive styling for smaller screens.

---

## 🎯 Supported Media Types

The application supports searches across the following media types:

- All
- Music
- Movie
- Podcast
- Audiobook
- TV Show
- Short Film
- Software
- eBook

---

## 🔌 Backend API Routes

The Express backend exposes the following routes.

### Generate JWT

GET /api/token

Generates a short-lived JWT used to authenticate search requests.

### Search iTunes

GET /api/search

Requires a valid JWT in the Authorization header.

Example:

GET /api/search?term=Coldplay&media=music

Expected authorization format:

Authorization: Bearer <token>

---

## 🧪 Error Handling

The application includes basic error handling for common request problems.

Examples include:

- Missing search terms
- Missing authentication tokens
- Invalid or expired JWTs
- Failed iTunes API requests
- Unexpected backend errors

The frontend displays appropriate error messages when requests cannot be completed successfully.

---

## 🔮 Future Improvements

Potential improvements include:

- User registration and login
- Persistent favourites using a database
- Search history
- Pagination
- Advanced filtering and sorting
- Persistent favourites using browser storage
- Dark mode
- Improved API error handling

---

## 👨‍💻 Author

Dyllan Meissenheimer

Postgraduate Diploma in Information Technology Management

Aspiring Full Stack Web Developer

---

## 📚 Project Context

This project was developed as part of the HyperionDev Full Stack Web Development Bootcamp and represents my final full-stack capstone project.

It demonstrates practical experience working with:

- React
- JavaScript
- Node.js
- Express.js
- REST APIs
- JWT authentication
- dotenv and environment variables
- Responsive web development
- Frontend/backend integration
- Git and GitHub
- npm
