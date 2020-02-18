import React, { memo, useState } from "react";
import logo from "../logo.svg";

const STYLES = {
  clickable: { cursor: "pointer" }
};

const HeaderLink = memo(props => {
  const [active, setActive] = useState("");
  return (
    <a
      className={`${active} nav-link nav-text`}
      style={STYLES.clickable}
      onMouseEnter={() => setActive("active")}
      onMouseLeave={() => setActive("")}
      href={props.path}
    >
      {props.label}
    </a>
  );
});

const HeaderButton = memo(props => {
  const [active, setActive] = useState("");
  return (
    <div
      className={`${active} nav-link nav-text`}
      style={STYLES.clickable}
      onMouseEnter={() => setActive("active")}
      onMouseLeave={() => setActive("")}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
});

const Branding = () => (
  <div className="branding" style={STYLES.clickable}>
    <span>
      <img src={logo} className="App-logo" alt="logo" />
    </span>
    <span className="title">clr-prototype-react</span>
  </div>
);

const Header = memo(() => (
  <header className="header-6">
    <Branding />
    <div className="header-nav">
      <HeaderButton label="Getting Started" />
      <HeaderLink label="Dashboard" path="/dashboard" />
      <HeaderLink label="New Layout" path="/new-layout" />
    </div>
    <div className="header-actions">
      {/* <a className="nav-link nav-icon" aria-label="settings">
        User Icon 
      </a> */}
    </div>
  </header>
));

export { Header, Branding, HeaderLink };
