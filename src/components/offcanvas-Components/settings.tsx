import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import { FaSignOutAlt, FaSlidersH } from "react-icons/fa";
import styles from "../../sass/app-pages/offcanvas.module.sass";
import style from "../../sass/app-pages/settingsicons.module.sass";
import { logout } from "@/services/logoutfunction";

const Settings = () => {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('http://localhost:3000');
  };
  return (
    <>
      <div className={`d-flex ${style.buttons}`}>
        <div>
          <FaSlidersH className={`${style.settingsicon}`} />
        </div>
        <div className={`${style.settings}`}>Settings</div>
      </div>
      <div className={`d-flex justify-content-center`}>
        <hr className={`${style.hrline3}`} />
      </div>
      <div className={`d-flex ${style.signoutbutton} ${style.buttons2} `}>
        <div>
          <FaSignOutAlt className={`${style.signouticon}`} />
        </div>
        <div onClick={handleLogout} className={`${style.signout}`}>Sign out</div>
      </div>
    </>
  );
};

export default Settings;

/*     <ListGroup>
      <ListGroup.Item
        className={`d-flex align-items-center ${styles.customlistitem} `}
      >
        <FaSlidersH className={style.settingsicon} />
        <div className={`ps-4 ${style.settings}`}>Settings</div>
      </ListGroup.Item>
      <div className={`d-flex justify-content-center`}>
        <hr className={style.hrline3} />
      </div>
      <ListGroup.Item
        className={`d-flex align-items-center ${styles.customlistitem}`}
      >
        <FaSignOutAlt className={style.signinicon} />
        <div className={`ps-4 ${style.settings}`}>Sign out</div>
      </ListGroup.Item>
    </ListGroup> */
