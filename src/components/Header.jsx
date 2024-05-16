import React from "react";
import "../styles/css/styles.css";
import fcc from "../assets/fcc_small.svg";

const Header = ({ text }) => {
  return (
    <div className="header">
      <img className="logo" src={fcc} alt="freeCodeCamp Small Logo" />
      <h2>{text}</h2>
    </div>
  );
};

export default Header;
