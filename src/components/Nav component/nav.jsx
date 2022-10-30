import React from "react";
import "../Nav component/nav.css";
const Nav = () => {
  return (
    <div className="mainNav">
      <div>
        <span className="new">New</span>
        <span className="gen">Gen</span>
      </div>
      <nav>
        <p className="more"id="moreid">more</p>
        <div className="navlist2 shownavlist2" id="navlistid">
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Market</li>
          </a>
          <a href="">
            <li>Artist</li>
          </a>
          <a href="">
            <li>Community</li>
          </a>
          <div className="logupbtDiv">
            <button className="loginbt">Login</button>
            <button className="Signupbt">Signup</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
