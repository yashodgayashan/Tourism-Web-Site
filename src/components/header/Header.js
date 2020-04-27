import React from "react";
import logo from "../../assets/logo/miraj-tours.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="all">
      <input type="checkbox" id="check"></input>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo all">DesignX</label>
      <ul className="all">
        <li className="all">
          <a className="active" href="#" className="all">
            Home
          </a>
        </li>
        <li className="all">
          <a href="#" className="all">
            Places to visit
          </a>
        </li>
        <li className="all">
          <a href="#" className="all">
            Vehicles
          </a>
        </li>
        <li className="all">
          <a href="#" className="all">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
