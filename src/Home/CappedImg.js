import React from 'react';

import {Carousel, Col} from 'react-bootstrap';

function CappedImg({caption, url, link}) {
  return (
    <Col
      className="mt-2 mb-2"
      xs={6} sm={3}
    >
      <a href={link}>
        <Carousel
          controls={false}
          indicators={false}>
            <Carousel.Item>
              <img
                className="w-100 h-100 rounded filter-brightness-50 hover-accent"
                alt="" src={url}/>
              <hr/>
              <Carousel.Caption className="pointer-events-none">
                <p>{caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </a>
    </Col>
  );
}

export default CappedImg;