import React from "react";
import {Card, Button} from "react-bootstrap";
import styles from "@/sass/app-pages/getstarted.module.sass";
import style from "@/sass/app-pages/card.module.sass";

const GetStarted: React.FC = () => {
  return (
    <Card className={`h-100 ${style.card}`}>
          <Card.Body className={`d-flex flex-column justify-content-center mx-11 ${style.cardbody}`}>
            <Card.Title className={`${style.cardtitle}`}>Productive Mind</Card.Title>
            <Card.Text className={`${style.cardtext}`}>
            With only the features you need, Organic Mind is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.
            </Card.Text>
            <Button href="/auth/register" variant="primary" className={`my-3 ${styles.custombutton} ${styles.signintext}`}>Get Started</Button>
            <Card.Text className={`${style.cardtext}`}>
              Already have an account? <a href="/home" className={`${styles.signintext}`}>Sign in</a>
            </Card.Text>
          </Card.Body>
        </Card>
  );
};

export default GetStarted;
