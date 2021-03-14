import React from 'react';

import { Carousel } from 'react-bootstrap';

function Banner(props) {
  return (
    <Carousel
      className="h-100 shadow"
      controls={false}
      indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 filter-brightness-50 minh-250px maxh-400px"
          src="https://images.theweek.com/sites/default/files/styles/tw_image_9_4/public/BE021512.jpg?itok=6LnfImQ4&resize=1260x560"
          alt=""/>
        <Carousel.Caption>
          <h4>Democratizing Politics</h4>
          <p>Mapping the Stories and Significance of the 1977 National Women's Conference</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;