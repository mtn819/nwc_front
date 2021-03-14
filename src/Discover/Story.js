import React from 'react';

import {Card, Carousel, Col} from 'react-bootstrap';

function Story({caption, imgSrc}) {
  return (
    <Col
      className="mt-2 mb-2"
      align="center"
      xs={6} sm={4} md={3} lg={2}
    >
      <a className="text-dark" href="/discover">
        <Card className="hover-accent discover_story w-100">
          <Card.Img variant="top" src={imgSrc}/>
          <Card.Body>
            <Card.Text>
              {caption}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
}

export default Story;