# 🎵 iTunes Search Application

## Overview

The iTunes Search Application is a full-stack web application developed using React and Express.js. It allows users to search the Apple iTunes catalogue for various types of media, including music, movies, podcasts, audiobooks, TV shows, software, eBooks, and short films.

The application uses JWT (JSON Web Token) authentication to secure communication between the React frontend and Express backend before retrieving data from the Apple iTunes Search API.

---

## Purpose

The purpose of this application is to demonstrate the development of a secure full-stack web application using React and Express.js. Users can search the Apple iTunes catalogue by media type, view search results, and manage a temporary favourites list. The application showcases REST API integration, JWT authentication, responsive interface design, and modern JavaScript development practices.

## Features

- Search the Apple iTunes catalogue
- Filter searches by media type
- Secure backend API using JWT authentication
- Display search results including:
  - Album artwork
  - Album name
  - Artist name
  - Release date
- Add items to a favourites list
- Remove items from the favourites list
- Responsive user interface built with React Bootstrap
- Scrollable search results and favourites panels

---

## Technologies Used

### Frontend

- React
- React Bootstrap
- Bootstrap 5
- JavaScript (ES6)

### Backend

- Node.js
- Express.js
- JSON Web Token (JWT)
- CORS

### External API

- Apple iTunes Search API

---

## Project Structure

```
iTunes-Search-App/
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
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project directory.

---

### Install backend dependencies

```bash
cd server
npm install
```

---

### Install frontend dependencies

Open a second terminal window.

```bash
cd client
npm install
```

---

## Running the Application

### Start the backend

```bash
cd server
npm start
```

The backend will run on:

```
http://localhost:3001
```

---

### Start the frontend

Open another terminal window.

```bash
cd client
npm start
```

The frontend will run on:

```
http://localhost:3000
```

---

## Application Workflow

1. The user enters a search term.
2. The user selects a media type.
3. The React frontend requests data from the Express backend.
4. The backend validates the JWT.
5. The backend retrieves data from the Apple iTunes Search API.
6. Search results are displayed in the application.
7. Users can add and remove items from their favourites list during the current session.

---

## Supported Media Types

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

## Future Improvements

Possible enhancements include:

- User authentication
- Persistent favourites using a database
- Search history
- Pagination
- Advanced filtering and sorting
- Dark mode

---

## Author

**Dyllan Meissenheimer**

Postgraduate Diploma in Information Technology Management

Aspiring Full Stack Web Developer

---

## Acknowledgements

- HyperionDev
- Apple iTunes Search API
- React
- Express.js
- Bootstrap
- Node.js