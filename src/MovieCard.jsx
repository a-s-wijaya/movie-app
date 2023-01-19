import React from "react";
import { Col, Card, Badge } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Col xs={12} md={4} lg={3} className="mb-4">
      <Card className="border-0 shadow-lg">
        <Card.Img
          variant="top"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
          className="rounded-top"
        />
        <Card.Title className="px-3 pt-2">{movie.Title}</Card.Title>
        <Col className="px-3 mb-4">
          <Badge bg="dark">{movie.Year}</Badge>
          <Badge
            bg={movie.Type === "movie" ? "danger" : "warning"}
            className="ms-1">
            {movie.Type}
          </Badge>
        </Col>
      </Card>
    </Col>
  );
};

export default MovieCard;
