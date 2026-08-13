// Import React libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Import Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import application styles
import "./index.css";

// Import the main application component
import App from "./App";

// Create the React root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);