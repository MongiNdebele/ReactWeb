import React from "react";
import styles from '../../sass/app-pages/offcanvas.module.sass'
import style from '../../sass/app-pages/tags.module.sass'

const TagsMenu = () => {
  return (
    <>
      <h1 className={`${styles.headings} mx-3`}>TAGS</h1>
      <div className="d-flex flex-row align-items-center">
        <button type="button" className={`d-flex justify-content-center btn ${style.customlistbutton} ${style.tag1} me-1`}>
          <div>Tag 1</div>
        </button>
        <button type="button" className={`btn ${style.customlistbutton} ${style.tag2} me-1`}>
          <div>Tag 2</div>
        </button>
        <button type="button" className={`btn ${style.customlistbutton} ${style.addtag} me-1`}>
          <div>+ Add Tag</div>
        </button>
      </div>
    </>
  );
};

export default TagsMenu;
