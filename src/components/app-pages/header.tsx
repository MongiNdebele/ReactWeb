import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Badge } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import styles from "../../sass/app-pages/header.module.sass";

const Header = ({ activeScreen, handleShow, isShifted, activeTab }) => {
  return (
    <div
      className={`d-flex align-items-center ${styles.header} ${
        isShifted ? styles.shifted : ""
      }`}
    >
      <button
        onClick={handleShow}
        className={`${styles.burgerbutton} ${
          isShifted ? styles.shiftburger : ""
        } `}
      >
        <AiOutlineMenuFold size={20} className={styles.backbutton} />
        <TfiMenu className={styles.canvasburgerbutton} />
      </button>
      <div>
        <h1 className={`${styles.screenheading} `}>{activeScreen}</h1>
      </div>
        {activeTab === "Sticky Wall" || activeTab === "Calendar" ? (
          <FaPlus className={styles.plusicon} />
        ) : (
          <Badge className={`${styles.badge} border`}>5</Badge> // Customize badge text as needed
        )}
    </div>
  );
};

export default Header;

/* {(activeTab === "Sticky Wall" || activeTab === "Calendar") && (
  <FaPlus size={25} className={styles.plusicon} /> */
