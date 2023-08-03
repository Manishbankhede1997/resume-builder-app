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
    <div className="Navbar">
      {/* Logo on the left side of the navbar */}
      <div className="navleft">
        <img
          className="logoNav"
          src="https://almablog-media.s3.ap-south-1.amazonaws.com/logo1_edfc81b31b.png"
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
        {/* Home button with a link to the home page */}
        <Link to={"/"}>
          <button>Resume Template</button>
        </Link>
        {/* My Quiz button with a link to the "My Quiz" page */}
        <button>My Resume</button>

        {/* Play Quiz button with a link to the "Play Quiz" page */}

        <button>About-us</button>
      </div>
    </div>
  );
}

export default Navbar;
