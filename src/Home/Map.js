import React from 'react';

function Map(props) {
  return (
    <iframe
      className="minh-md-400px shadow w-100 h-100 minh-300px border-0 rounded"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13859.971278241126!2d-95.35096671239036!3d29.719967248621515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640be5a8ebea199%3A0xc9f387eca8247e7!2sUniversity%20of%20Houston!5e0!3m2!1sen!2sus!4v1615108388872!5m2!1sen!2sus" 
      allowFullScreen="" loading="lazy" title="home_map"></iframe>
  );
}

export default Map;