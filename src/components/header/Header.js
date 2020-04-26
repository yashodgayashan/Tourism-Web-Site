import React, { Component } from "react";
import logo from "../../assets/logo/miraj-tours.png";
import "./Header.css";

const Header = () => {
  return (
    <header class="header">
      <a href="/home" class="logo">
        <img src={logo} width="150px" />
      </a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/places">Places to visit</a>
        </li>
        <li>
          <a href="/vehicles">Vehicles</a>
        </li>
        <li>
          <a href="/contact-us">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
