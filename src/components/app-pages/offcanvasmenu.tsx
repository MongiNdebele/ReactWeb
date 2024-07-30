// components/OffcanvasMenu.js

import React from "react";
import { InputGroup, FormControl, ListGroup, Badge } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FaCalendarAlt, FaStickyNote } from "react-icons/fa";

const OffcanvasMenu = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <h1 className="headings">TASKS</h1>
      <ListGroup>
        {/* Item 1 */}
        <ListGroup.Item
          action
          className={`custom-list-item ${
            activeTab === "Upcoming" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("Upcoming");
          }}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <MdKeyboardDoubleArrowRight className="list-icon" /> Upcoming
            </div>
            <Badge
              className={`custom-badge ${
                activeTab === "Upcoming" ? "active-badge" : "inactive-badge"
              }`}
            >
              12
            </Badge>
          </div>
        </ListGroup.Item>
        {/* Item 2 */}
        <ListGroup.Item
          action
          className={`custom-list-item ${activeTab === "Today" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("Today");
          }}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <FaListCheck className="list-icon" /> Today
            </div>
            <Badge
              className={`custom-badge ${
                activeTab === "Today" ? "active-badge" : "inactive-badge"
              }`}
            >
              5
            </Badge>
          </div>
        </ListGroup.Item>
        {/* Item 3 */}
        <ListGroup.Item
          action
          className={`custom-list-item ${
            activeTab === "Calendar" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("Calendar");
          }}
        >
          <FaCalendarAlt className="list-icon" /> Calendar
        </ListGroup.Item>
        {/* Item 4 */}
        <ListGroup.Item
          action
          className={`custom-list-item ${
            activeTab === "Sticky Wall" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Sticky Wall")}
        >
          <FaStickyNote className="list-icon" /> Sticky Wall
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default OffcanvasMenu;

/* import React, { useState } from "react";
import { ListGroup, Badge } from "react-bootstrap"
import { FaListCheck } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";


function ItemList () {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
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
    )
}

export default ItemList;
 */
