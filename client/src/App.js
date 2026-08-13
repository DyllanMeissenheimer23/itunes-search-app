// Import React
import { useState } from "react";

// Import Bootstrap components
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

// Import custom components
import SearchBar from "./components/SearchBar";

// Import API service
import { searchITunes } from "./services/api";

// Import styles
import "./App.css";

/**
 * Main application component.
 */
function App() {
    // Store search results
    const [searchResults, setSearchResults] = useState([]);

    // Store favourite items
    const [favourites, setFavourites] = useState([]);

    // Loading state
    const [loading, setLoading] = useState(false);

    // Error state
    const [error, setError] = useState("");

    /**
     * Search iTunes.
     */
    async function handleSearch(searchTerm, mediaType) {
        try {
            setLoading(true);
            setError("");

            const results = await searchITunes(searchTerm, mediaType);

            setSearchResults(results);
        } catch (err) {
            console.error(err);
            setError("Unable to retrieve search results.");
        } finally {
            setLoading(false);
        }
    }

    /**
     * Add an item to favourites.
     */
    function addFavourite(item) {
        const exists = favourites.some(
            (favourite) =>
                (favourite.trackId || favourite.collectionId) ===
                (item.trackId || item.collectionId)
        );

        if (!exists) {
            setFavourites([...favourites, item]);
        }
    }

    /**
     * Remove an item from favourites.
     */
    function removeFavourite(id) {
        setFavourites(
            favourites.filter(
                (item) =>
                    (item.trackId || item.collectionId) !== id
            )
        );
    }

    /**
     * Check if an item is already in favourites.
     */
    function isFavourite(item) {
        return favourites.some(
            (favourite) =>
                (favourite.trackId || favourite.collectionId) ===
                (item.trackId || item.collectionId)
        );
    }

    return (
        <Container fluid className="py-4">

            {/* Header */}

            <Row className="mb-4">

                <Col>

                    <h1 className="text-center fw-bold">
                        🎵 iTunes Search Application
                    </h1>

                    <p className="text-center text-muted">
                        Search for music, movies, podcasts,
                        TV shows, audiobooks and more.
                    </p>

                </Col>

            </Row>

            {/* Search */}

            <Row className="mb-4">

                <Col>

                    <SearchBar onSearch={handleSearch} />

                </Col>

            </Row>

            {/* Loading */}

            {loading && (

                <Row className="mb-3">

                    <Col className="text-center">

                        <Spinner
                            animation="border"
                            variant="primary"
                        />

                        <p className="mt-2">
                            Searching iTunes...
                        </p>

                    </Col>

                </Row>

            )}

            {/* Error */}

            {error && (

                <Row>

                    <Col>

                        <p className="text-danger text-center">
                            {error}
                        </p>

                    </Col>

                </Row>

            )}

            {/* Dashboard */}

            <Row>

                {/* Search Results */}

                <Col lg={8} className="mb-3">

                    <div className="results-panel">

                        <div className="d-flex justify-content-between align-items-center mb-3">

                            <h3>
                                Search Results
                            </h3>

                            <Badge bg="primary">
                                {searchResults.length}
                            </Badge>

                        </div>

                        <Row>

                            {!loading &&
                                searchResults.length === 0 && (

                                <Col>

                                    <div className="text-center text-muted py-5">

                                        <h5>
                                            No results found
                                        </h5>

                                        <p>
                                            Search for an artist,
                                            album, movie,
                                            podcast or audiobook.
                                        </p>

                                    </div>

                                </Col>

                            )}

                            {searchResults.map((item) => {

                                const id =
                                    item.trackId ||
                                    item.collectionId;

                                const title =
                                    item.trackName ||
                                    item.collectionName ||
                                    "Untitled";

                                return (

                                    <Col
                                        md={6}
                                        xl={4}
                                        className="mb-4"
                                        key={id}
                                    >

                                        <Card className="h-100 shadow search-card">

                                            <Card.Img
                                                variant="top"
                                                src={item.artworkUrl100}
                                                alt={title}
                                            />

                                            <Card.Body className="d-flex flex-column">

                                                <Card.Title>
                                                    {title}
                                                </Card.Title>

                                                <Badge
                                                    bg="secondary"
                                                    className="mb-3 align-self-start"
                                                >
                                                    {item.kind ||
                                                        item.collectionType ||
                                                        "Media"}
                                                </Badge>

                                                <Card.Text>

                                                    <strong>Artist</strong>

                                                    <br />

                                                    {item.artistName || "Unknown Artist"}

                                                </Card.Text>

                                                <Card.Text>

                                                    <strong>
                                                        Release Date
                                                    </strong>

                                                    <br />

                                                    {item.releaseDate
                                                        ? new Date(
                                                            item.releaseDate
                                                        ).toLocaleDateString()
                                                        : "N/A"}

                                                </Card.Text>

                                                {isFavourite(item) ? (

                                                    <Button
                                                        variant="success"
                                                        disabled
                                                        className="mt-auto"
                                                    >
                                                        ✓ Added
                                                    </Button>

                                                ) : (

                                                    <Button
                                                        className="mt-auto"
                                                        onClick={() =>
                                                            addFavourite(item)
                                                        }
                                                    >
                                                        Add to Favourites
                                                    </Button>

                                                )}

                                            </Card.Body>

                                        </Card>

                                    </Col>

                                );

                            })}

                        </Row>

                    </div>

                </Col>

                {/* Favourites */}

                <Col lg={4} className="mb-3">

                    <div className="favourites-panel">

                        <div className="d-flex justify-content-between align-items-center mb-3">

                            <h3>
                                Favourites
                            </h3>

                            <Badge bg="danger">
                                {favourites.length}
                            </Badge>

                        </div>

                        {favourites.length === 0 && (

                            <div className="text-center text-muted py-5">

                                <h5>
                                    No favourites yet
                                </h5>

                                <p>
                                    Add albums, music or podcasts
                                    to your favourites.
                                </p>

                            </div>

                        )}

                        {favourites.map((item) => {

                            const id =
                                item.trackId ||
                                item.collectionId;

                            const title =
                                item.trackName ||
                                item.collectionName ||
                                "Untitled";

                            return (

                                <Card
                                    className="mb-3 shadow-sm favourite-card"
                                    key={id}
                                >

                                    <Card.Body>

                                        <Row className="align-items-center">

                                            <Col xs={4}>

                                                <Card.Img
                                                    src={item.artworkUrl100}
                                                    alt={title}
                                                    className="rounded"
                                                />

                                            </Col>

                                            <Col xs={8}>

                                                <Card.Title
                                                    className="mb-1"
                                                    style={{
                                                        fontSize: "1rem"
                                                    }}
                                                >
                                                    {title}
                                                </Card.Title>

                                                <Badge
                                                    bg="secondary"
                                                    className="mb-2"
                                                >
                                                    {item.kind ||
                                                        item.collectionType ||
                                                        "Media"}
                                                </Badge>

                                                <Card.Text
                                                    className="mb-3"
                                                    style={{
                                                        fontSize: "0.9rem"
                                                    }}
                                                >
                                                    {item.artistName || "Unknown Artist"}
                                                </Card.Text>

                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    className="w-100"
                                                    onClick={() =>
                                                        removeFavourite(id)
                                                    }
                                                >
                                                    Remove
                                                </Button>

                                            </Col>

                                        </Row>

                                    </Card.Body>

                                </Card>

                            );

                        })}

                    </div>

                </Col>

            </Row>

            {/* Footer */}

            <footer className="text-center text-muted mt-4 py-3">

                <hr />

                <small>

                    © {new Date().getFullYear()} iTunes Search Application

                    <br />

                    Created by Dyllan Meissenheimer

                    <br />

                    Powered by the Apple iTunes Search API

                </small>

            </footer>

        </Container>
    );
}

export default App;
