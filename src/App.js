import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Navbar";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=19736e07";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  return (
    <div className="app bg-light">
      <NavBar />
      <Container>
        <Row className="justify-content-center">
          <Col xs="8" md="6">
            <Form.Group className="mt-3 mb-4">
              <Form.Control
                placeholder="Search for a movie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs="2">
            <Button
              className="my-3"
              variant="dark"
              onClick={() => searchMovies(searchTerm)}>
              Search
            </Button>
          </Col>
        </Row>
        {movies?.length > 0 ? (
          <Row>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </Row>
        ) : (
          <Alert variant="danger">No movies found!</Alert>
        )}
      </Container>
    </div>
  );
};

export default App;
