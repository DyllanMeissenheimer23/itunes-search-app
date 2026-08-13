/**
 * Retrieves search results from the iTunes Search API.
 *
 * @param {string} searchTerm The user's search text.
 * @param {string} mediaType The selected media type.
 * @returns {Promise<Array>} A list of search results.
 */
async function searchITunes(searchTerm, mediaType) {
    // Base URL for the iTunes Search API
    let url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&limit=25`;

    // Only include the media parameter if a specific media type was selected.
    // Selecting "all" returns all available media types.
    if (mediaType && mediaType.toLowerCase() !== "all") {
        url += `&media=${encodeURIComponent(mediaType)}`;
    }

    // Send the request to Apple's API
    const response = await fetch(url);

    // Throw an error if the request was unsuccessful
    if (!response.ok) {
        throw new Error("Unable to retrieve data from the iTunes API.");
    }

    // Convert the response into JSON
    const data = await response.json();

    // Return only the search results
    return data.results;
}

// Export the helper function
module.exports = {
    searchITunes
};