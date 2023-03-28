import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AboutImage from '../assets/177814694_292555578990670_5829279050024903265_n.jpg';

function About() {
  return (
    //code for about us section
    <section id="about"className="bg-light py-5">
      <Container>
        <Row>
          <Col lg={12} className="mx-auto text-center">
          <Image src={AboutImage} alt="Hotel Gautam Raj" fluid className="w-100" />
            <h2>About Us</h2>
            <p className="lead">Welcome to Hotel Gautam Raj, a luxurious hotel located in Simra, Nepal. Our hotel offers a perfect blend of modern amenities and traditional hospitality, making it the ideal choice for both business and leisure travelers.</p>
            <p className="lead">At Hotel Gautam Raj, we strive to provide our guests with the best possible experience. Our team of dedicated staff is always on hand to assist you with anything you need, ensuring that your stay is comfortable and enjoyable. From our well-appointed rooms to our world-class dining options, we go above and beyond to make sure that every aspect of your stay is perfect.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
