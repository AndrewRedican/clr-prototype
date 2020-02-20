import React, { memo, useState } from "react";
import { Link } from 'react-router-dom';
import path from '../appRoutes'
import logo from "../logo.svg";

const STYLES = {
  clickable: { cursor: "pointer" },
  logoContainer: { minWidth: 84 }
};

const HeaderLink = memo(props => {
  const [active, setActive] = useState("");
  return (
    <Link
      className={`${active} nav-link nav-text`}
      style={STYLES.clickable}
      onMouseEnter={() => setActive("active")}
      onMouseLeave={() => setActive("")}
      to={props.path}
    >
      {props.label}
    </Link>
  );
});

const Branding = () => (
  <Link className="branding" style={STYLES.clickable} to={path.BASE_PATH}>
    <span style={STYLES.logoContainer}>
      <img src={logo} className="App-logo" alt="logo" />
    </span>
    <span className="title">clr-prototype-react</span>
  </Link>
);

const Header = memo(() => (
  <header className="header-6">
    <Branding />
    <div className="header-nav">
      <HeaderLink label="Getting Started" path={path.BASE_PATH} />
      <HeaderLink label="Dashboard" path={path.DASHBOARD} />
      <HeaderLink label="New Layout" path={path.NEW_LAYOUT} />
    </div>
    <div className="header-actions">
      {/* <a className="nav-link nav-icon" aria-label="settings">
        User Icon 
      </a> */}
    </div>
  </header>
));

export { Header, Branding, HeaderLink };
