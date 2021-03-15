import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';

import TopBrief from "./TopBrief";
import StoryCard from "./StoryCard";
import { Search } from 'react-bootstrap-icons';
import axios from '../config/axios';
import { email } from '../config/contact';

function Discover(props) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/stories');

      setStories(req.data);
    };

    fetchData();
  }, []);

  return (
    <Container className="bg-light pl-md-5 pr-md-5 pb-2" fluid>

      <Row className="pt-2">
        <Col>
          <TopBrief/>
        </Col>
      </Row>

      {/**Search */}
      <Row className="pb-2">
        <Col xs={12} md={6}>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control type="text" placeholder="search"/>
              </Col>
              <Col xs="auto">
                <Button type="button"><Search/></Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>

        <Col className="mt-2 mt-md-0" xs={12} md={3}>
          <Button className="w-100" type="button" href={`mailto:${email}`}>Add Story</Button>
        </Col>

        <Col className="mt-2 mt-md-0" xs={12} md={3}>
          <Button className="w-100" type="button">Maps</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <hr/>
        </Col>
      </Row>

      <Row>
        { 
          stories.map(story => (
            <Col xs={6} sm={4} md={2}>
              {
                <StoryCard
                  id={story.id}
                  title={story.title}
                  thumbnail={story.thumbnail[0].name}
                />
              }
            </Col>
          ))
        }
      </Row>

      <Row>
        <Col>
          <hr/>
        </Col>
      </Row>

    </Container>
  );
}

export default Discover;