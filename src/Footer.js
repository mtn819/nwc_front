import React from 'react';

import { Jumbotron } from 'react-bootstrap';
import { email, phone } from './config/contact';

function Footer(props) {
  return (
    <Jumbotron className="p-4 shadow-lg mb-0 rounded-0 bg-light">
      <h5>Contact us :)</h5>
      <hr/>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </Jumbotron>
  );
}

export default Footer;