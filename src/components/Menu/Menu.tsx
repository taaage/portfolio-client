import React from "react";
import { useNavigate } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  let navigate = useNavigate();

  return (
    <div className="menu-container">
      <div className="logo" onClick={() => navigate("/")}></div>
      <div className="menu-item" onClick={() => navigate("/")}>
        <p className="menu-item-text">
          <span className="menu-item-number">1 </span>Home
        </p>
      </div>

      <div className="menu-item" onClick={() => navigate("/projects")}>
        <p className="menu-item-text">
          <span className="menu-item-number">3 </span>Projects
        </p>
      </div>
      <div className="menu-item" onClick={() => navigate("/contact")}>
        <p className="menu-item-text">
          <span className="menu-item-number">3 </span>Contact
        </p>
      </div>
      <div className="menu-item" onClick={() => navigate("/about")}>
        <p className="menu-item-text">
          <span className="menu-item-number">7 </span>About
        </p>
      </div>
    </div>
  );
};

export default Menu;
