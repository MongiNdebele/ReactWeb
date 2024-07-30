import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { FaSquare } from "react-icons/fa6";


const ListMenu = ({ activeTab, setActiveTab }) => {
    return (
      <div className="">
        <h1 className="headings">LISTS</h1>
        <ListGroup>
          {/* Item 1 */}
          <ListGroup.Item
            action
            className={`custom-list-item ${
              activeTab === "upcoming" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("upcoming");
            }}
          >
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div>
                <FaSquare className="filter-list-icon personal" /> Personal
              </div>
              <Badge
                className={`custom-badge ${
                  activeTab === "upcoming" ? "active-badge" : "inactive-badge"
                }`}
              >
                3
              </Badge>
            </div>
          </ListGroup.Item>
          {/* Item 2 */}
          <ListGroup.Item
            action
            className={`custom-list-item ${activeTab === "today" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("today");
            }}
          >
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div>
                <FaSquare className="filter-list-icon work" /> Work
              </div>
              <Badge
                className={`custom-badge ${
                  activeTab === "today" ? "active-badge" : "inactive-badge"
                }`}
              >
                6
              </Badge>
            </div>
          </ListGroup.Item>
          {/* Item 3 */}
          <ListGroup.Item
            action
            className={`custom-list-item ${
              activeTab === "calendar" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("calendar");
            }}
          >
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div>
                <FaSquare className="filter-list-icon list" /> List
              </div>
              <Badge
                className={`custom-badge ${
                  activeTab === "today" ? "active-badge" : "inactive-badge"
                }`}
              >
                3
              </Badge>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <button type="button" className="custom-list-button">
            + Add New List
        </button>
      </div>
    );
  };
  
  export default ListMenu;