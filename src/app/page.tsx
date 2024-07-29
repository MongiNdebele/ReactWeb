"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetStarted from '@/components/start/getstartedcard';
import Pineapple from '@/components/start/pineapplecard';
import { Row, Col } from 'react-bootstrap';

export default function page() {
  return(
    <div >
      <Row className="full-screen-cards m-0">
        <Col xs={12} md={12} lg={6} className="p-3 full-height-col">
          <Pineapple />
        </Col>
        <Col xs={12} md={12} lg={6} className="p-3 full-height-col">
          <GetStarted />
        </Col>
      </Row>
    </div>
  );
};
