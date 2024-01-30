import React from "react";
import { useNavigate } from "react-router-dom";
import LogoGreen from "../../images/logo-green.png";

import "./Menu.css";

type MenuItem = {
  number?: number;
  title?: string;
  logo?: string;
  url: string;
};

const Menu = () => {
  let navigate = useNavigate();

  const renderMenuItems = () => {
    const menuItems: MenuItem[] = [
      { logo: LogoGreen, url: "/" },
      { number: 1, title: "Home", url: "/" },
      { number: 3, title: "Projects", url: "/projects" },
      { number: 3, title: "Contact", url: "/contact" },
      { number: 7, title: "About", url: "/about" },
    ];

    return (
      <div className="menu-container">
        {menuItems.map(({ number, title, logo, url }) => (
          <div className="menu-item" onClick={() => navigate(url)}>
            {logo ? (
              <img src={logo} alt={"alt"} />
            ) : (
              <p className="menu-item-text">
                <span className="menu-item-number">{number}</span> {title}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return renderMenuItems();
};

export default Menu;
