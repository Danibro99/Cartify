import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-body-tertiary py-5 mt-5 border-top">
      <Container>
        <Row className="gy-4">

          <Col md={4}>
            <h4 className="fw-bold">
              <FontAwesomeIcon icon={faTruckFast} /> Daily cart
            </h4>

            <p className="text-secondary">
              Designed and built with all the love in the world by the Luminar
              team with the help of our contributors.
            </p>

            <p className="text-secondary">Code licensed Luminar, docs CC BY 3.0.</p>
            <p className="text-secondary">Currently v5.3.2.</p>
          </Col>

          
          <Col md={2}>
            <h5 className="fw-semibold">Links</h5>
            <p className="text-dark">Landing Page</p>
            <p className="text-dark">Home Page</p>
            <p className="text-dark">Watch History Page</p>
          </Col>


          <Col md={2}>
            <h5 className="fw-semibold">Guides</h5>
            <p className="text-dark">React</p>
            <p className="text-dark">React Bootstrap</p>
            <p className="text-dark">React Router</p>
          </Col>

          
          <Col md={4}>
            <h5 className="fw-semibold">Contact Us</h5>

            <InputGroup style={{ maxWidth: "260px" }}>
              <Form.Control
                type="email"
                placeholder="Enter your email here"
                className="border-secondary"
              />

              <InputGroup.Text className="border-secondary bg-white">
                <FontAwesomeIcon icon={faArrowRight} className="text-secondary" />
              </InputGroup.Text>
            </InputGroup>

            
            <div className="d-flex gap-3 mt-3">
              <FontAwesomeIcon icon={faTwitter} size="lg" className="text-secondary" />
              <FontAwesomeIcon icon={faInstagram} size="lg" className="text-secondary" />
              <FontAwesomeIcon icon={faFacebook} size="lg" className="text-secondary" />
              <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-secondary" />
              <FontAwesomeIcon icon={faGithub} size="lg" className="text-secondary" />
            </div>
          </Col>
        </Row>

        <p className="text-center text-secondary mt-4">
          Copyright © July 2024 Batch, Daily Cart. Built with React Redux.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
