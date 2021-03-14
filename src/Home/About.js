import React from 'react';

import {Card} from 'react-bootstrap';

function About(props) {
  return (
    <Card className="home_about shadow rounded w-100 h-100">
      <Card.Header className="bg-primary"><h6>About the Project</h6></Card.Header>
      <Card.Body>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;