import React, { use } from "react";
import {Card, Button} from "react-bootstrap";

const GetStarted: React.FC = () => {
  return (
    <Card className="h-100">
          <Card.Body className="d-flex flex-column justify-content-center mx-11">
            <Card.Title>Productive Mind</Card.Title>
            <Card.Text>
            With only the features you need, Organic Mind is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.
            </Card.Text>
            <Button variant="primary" className="my-3">Get Started</Button>
            <Card.Text>
              Already have an account? <a href="http://localhost:3000/home" className="link-underline-opacity-0">Sign in</a>
            </Card.Text>
          </Card.Body>
        </Card>
  );
};

export default GetStarted;
