import React from 'react';

import Story from './Story';

function StoryBoard(props) {
  const imgUrls = [
    "https://washington.org/sites/default/files/ckeditor-images/shall-not-be-denied-banner.jpg",
    "https://s.yimg.com/aah/yhst-94666432756749/fight-for-women-s-rights-wreath-ornament-by-christopher-radko-4.png",
    "https://pbs.twimg.com/media/DikukLKW0AEWOwA.jpg",
  ]

  return (
    <>
      <Story
        imgSrc={imgUrls[0]}
        caption={<h6>Good Story Caption</h6>}/>
      <Story
        imgSrc={imgUrls[1]}
        caption={<h6>Very Good Story</h6>}/>
      <Story
        imgSrc={imgUrls[2]}
        caption={<h6> Story</h6>}/>
      <Story
        imgSrc={imgUrls[0]}
        caption={<h6>Good Story Caption</h6>}/>
      <Story
        imgSrc={imgUrls[1]}
        caption={<h6>Very Good Story</h6>}/>
      <Story
        imgSrc={imgUrls[2]}
        caption={<h6> Story</h6>}/>
      <Story
        imgSrc={imgUrls[0]}
        caption={<h6>Good Story Caption</h6>}/>
      <Story
        imgSrc={imgUrls[1]}
        caption={<h6>Very Good Story</h6>}/>
      <Story
        imgSrc={imgUrls[2]}
        caption={<h6> Story</h6>}/>
    </>
  );
}

export default StoryBoard;