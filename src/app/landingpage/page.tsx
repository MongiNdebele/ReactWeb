"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, ListGroup } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsSearch } from "react-icons/bs";

function BurgerMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );
}

function Example() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <BurgerMenu />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
      >
        <Offcanvas.Header className="d-flex justify-content-between">
          <Offcanvas.Title>Menu</Offcanvas.Title>
          <Button variant="danger" onClick={handleClose}>
            <BurgerMenu />
          </Button>
        </Offcanvas.Header>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" className="custom-search-icon">
            <BsSearch />
          </InputGroup.Text>
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item
              action
              active={activeTab === "home"}
              onClick={() => setActiveTab("home")}
            >
              Home
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={activeTab === "contact"}
              onClick={() => setActiveTab("contact")}
            >
              Contact
            </ListGroup.Item>
          </ListGroup>
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
      <div className={`main-content ${show ? 'shifted' : ''}`}>
        {activeTab === "home" && <p>Home content goes here.</p>}
        {activeTab === "profile" && <p>Profile content goes here.</p>}
        {activeTab === "contact" && <p>Contact content goes here.</p>}
      </div>
    </>
  );
}

export default Example;

{
  /* <Button variant="primary" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header className="d-flex justify-content-between">
          <Offcanvas.Title>Menu</Offcanvas.Title>
          <Button variant="primary" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </Button>
        </Offcanvas.Header>
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */
}
