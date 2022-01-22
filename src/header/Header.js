import React, { useState, useContext } from "react";
import { Context } from "../App";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

import "./header.css";

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const context = useContext(Context);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          {context.map((airline) => (
            <li key={airline.id} className="option" onClick={closeMobileMenu}>
              <Link to={`/${airline.name}`}>{airline.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};
