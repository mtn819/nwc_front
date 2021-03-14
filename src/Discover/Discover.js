import React, { useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import TopBrief from "./TopBrief";
import SearchBar from './SearchBar';
import CaretOption from './CaretOption';
import StoryBoard from './StoryBoard';

import Splitta from './Splitta';

function Discover(props) {
  const imgUrls = [
    "https://washington.org/sites/default/files/ckeditor-images/shall-not-be-denied-banner.jpg",
    "https://s.yimg.com/aah/yhst-94666432756749/fight-for-women-s-rights-wreath-ornament-by-christopher-radko-4.png",
    "https://pbs.twimg.com/media/DikukLKW0AEWOwA.jpg",
  ]

  return (
    <Container className="bg-light pl-md-5 pr-md-5" fluid>

      <Row>
        <Col className="mt-2">
          <TopBrief/>
        </Col>
      </Row>

      <Row>
        <Col className="mb-2 mb-md-0" xs={12} md={6}>
          <SearchBar/>
        </Col>
        <Col xs={6} md={3}>
          <Button className="w-100">Add Story</Button>
        </Col>
        <Col xs={6} md={3}>
          <Button className="w-100">View Maps</Button>
        </Col>
      </Row>

      <Splitta/>

      <Row>
        <Col sm={2}></Col>
        <CaretOption
          title="Name"/>
        <CaretOption
          title="State/Territory"/>
        <CaretOption
          title="Role"/>
      </Row>

      <Splitta/>

      <Row className="pb-2">
        <StoryBoard/>
      </Row>
      
    </Container>
  );
}

export default Discover;