import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./ShowList.css";

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="all-show">
      <h3 className="mb-5 text-center">All TV Shows</h3>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
          {shows.map((show) => (
            <Col
              key={show.show.id}
              xl={3}
              lg={4}
              md={6}
              sm={12}
              className="mb-3"
            >
              <Card className="p-2">
                <Card.Img
                  variant="top"
                  style={{
                    border: "1px solid gainsboro",
                    width: "100%",
                    
                  }}
                  className="rounded card-img"
                  src={show.show.image?.medium}
                  alt={show.show.name}
                />
                <Card.Body className="text-center">
                  <Card.Title className="fs-4">{show.show.name}</Card.Title>
                  <Card.Text className="fs-5">
                    Language: {show.show.language}
                  </Card.Text>
                  <Link to={`/show/${show.show.id}`}>
                    <Button variant="primary">Show Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ShowList;
