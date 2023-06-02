import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube} from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-light py-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className='fs-5'>Copyright © {date} - All right reserved by Tanushri Das</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
          <div>
            <a className='me-3'
              href="https://www.linkedin.com/in/tanushri-das-06a520194/"
              target="_blank"
            >
              <FaLinkedin
                className="fs-2 linkedin"
              ></FaLinkedin>
            </a>
            <a className='me-3' href="https://www.facebook.com/tanushri.das01?mibextid=ZbWKwL" target="_blank">
              <FaFacebook
                className="fs-2 facebook"
              ></FaFacebook>
            </a>
            <a
              href="https://www.youtube.com/watch?v=ZvggB9FT4gM&ab_channel=MuseumofFineArts%2CBoston"
              target="_blank"
            >
              <FaYoutube
                className="fs-2 utube"
              ></FaYoutube>
            </a>
            
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
