// Import required packages
const express = require("express");
const jwt = require("jsonwebtoken");

// Import custom modules
const { searchITunes } = require("../utils/itunesApi");
const {
    authenticateToken,
    JWT_SECRET
} = require("../middleware/authMiddleware");

// Create a new router
const router = express.Router();

/**
 * Route to generate a JWT.
 *
 * This assignment does not require user authentication,
 * so a simple token is generated for demonstration purposes.
 */
router.get("/token", (req, res) => {
    const token = jwt.sign(
        {
            app: "itunes-capstone"
        },
        JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    res.status(200).json({ token });
});

/**
 * Secure search endpoint.
 *
 * Example:
 * GET /api/search?term=Coldplay&media=music
 */
router.get("/search", authenticateToken, async (req, res) => {
    try {
        // Read the query parameters
        const { term, media } = req.query;

        // Ensure the user entered a search term
        if (!term) {
            return res.status(400).json({
                error: "A search term is required."
            });
        }

        // Search the iTunes API
        const results = await searchITunes(term, media);

        // Return the results
        res.status(200).json(results);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "An error occurred while searching iTunes."
        });
    }
});

// Export the router
module.exports = router;