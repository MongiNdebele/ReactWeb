import React from 'react';
import { TfiMenu } from "react-icons/tfi";
import styles from '../../sass/app-pages/header.module.sass'

const Header = ({ activeScreen, handleShow, isShifted }) => {
  return (
    <div className={`d-flex ${styles.header} ${isShifted ? styles.shifted : ""}`}>
      <button onClick={handleShow} className={`${styles.burgerbutton} ${isShifted ? styles.shiftburger: ""} `}>
        <TfiMenu size={20}/>
      </button>
      <div>
      <h1 className={`${styles.screenheading} `}>{activeScreen}</h1>
      </div>
    </div>
  );
};

export default Header;
