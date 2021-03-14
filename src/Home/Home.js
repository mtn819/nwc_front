import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Banner from './Banner';
import Map from './Map';
import About from './About';
import Explore from './Explore';

function Home(props) {
  return (
    <Container
      className="pt-2 pb-2 bg-light"
      fluid
    >
      <Row>
        <Col className="mt-2 mb-2"><Banner/></Col>
      </Row>
      <Row>
        <Col className="mt-2 mb-2" xs={12} md={6}><Map/></Col>
        <Col className="mt-2 mb-2" xs={12} md={6}><About/></Col>
      </Row>
      <Row>
        <Col className="mt-2 mb-2"><Explore/></Col>
      </Row>
    </Container>
  );
}

export default Home;