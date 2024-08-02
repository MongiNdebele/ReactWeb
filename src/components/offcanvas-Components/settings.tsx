import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaSignOutAlt, FaSlidersH} from "react-icons/fa";
import styles from "../../sass/app-pages/offcanvas.module.sass";
import style from "../../sass/app-pages/settingsicons.module.sass";

const Settings = () => {
  return (
    <ListGroup>
      <ListGroup.Item className={`d-flex align-items-center ${styles.customlistitem} `}>
        <FaSlidersH className={style.settingsicon} />
        <div className={`ps-4 ${style.settings}`}>Settings</div>
      </ListGroup.Item>
      <ListGroup.Item className={`d-flex align-items-center ${styles.customlistitem}`}>
        <FaSignOutAlt className={style.settingsicon} />
        <div className={`ps-4 ${style.settings}`}>Sign out</ div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Settings;
