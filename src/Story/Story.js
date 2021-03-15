import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../config/axios';
import Markdown from 'markdown-to-jsx';
import YouTubeVideoId from 'youtube-video-id';
import { Container, Row, Col } from 'react-bootstrap';
import { Geo } from 'react-bootstrap-icons';
import StoryCard from '../Discover/StoryCard';

function Story(props) {
  const { id } = useParams();

  const [story, setStory] = useState({content: ''});
  useEffect(() => {
    async function fetchData(){
      const req = await axios.get(`/stories/${id}`);

      setStory(req.data);
    };

    fetchData();
  }, []);

  const [moreStories, setMoreStories] = useState([])
  useEffect(() => {
    async function fetchData(){
      const req = await axios.get(`/stories`);

      setMoreStories(
        req.data
        .filter(moreStory => moreStory.id !== story.id));
    };

    fetchData();
  }, [story])


  return (
    <Container className="bg-light pb-4" fluid>

      {/**Heading */}
      <Row className="bg-primary text-center pt-2 pb-2 shadow">
        <Col xs={12}><h1>{story.title}</h1></Col>

        <Col xs={12}>Author: {story.author}</Col>

        <Col xs={12}>Published: {(new Date(story.published_at)).toDateString()}</Col>

        {story.location ? 
        <Col xs={12}><Geo/> {story.location}</Col>
        : null}
      </Row>

      {/**Potential Youtube Vid */}
      {(story.youtube_url ?
      <Row className="mt-2">
        <Col xs={0} md={2}></Col>
        <Col xs={12} md={8}>
          <div className="embed-responsive embed-responsive-16by9">
          <iframe
            src={`https://www.youtube.com/embed/${YouTubeVideoId(story.youtube_url)}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
          </div>
        </Col>
      </Row>
      : null) }
      
      {/**Actual Story */}
      <Row className="mt-2">
        <Col xs={0} md={2}></Col>
        <Col xs={12} md={8}>
          <Markdown>{story.content}</Markdown>
        </Col>
      </Row>

      <Row><Col><hr/></Col></Row>

      {/**Explore More */}
      <Row className="text-center">
        <Col><h4>Discover More Stories:</h4></Col>
      </Row>

      <Row className="text-center">
        {
          moreStories.map(moreStory => (
            <Col xs={6} sm={4} md={3} xl={2}>
              <StoryCard
                id={moreStory.id}
                title={moreStory.title}
                thumbnail={moreStory.thumbnail[0].name}/>
            </Col>
          ))
        }
      </Row>

    </Container>
  );
}

export default Story;