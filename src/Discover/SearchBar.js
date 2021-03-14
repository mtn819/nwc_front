import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

function SearchBar(props) {
  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Control type="text" placeholder="search"/>
        </Col>
        <Col xs="auto">
          <Button><Search/></Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default SearchBar;