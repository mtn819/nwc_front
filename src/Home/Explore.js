import React from 'react';
import {Container, Row, Card} from 'react-bootstrap';

import CappedImg from './CappedImg';

function Explore(props) {
  const imgUrls = [
    "https://www.idpfoundation.org/img/asset/bWFpbi9ibG9nL3Jlc2l6ZWQvRV9TREcgZ29hbHNfaWNvbnMtaW5kaXZpZHVhbC1yZ2ItMDUtMjAxNjExMDcxNDIwMTgucG5n?w=800&q=80&fit=crop&s=86fe5c35f49db93f0c422468890eb769",
    "https://images.squarespace-cdn.com/content/v1/5a8283c70abd04d82648a2ee/1520528940592-M9DB4306ZYT9NG6XM4ZX/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICHnXC1b9smDvYLPdL-DS7U1pkhCtl83kemXd5r3C5ngKMshLAGzx4R3EDFOm1kBS/Suffragettes%2C_New_York_Times%2C_1921.JPG",
    "https://www.womenhistoryblog.com/wp-content/uploads/2017/03/dede6d5f12be16879834431f408ae48bdeb86207.jpg",
    "https://images.squarespace-cdn.com/content/54b6c817e4b0d16cf9f26d19/1597184031887-HPSS7OYARO977FMO5943/casestudy.png?content-type=image%2Fpng",
  ]

  return (
    <Card className="shadow">
      <Card.Header className="bg-primary"><h6>Explore</h6></Card.Header>
      <Container fluid>
        <Row>
          <CappedImg
            caption="Discover NWC Stories"
            url={imgUrls[1]}
            link="/discover"/>
          <CappedImg
            caption="Why the NWC Matters"
            url={imgUrls[0]}
            link="/why-matters"/>
          <CappedImg
            caption="Mapping the NWC"
            url={imgUrls[2]}
            link="/mapping"/>
          <CappedImg
            caption="How to Contribute"
            url={imgUrls[3]}
            link="/how-contribute"/>
        </Row>
      </Container>
    </Card>
  );
}

export default Explore;