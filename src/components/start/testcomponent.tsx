// src/components/cardcomponent.tsx
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const TwoColumnCards: React.FC = () => {
  return (
    <Row className="full-screen-cards m-0">
      {/* First Card with Image Overlay */}
      <Col xs={12} md={6} className="p-1 full-height-col">
        <Card className="text-white h-100">
          <Card.Img src="/pineapple.jpg" alt="Card image" className="h-100" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-start">
            <Card.Title>Organic</Card.Title>
            <Card.Title>Mind</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Col>

      {/* Second Card */}
      <Col xs={12} md={6} className="p-1 full-height-col">
        <Card className="h-100">
          <Card.Body className="d-flex flex-column justify-content-center m-5">
            <Card.Title>Productive Mind</Card.Title>
            <Card.Text className=" text-wrap">
            With only the features you need, Organic Mind is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.
            </Card.Text>
            <Button href="#" variant='primary' color='primary'>Get Started</Button>
            <Card.Text>
              Already have an account? Sign in here.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TwoColumnCards;


// src/components/cardcomponent.tsx
/* import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const TwoColumnCards: React.FC = () => {
  return (
    <Row className="d-flex justify-content-end">
      <Col sm={6} className="mb-3 mb-sm-0">
        <Card>
          <Card.Img src="../../public/pineapple.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button href="#" variant="primary">
              Go somewhere
            </Button>
          </Card.ImgOverlay>
        </Card>
      </Col>
      <Col sm={6}>
        <Card>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button href="#" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TwoColumnCards;
 */
/* import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

interface CardComponentProps {
  imgSrc: string;
  title: string;
  text: string;
  lastUpdated: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ imgSrc, title, text, lastUpdated }) => {
  return (
    <Card className="mb-3" style={{ maxWidth: '1000' }}>
      <Row className="g-0">
{/*         <Col md={4}>
          <Card.Img src={imgSrc} className="img-fluid rounded-start" alt={title} />
        </Col> 
        <Col md={8}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Text>
              <small className="text-muted">{lastUpdated}</small>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CardComponent;
 */
