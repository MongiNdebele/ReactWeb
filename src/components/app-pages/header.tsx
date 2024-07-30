import React from 'react';
import Button from "react-bootstrap/Button";

function BurgerMenu() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    );
  }

const Header = ({ activeScreen, handleShow, isShifted }) => {
  return (
    <div className={`header ${isShifted ? "shifted" : ""}`}>
      <Button variant="primary" onClick={handleShow} className="burger-button">
        <BurgerMenu />
      </Button>
      <h1 className="screen-heading">{activeScreen}</h1>
    </div>
  );
};

export default Header;
