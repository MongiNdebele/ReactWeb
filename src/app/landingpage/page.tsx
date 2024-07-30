"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasMenu from "@/components/app-pages/offcanvasmenu";
import Upcoming from "@/components/app-pages/upcoming";
import StickyWall from "@/components/app-pages/sticky-wall";
import Calendar from "@/components/app-pages/calendar";
import Today from "@/components/app-pages/today";
import ListMenu from "@/components/app-pages/lists";
import TagsMenu from "@/components/app-pages/tags";
import { InputGroup, FormControl, ListGroup } from "react-bootstrap";
import { FaSignOutAlt, FaSlidersH } from "react-icons/fa";
import Header from "@/components/app-pages/header";
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
  const [activeTab, setActiveTab] = useState("Sticky Wall");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="app-container">
      <Header activeScreen={activeTab} handleShow={handleShow} isShifted={show} />
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
          <OffcanvasMenu activeTab={activeTab} setActiveTab={setActiveTab} />
          <ListMenu activeTab={activeTab} setActiveTab={setActiveTab} />
          <TagsMenu />
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </Offcanvas.Body>
        <ListGroup>
          <ListGroup.Item className="custom-list-item">
            <FaSlidersH /> Settings
          </ListGroup.Item>
          <ListGroup.Item className="custom-list-item">
            <FaSignOutAlt /> Sign out
          </ListGroup.Item>
        </ListGroup>
      </Offcanvas>
      <div className={`main-content ${show ? "shifted" : ""}`}>
        {activeTab === "Upcoming" && <Upcoming />}
        {activeTab === "Today" && <Today />}
        {activeTab === "Calendar" && <Calendar />}
        {activeTab === "Sticky Wall" && <StickyWall />}
      </div>
    </div>
  );
}

export default Example;

/* "use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, ListGroup, Badge } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsSearch } from "react-icons/bs";
import StickyWall from "@/components/app-pages/sticky-wall";
import Calendar from "@/components/app-pages/calendar";
import Today from "@/components/app-pages/today";
import { FaListCheck } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";

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
          <h1 className="headings">
            TASKS
          </h1>
          <ListGroup>
            <ListGroup.Item
              action
              className={`custom-list-item ${
                activeTab === "home" ? "active" : ""
              }`}
              onClick={() => setActiveTab("home")}
            >
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <FaListCheck className="list-icon" /> Home
                </div>
                <Badge
                  className={`custom-badge ${
                    activeTab === "home" ? "active-badge" : "inactive-badge"
                  }`}
                >
                  4
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              action
              className={`custom-list-item ${
                activeTab === "profile" ? "active" : ""
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                <FaCalendarAlt className="list-icon" /> Profile
                </div>
                <Badge
                  className={`custom-badge ${
                    activeTab === "profile" ? "active-badge" : "inactive-badge"
                  }`}
                >
                  4
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              action
              className={`custom-list-item ${
                activeTab === "contact" ? "active" : ""
              }`}
              onClick={() => setActiveTab("contact")}
            >
              <FaStickyNote className="list-icon" /> Contact
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
      <div className={`main-content ${show ? "shifted" : ""}`}>
        {activeTab === "home" && <Today />}
        {activeTab === "profile" && <Calendar />}
        {activeTab === "contact" && <StickyWall />}
      </div>
    </>
  );
}

export default Example;
 */
