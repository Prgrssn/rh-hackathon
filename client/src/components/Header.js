import React from "react";
import "./Header.scss";
import nav from "../assets/icons/Hamburger menu@2x.png";
import logo from "../assets/icons/Logo@2x.png";
import profile from "../assets/icons/Profile icon@2x.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header__nav" src={nav} alt="Navigation" />
      <img className="header__logo" src={logo} alt="Logo" />

      <img className="header__profile" src={profile} alt="Profile" />
    </header>
  );
}
