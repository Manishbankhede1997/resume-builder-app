import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  // Get the Redux dispatch function

  // State to manage the visibility of the burger menu on smaller screens
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the visibility of the burger menu
  const handleBurgerClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="Navbar">
        {/* Logo on the left side of the navbar */}
        <div className="navleft">
          <img
            className="logoNav"
            src="data:image/png;base64,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"
            alt="Almabetter"
          />
        </div>

        {/* Burger menu icon on smaller screens */}
        <div className="burger" onClick={handleBurgerClick}>
          <div className={`bar ${showMenu ? "change" : ""}`} />
          <div className={`bar ${showMenu ? "change" : ""}`} />
          <div className={`bar ${showMenu ? "change" : ""}`} />
        </div>

        {/* Navbar links on the right side */}
        <div className={`navRight ${showMenu ? "show" : ""}`}>
          <Link to={"/"}>
            <button className="resume-btn">Resume-Templates</button>
          </Link>
          {/* Play Quiz button with a link to the "Play Quiz" page */}
          <Link to={"/aboutPage"}>
            <button className="resume-btn">About-us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
