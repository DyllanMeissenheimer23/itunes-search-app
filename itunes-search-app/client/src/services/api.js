/**
 * Base URL for the Express backend.
 */
const API_URL = "http://localhost:3001/api";

/**
 * Retrieves a JWT from the backend.
 *
 * @returns {Promise<string>}
 */
async function getToken() {
    const response = await fetch(`${API_URL}/token`);

    if (!response.ok) {
        throw new Error("Unable to retrieve JWT token.");
    }

    const data = await response.json();

    return data.token;
}

/**
 * Searches the iTunes API through the Express backend.
 *
 * @param {string} searchTerm
 * @param {string} mediaType
 * @returns {Promise<Array>}
 */
async function searchITunes(searchTerm, mediaType) {
    // Retrieve a valid JWT
    const token = await getToken();

    // Send the search request
    const response = await fetch(
        `${API_URL}/search?term=${encodeURIComponent(searchTerm)}&media=${encodeURIComponent(mediaType)}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (!response.ok) {
        throw new Error("Search request failed.");
    }

    return response.json();
}

export { searchITunes };