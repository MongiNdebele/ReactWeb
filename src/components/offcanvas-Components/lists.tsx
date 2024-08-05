import React from "react";
import styles from '../../sass/app-pages/offcanvas.module.sass'
import style from '../../sass/app-pages/lists.module.sass'
import { ListGroup, Badge } from "react-bootstrap";
import { FaSquare } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const ListMenu = ({ activeTab, setActiveTab }) => {
  return (
    <div className="">
      <h1 className={`${styles.headings} mx-3`}>LISTS</h1>
      <ListGroup>
        {/* Item 1 */}
        <ListGroup.Item
          action
          className={`${styles.customlistitem} ${
            activeTab === "upcoming" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveTab("upcoming");
          }}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <FaSquare className={`${style.filterlisticon} ${style.personal}`} /> Personal
            </div>
            <Badge
              className={`${styles.custombadge} ${
                activeTab === "upcoming" ? styles.activebadge : styles.inactivebadge
              }`}
            >
              3
            </Badge>
          </div>
        </ListGroup.Item>
        {/* Item 2 */}
        <ListGroup.Item
          action
          className={`${styles.customlistitem} ${
            activeTab === "today" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveTab("today");
          }}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <FaSquare className={`${style.filterlisticon} ${style.work}`} /> Work
            </div>
            <Badge
              className={`${styles.custombadge} ${
                activeTab === "today" ? styles.activebadge : styles.inactivebadge
              }`}
            >
              6
            </Badge>
          </div>
        </ListGroup.Item>
        {/* Item 3 */}
        <ListGroup.Item
          action
          className={`${styles.customlistitem} ${
            activeTab === "calendar" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveTab("calendar");
          }}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <FaSquare className={`${style.filterlisticon} ${style.list}`} /> List
            </div>
            <Badge
              className={`${styles.custombadge} ${
                activeTab === "calendar" ? styles.activebadge : styles.inactivebadge
              }`}
            >
              3
            </Badge>
          </div>
        </ListGroup.Item>
        <hr className={style.hrline}/>
        {/* Item 4 */}
        <ListGroup.Item action className={styles.customlistitem}>
          <div className="d-flex w-100 align-items-center">
            <FaPlus /> 
            <div className="ps-3">
            Add New List
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ListMenu;
