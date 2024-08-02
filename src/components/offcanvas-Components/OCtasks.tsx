import React from "react";
import styles from '../../sass/app-pages/offcanvas.module.sass'
import {ListGroup, Badge } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FaCalendarAlt, FaStickyNote } from "react-icons/fa";

const Tasks = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <h1 className={`${styles.headings} mx-3`}>TASKS</h1>
      <ListGroup>
        {/* Item 1 */}
        <ListGroup.Item
          action
          className={`${styles.customlistitem} ${
            activeTab === "Upcoming" ? styles.active : " "
          }`}
          onClick={() => {
            setActiveTab("Upcoming");
          }}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <MdKeyboardDoubleArrowRight className={styles.listicon} /> Upcoming
            </div>
            <Badge
              className={`${styles.custombadge} ${
                activeTab === "Upcoming" ? styles.activebadge : styles.inactivebadge
              }`}
            >
              12
            </Badge>
          </div>
        </ListGroup.Item>
        {/* Item 2 */}
        <ListGroup.Item
          action
          className={`${styles.customlistitem} ${activeTab === "Today" ? styles.active : ""}`}
          onClick={() => {
            setActiveTab("Today");
          }}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <FaListCheck className={styles.listicon} /> Today
            </div>
            <Badge
              className={`${styles.custombadge} ${
                activeTab === "Today" ? styles.activebadge : styles.inactivebadge
              }`}
            >
              5
            </Badge>
          </div>
        </ListGroup.Item>
        {/* Item 3 */}
        <ListGroup.Item
          action
          className={`${styles.customlistitem} ${
            activeTab === "Calendar" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveTab("Calendar");
          }}
        >
          <FaCalendarAlt className={styles.listicon} /> Calendar
        </ListGroup.Item>
        {/* Item 4 */}
        <ListGroup.Item
          action
          className={`${styles.customlistitem} ${
            activeTab === "Sticky Wall" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("Sticky Wall")}
        >
          <FaStickyNote className={styles.listicon} /> Sticky Wall
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Tasks;
