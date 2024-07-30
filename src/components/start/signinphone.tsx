import React, { use } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const SignInPhone: React.FC = () => {
  return (
        <form className="">
         <h1>Sign in</h1>
          <div className="mb-3">
            <input
              type="email"
              className="form-control input-text" //p-3
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email.email@mail.com"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control input-text" // p-3
              id="exampleInputPassword1"
              placeholder="*********************"
            />
          </div>
          <button type="submit" className="btn w-100 custom-button"> 
            Sign in
          </button> 
          <Row className=" align-items-center justify-content-around">
            <Col className="border-top " ></Col>
            <Col className="col-1 text-nowrap other-text ">or</Col>
            <Col className="border-top "></Col>
          </Row>
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
            Don't have an account? <a href="#" color="#3c3c00" >Sign up</a>
          </div>
        </form>
  );
};

export default SignInPhone;