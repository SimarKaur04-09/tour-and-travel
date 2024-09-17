import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import '../styles/About.css';
import johnDoeImg from '../assets/images/profile.jpg'; // Replace with actual paths
import janeSmithImg from '../assets/images/images (2).jpg';
import emilyJohnsonImg from '../assets/images/im.jpg';
import aboutImage  from '../assets/images/download.jpg';
import TO1 from '../assets/images/to1.jpg';
import TO2 from '../assets/images/to2.jpg';
import TO3 from '../assets/images/to3.jpg';
import TO4 from '../assets/images/to4.jpg';


const About = () => {
  return (
    <section className="about-section">
     <Container>
        <Row className="mb-5">
          <Col>
            <img src={aboutImage} alt="About Us" className="about-image" /> {/* Add the image */}
            
          </Col>
          <Col>
            <img src={TO4} alt="About Us" className="about-image" /> {/* Add the image */}
            
          </Col>
          <Col>
            <img src={TO2} alt="About Us" className="about-image" /> {/* Add the image */}
            
          </Col>
          <Col>
            <img src={TO3} alt="About Us" className="about-image" /> {/* Add the image */}
            
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Card className="about-card">
              <CardBody>
                <CardTitle tag="h2">About Us</CardTitle>
                <CardText>
                  Discover the world with us. Our travel agency is dedicated to offering the best experiences and unforgettable memories.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Card className="about-card">
              <CardBody>
                <CardTitle tag="h2">Our Story</CardTitle>
                <CardText>
                  We started our journey in 2010 with a vision to make travel accessible and enjoyable for everyone. Our team is composed of passionate travel experts who work tirelessly to curate the best tours and travel packages for our clients.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="about-card">
              <CardBody>
                <CardTitle tag="h2">Our Mission</CardTitle>
                <CardText>
                  Our mission is to provide unparalleled travel experiences that create lasting memories. We aim to offer personalized services and expert guidance to help you explore the world in a way that is uniquely yours.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5"> {/* Add margin top class */}

          <Col>
            <h2 className="text-center">Meet Our Team</h2>
            <Row className="justify-content-center">
              <Col md={4} className="mb-4">
                <div className="team-member">
                  <img src={johnDoeImg} alt="John Doe" />
                  <h4>Simarpreet Kaur</h4>
                  <p>CEO & Founder</p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="team-member">
                  <img src={janeSmithImg} alt="Jane Smith" />
                  <h4>Jane Smith</h4>
                  <p>Head of Operations</p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="team-member">
                  <img src={emilyJohnsonImg} alt="Emily Johnson" />
                  <h4>Emily Johnson</h4>
                  <p>Travel Consultant</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default About;
