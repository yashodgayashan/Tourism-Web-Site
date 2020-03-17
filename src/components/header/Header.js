import React, { Component } from "react";
import logo from "../../assets/logo/miraj-tours.png";
import "./Header.css";

const Header = () => {
  return (
    <header class="header">
      <a href="" class="logo">
        <img src={logo} width="150px" />
      </a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        <li>
          <a href="#work">Our Work</a>
        </li>
        <li>
          <a href="#about">Places to visit</a>
        </li>
        <li>
          <a href="#careers">Vehicles</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
