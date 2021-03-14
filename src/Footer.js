import React from 'react';

import { Jumbotron } from 'react-bootstrap';

function Footer(props) {
  return (
    <Jumbotron className="p-4 shadow-lg mb-0 rounded-0 bg-light">
      <h5>Contact us :)</h5>
      <hr/>
      <p>Phone: (713) 828-4902</p>
      <p>Email: mtneugebauer1998@gmail.com</p>
    </Jumbotron>
  );
}

export default Footer;