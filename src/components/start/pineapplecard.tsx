import React from "react";
import {Card} from "react-bootstrap";
import styles from "@/sass/app-pages/card.module.sass";

const Pineapple: React.FC = () => {
  return (
    <Card className={`text-white h-100 ${styles.card}`}>
      <Card.Img src="/images/pineapple.jpg" alt="Card image" className={`h-100 ${styles.cardimg}`}/>
      <Card.ImgOverlay className={`d-flex flex-column justify-content-start ${styles.cardimgoverlay}`}>
        <Card.Title className={`${styles.cardtitle}`}>Organic</Card.Title>
        <Card.Title className={`${styles.cardtitle}`}>Mind</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Pineapple;