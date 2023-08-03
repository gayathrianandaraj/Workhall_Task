import React from "react";
import "./MenuBar.css"; //css for menubar

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="left-menu">
        <span>Task</span>
      </div>
      <div className="right-menu">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default MenuBar;
