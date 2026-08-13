// Import the JSON Web Token package
const jwt = require("jsonwebtoken");

// Secret key used to verify JWTs.
// In a production application, this should be stored in an environment variable.
const JWT_SECRET = "capstone-secret-key";

/**
 * Middleware to verify that a valid JWT is included
 * in the Authorization header of incoming requests.
 *
 * Expected header format:
 * Authorization: Bearer <token>
 */
function authenticateToken(req, res, next) {
    // Retrieve the Authorization header
    const authHeader = req.headers.authorization;

    // Check whether the header exists and starts with "Bearer "
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            error: "Access denied. No token provided."
        });
    }

    // Extract the token from the Authorization header
    const token = authHeader.split(" ")[1];

    // Verify the token
    jwt.verify(token, JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(403).json({
                error: "Invalid or expired token."
            });
        }

        // Store the decoded payload for later use if needed
        req.user = decoded;

        // Continue to the next middleware or route
        next();
    });
}

// Export the middleware and secret key
module.exports = {
    authenticateToken,
    JWT_SECRET
};