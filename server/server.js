// Load environment variables
require("dotenv").config();

// Import required packages
const express = require("express");
const cors = require("cors");

// Import application routes
const searchRoutes = require("./routes/searchRoutes");

// Create an Express application
const app = express();

// Define the port the server will run on
const PORT = 3001;

// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Register routes
app.use("/api", searchRoutes);

// Default route
app.get("/", (req, res) => {
    res.json({
        message: "Capstone API is running successfully."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
