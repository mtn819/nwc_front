import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { CaretDownFill, CaretUpFill, Upc } from 'react-bootstrap-icons';

function CaretOption({title}) {
  const [up, setUp] = useState(false);

  return (
    <Col xs={12} sm={3}>
      <p onClick={e => setUp(!up)}>
        {up ?
          <CaretUpFill/>
          : <CaretDownFill/>}
        {title}
      </p>
    </Col>
  );
}

export default CaretOption;