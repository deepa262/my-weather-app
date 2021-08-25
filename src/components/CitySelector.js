import React, { useState } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

const CitySelector = ({ onSelectButtonClick }) => {
  const [city, setCity] = useState(null);

  return (
    <>
      <Row>
        <Col>
          <h1>Hello, select your city!</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <FormControl placeholder="Enter city" onChange={(e) => setCity(e.target.value)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="button-style" onClick={() => onSelectButtonClick(city)}>
            Check weather
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
