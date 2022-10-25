import React from "react";
import "../Nav component/nav.css";
const Nav = () => {
  return (
    <div>
      <nav>
        <div> <span className="new">New</span><span className="gen">Gen</span></div>
        <div className="navlist2">
          <a href=""><li>Home</li></a>
          <a href=""><li>Market</li></a>
          <a href=""><li>Artist</li></a>
          <a href=""><li>Community</li></a>
          
        </div>
        <div className="logupbtDiv">
          <button className="loginbt">Login</button>
          <button className="Signupbt">Signup</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
