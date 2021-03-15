import React from 'react';
import { Card } from 'react-bootstrap';

function StoryCard({id, thumbnail, title}) {
  return (
    <a href={`/story/${id}`} className="no-underline text-dark text-center">
    <Card className="hover-accent mt-3 mb-3">
      <Card.Img variant="top" src={thumbnail}/>
      <Card.Body className="m-0">
        <Card.Text><h4>{title}</h4></Card.Text>
      </Card.Body>
    </Card>
    </a>
  );
}

export default StoryCard;