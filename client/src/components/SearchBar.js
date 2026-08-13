import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

/**
 * SearchBar component.
 *
 * Allows the user to:
 * - Enter a search term.
 * - Select a media type.
 * - Submit the search.
 */
function SearchBar({ onSearch }) {
    // Store the search term
    const [searchTerm, setSearchTerm] = useState("");

    // Store the selected media type
    const [mediaType, setMediaType] = useState("all");

    /**
     * Handles form submission.
     */
    function handleSubmit(event) {
        event.preventDefault();

        // Prevent empty searches
        if (!searchTerm.trim()) {
            return;
        }

        onSearch(searchTerm, mediaType);
    }

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <Row className="g-3">

                <Col md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Search iTunes..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                    />
                </Col>

                <Col md={3}>
                    <Form.Select
                        value={mediaType}
                        onChange={(event) =>
                            setMediaType(event.target.value)
                        }
                    >
                        <option value="all">All</option>
                        <option value="movie">Movie</option>
                        <option value="podcast">Podcast</option>
                        <option value="music">Music</option>
                        <option value="audiobook">Audiobook</option>
                        <option value="shortFilm">Short Film</option>
                        <option value="tvShow">TV Show</option>
                        <option value="software">Software</option>
                        <option value="ebook">eBook</option>
                    </Form.Select>
                </Col>

                <Col md={3}>
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-100"
                    >
                        Search
                    </Button>
                </Col>

            </Row>
        </Form>
    );
}

export default SearchBar;