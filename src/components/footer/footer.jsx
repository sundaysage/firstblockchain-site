import React from "react";
import "../footer/footer.css";
const footer = () => {
  return (
    <div className="mainFooter">
      <div className="newgenfooterdiv">
        <h4>
          <span className="new">New</span>
          <span className="gen">Gen</span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio
          voluptatem incidunt sint, eos officia facere animi neque accusantium
          inventore tempore.
        </p>
        <div className="sociallinkdiv">
          <a href="">F</a>
          <a href="">@</a>
          <a href="">in</a>
          <a href="">tube</a>
          <a href="">twitter</a>
        </div>
      </div>

      <footer>
        <div className="footerUlDiv">
          <ul>
            <h3>Market</h3>
            <a href="">NFTs</a>
            <a href="">Arts</a>
            <a href="">Collection</a>
            <a href="">Virtual world</a>
          </ul>
          <ul>
            <h3>Info</h3>
            <a href="">Activity</a>
            <a href="">Stats</a>
            <a href="">Ranking</a>
          </ul>
          <ul>
            <h3>Company</h3>
            <a href="">About</a>
            <a href="">Support</a>
            <a href="">Features</a>
            <a href="">Top Creators</a>
          </ul>
          <ul>
            <h3>Resources</h3>
            <a href="">Info</a>
            <a href="">Affiliates</a>
            <a href="">Associated</a>
            <a href="">Blog</a>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default footer;
