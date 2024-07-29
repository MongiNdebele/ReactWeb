import React from "react";
import {Card} from "react-bootstrap";

const Pineapple: React.FC = () => {
  return (
    <Card className="text-white h-100">
      <Card.Img src="/images/pineapple.jpg" alt="Card image" className="h-100" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start">
        <Card.Title>Organic</Card.Title>
        <Card.Title>Mind</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Pineapple;