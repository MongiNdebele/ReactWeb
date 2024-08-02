import Image from "next/image";
import React, { use } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaEye } from "react-icons/fa";

const SignIn: React.FC = () => {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column justify-content-center ">
        <Card.Title>Sign in</Card.Title>
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control input-text" //p-3
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email.email@mail.com"
            />
          </div>
          <div className="mb-4 input-group">
            <input
              type="password"
              className="form-control input-text" // p-3
              id="exampleInputPassword1"
              placeholder="*********************"
            />
            <button
              type="button"
              id="toggle-password"
              className="toggle-password"
            >
              <FaEye />
            </button>
          </div>
          <a
            href="http://localhost:3000/landingpage"
            className="btn w-100 custom-button"
            role="button"
            aria-disabled="false"
          >
            Sign in
          </a>
          {/*           <button type="submit" className="btn w-100 custom-button">
            Sign in
          </button> */}
          <div>
            <Row className="d-flex align-items-center justify-content-between ">
              <Col>
                <hr />
              </Col>
              <Col className="col-1  text-nowrap other-text ">
                <div className="d-flex justify-content-center">or</div>
              </Col>
              <Col>
                <hr />
              </Col>
            </Row>
          </div>
          <Row className="mb-4">
            <Col>
              <button type="submit" className="p-2 btn w-100 button">
                Google
              </button>
            </Col>
            <Col>
              <button type="submit" className="p-2 btn w-100 button ">
                Facebook
              </button>
            </Col>
          </Row>
          <div className="additional-text container text-center text-nowrap">
            Don't have an account?{" "}
            <a href="#" color="#3c3c00">
              Sign up
            </a>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default SignIn;

//container text-center d-inline-block
