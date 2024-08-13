"use client";
import React, { useEffect, useState } from "react";
import styles from "../../sass/app-pages/landingpage.module.sass";
import style from "../../sass/app-pages/header.module.sass";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchInput from "@/components/offcanvas-Components/searchinput";
import OffcanvasMenu from "@/components/offcanvas-Components/OCtasks";
import Upcoming from "@/components/app-pages/upcoming";
import StickyWall from "@/components/app-pages/sticky-wall";
import Calendar from "@/components/app-pages/calendar";
import Today from "@/components/app-pages/today";
import ListMenu from "@/components/offcanvas-Components/lists";
import TagsMenu from "@/components/offcanvas-Components/tags";
import Header from "@/components/app-pages/header";
import Settings from "@/components/offcanvas-Components/settings";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { isTokenExpired } from "@/utilities/IDfromToken";
import { redirect } from "next/navigation";

function Example() {
  useEffect(() => {
    if (isTokenExpired()){
      redirect('/home')
    }
  }, [])

  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("Sticky Wall");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className={styles.appcontainer}>
        <Header
          activeScreen={activeTab}
          handleShow={handleShow}
          isShifted={show}
          activeTab={activeTab}
        />
        <Offcanvas
          show={show}
          onHide={handleClose}
          scroll={true}
          backdrop={false}
          className={`${styles.offcanvas}`}
        >
          <Offcanvas.Body>
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className={styles.ofcanvasmenutitle}>Menu</div>
              <button onClick={handleClose} className={`${style.burgerbutton}`}>
                <AiOutlineMenuFold size={20} className={style.backbutton} />
                <TfiMenu size={20} className={style.canvasburgerbutton} />
              </button>
            </div>
            <SearchInput />
            <OffcanvasMenu activeTab={activeTab} setActiveTab={setActiveTab} />
            <hr className={styles.hr} />
            <ListMenu activeTab={activeTab} setActiveTab={setActiveTab} />
            <hr className={styles.hrline2} />
            <br />
            <TagsMenu />
          </Offcanvas.Body>
          <Settings />
        </Offcanvas>
        <div className={`${styles.maincontent} ${show ? styles.shifted : ""}`}>
          {activeTab === "Upcoming" && <Upcoming />}
          {activeTab === "Today" && <Today />}
          {activeTab === "Calendar" && <Calendar />}
          {activeTab === "Sticky Wall" && <StickyWall isShifted={show} />}
        </div>
      </div>
  );
}

export default Example;

/* ${show ? styles.shifted : ""} */
