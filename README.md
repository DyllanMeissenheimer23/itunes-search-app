# 🎵 iTunes Search Application

A full-stack web application built with React and Express.js that allows users to search the Apple iTunes catalogue across multiple media types and manage a temporary favourites list.

The project demonstrates frontend and backend integration, REST API communication, JWT-based request authentication, responsive UI development, and state management using React.

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
- Display:
  - Album or collection artwork
  - Collection or track name
  - Artist name
  - Media type
  - Release date
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

### External API

- Apple iTunes Search API

---

## 🔐 Authentication & Request Security

The application uses JSON Web Tokens (JWT) to authenticate search requests between the React frontend and Express backend.

The request flow is:

1. The React application requests a JWT from the Express backend.
2. The backend generates a short-lived token.
3. The frontend includes the token in the `Authorization` header.
4. The Express middleware verifies the token.
5. If the token is valid, the search request continues.
6. The backend retrieves the requested data from the Apple iTunes Search API.

This demonstrates how middleware can be used to protect API routes in an Express application.

> **Note:** The JWT implementation in this project is intended to demonstrate API request authentication and is not a full user authentication system.

---

## 🔗 API Integration

The React frontend does not communicate directly with Apple's iTunes Search API.

Instead, requests follow this architecture:

```text
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
