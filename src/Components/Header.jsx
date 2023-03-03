/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        // background: "rgba(255,255,255,0.75)",
        background: "rgba(7, 7, 7, 0.65)",
        padding: "1rem",
        top: 0,
        width: "100vw",
        zIndex: 10,
      }}
    >
      <a href="#home" style={{color: "#FFFFFF"}}>Home</a>
      <a href="#about" style={{color: "#FFFFFF"}}>About</a>
      <a href="#portfolio" style={{color: "#FFFFFF"}}>Portfolio</a>
      <a href="#footer" style={{color: "#FFFFFF"}}>Contact</a>
    </div>
  );
};

export default Header;
