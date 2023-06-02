import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const Error = () => {
  return (
    <Container className="mt-5 d-flex align-items-center justify-content-center">
    <Row>
      <div className="col-lg-6">
        <Image src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" fluid />
      </div>
    </Row>
  </Container>
  )
}

export default Error