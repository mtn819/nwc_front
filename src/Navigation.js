import React from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Navigation(props) {
  return (
    <Navbar className="shadow-lg bg-white" sticky="top" expand="lg">
      <Navbar.Brand href="/">
        <img 
          className="rounded-circle border border-4px border-primary"
          width="42.0px"
          src="https://www.pinclipart.com/picdir/middle/135-1353025_wonder-woman-wonder-woman-logo-png-clipart.png"
          alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="nav_collapse"/>
      <Navbar.Collapse id="nav_collapse">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/discover">Discover NWC Stories</Nav.Link>
          <Nav.Link href="/mapping">Mapping the NWC</Nav.Link>
          <Nav.Link href="/contribute">Why contribute?</Nav.Link>
        </Nav>
        <hr/>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2 mb-1 mb-sm-0"/>
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;