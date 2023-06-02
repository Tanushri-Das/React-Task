
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaClock, FaCalendar } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import { Card, Button, Modal, Form, Row, Col } from "react-bootstrap";
import "./ShowDetails.css";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    movieName: "",
    category: "",
    scheduleDay: "",
    scheduleTime: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  
  const handleBookTicket = () => {
    const { name: movieName, genres, schedule } = show;
    const { days, time } = schedule;

    setFormData({
      movieName,
      category: genres.join(", "),
      scheduleDay: days.join(", "),
      scheduleTime: time,
    });

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    handleCloseModal();
  };

  if (!show) {
    return (
      <div className="details">
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }  

  return (
    <div className="details">
      <Row>
        <Col lg={8} md={12} className="mx-auto">
          <div>
            <h3 className="text-center mb-3">{show.name}</h3>
            <Card>
              <Card.Body>
                <Card.Text
                  dangerouslySetInnerHTML={{ __html: show.summary }}
                ></Card.Text>
                <Row className="mb-4 mt-2">
                  <Col sm={6}>
                    <h5>Schedule Time</h5>
                    <div className="d-flex">
                      <FaClock className="mt-1 me-1" />
                      <p>{show.schedule.time}</p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <h5>Schedule Days</h5>
                    <div className="d-flex">
                      <FaCalendar className="mt-1 me-1" />
                      <p>{show.schedule.days.join(", ")}</p>
                    </div>
                  </Col>
                </Row>
                <div className="book-ticket">
                  <Button variant="primary" onClick={handleBookTicket}>
                    Book Ticket
                  </Button>
                </div>
              </Card.Body>
            </Card>

            {/* Ticket Booking Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
              <Modal.Header closeButton>
                <Modal.Title>Book Ticket</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formMovieName">
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="movieName"
                      value={formData.movieName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formCategory" className="mt-2">
                    <Form.Label>Movie Category</Form.Label>
                    <Form.Control
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formScheduleDay" className="mt-2">
                    <Form.Label>Schedule Day</Form.Label>
                    <Form.Control
                      type="text"
                      name="scheduleDay"
                      value={formData.scheduleDay}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formScheduleTime"
                    className="mt-2 mb-5"
                  >
                    <Form.Label>Schedule Time</Form.Label>
                    <Form.Control
                      type="text"
                      name="scheduleTime"
                      value={formData.scheduleTime}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="text-center"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShowDetails;
