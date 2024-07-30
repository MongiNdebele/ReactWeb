"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from '@/components/start/signincard';
import Pineapple from '@/components/start/pineapplecard';
import SignInPhone from '@/components/start/signinphone';
import { Row, Col } from 'react-bootstrap';

export default function page() {
  return(
    <div >
      <Row className="full-screen-cards m-0">
        <Col xs={12} md={12} lg={6} className="p-3 custom-left-height-col">
          <Pineapple />
        </Col>
        <Col xs={12} md={12} lg={6} className="p-3 full-height-col">
          <SignIn />
        </Col>
      </Row>
    </div>
  );
};