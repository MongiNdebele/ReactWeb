import React from "react";

const TagsMenu = () => {
  return (
    <div className="">
      <h1 className="headings">TAGS</h1>
      <div className="d-flex flex-row">
        <button type="button" className="btn custom-list-button tag1">
          Tag 1
        </button>
        <button type="button" className="btn custom-list-button tag2">
          Tag 2
        </button>
        <button type="button" className="btn custom-list-button addtag">
          + Add Tag
        </button>
      </div>
    </div>
  );
};

export default TagsMenu;
