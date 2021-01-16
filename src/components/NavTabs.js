import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("Home")} ClassName="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => props.handlePageChange("About")} ClassName="nav-link">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#blog" onClick={() => props.handlePageChange("Blog")} ClassName="nav-link">
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => props.handlePageChange("Contact")} ClassName="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
