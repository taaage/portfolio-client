import React from "react";
import { useNavigate } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  let navigate = useNavigate();

  return (
    <div className="menu-container">
      <div className="menu-item" onClick={() => navigate("/")}>
        <p className="menu-item-text">
          <span className="menu-item-number">01. </span>Home
        </p>
      </div>
      <div className="menu-item" onClick={() => navigate("/about")}>
        <p className="menu-item-text">
          <span className="menu-item-number">02. </span>About
        </p>
      </div>
      <div className="menu-item" onClick={() => navigate("/projects")}>
        <p className="menu-item-text">
          <span className="menu-item-number">03. </span>Projects
        </p>
      </div>
      <div className="menu-item" onClick={() => navigate("/contact")}>
        <p className="menu-item-text">
          <span className="menu-item-number">04. </span>Contact
        </p>
      </div>
      <div className="menu-item" onClick={() => navigate("/cv")}>
        <p className="menu-item-text">
          <span className="menu-item-number">05. </span>CV
        </p>
      </div>
    </div>
  );
};

export default Menu;
