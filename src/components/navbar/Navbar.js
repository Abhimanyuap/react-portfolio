import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          to="project"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="desktopMenuListItem"
        >
          Project
        </Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="desktopMenuImg" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
