// app/auth/register/page.js
"use client";
import React from 'react';
import styles from "@/sass/app-pages/getstarted.module.sass";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './registrationcomp';
import Pineapple from '@/components/start/pineapplecard';
import { Row, Col } from 'react-bootstrap';

export default function page() {
  return(
    <div >
      <Row className={`${styles.fullscreencards} m-0`}>
        <Col xs={12} md={12} lg={6} className={`p-3 ${styles.customleftheightcol}`}>
          <Pineapple />
        </Col>
        <Col xs={12} md={12} lg={6} className={`p-3 ${styles.fullheightcol}`}>
          <Register />
        </Col>
      </Row>
    </div>
  );
};
