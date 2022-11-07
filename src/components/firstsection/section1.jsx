import React from "react";
import "../firstsection/section.css";
import blockimg from "../assets/greenblockchain.jpg";
import chain from "../assets/digitalChain.jpg"
const Section1 = () => {
  return (
    <div>
      <div>
        <div className="marketplacediv">
          <div className="marketDiv">
            <h1 className="best">Best NFTs Marketplace.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil <br />
              non facere aperiam nisi, sequi, animi quos adipisci dolores <br />
              temporibus ipsam blanditiis, consectetur ullam laboriosam rem et <br />
              suscipit perspiciatis placeat ut.
            </p>
            <div className="getDiv">
              <button className="GetStartedBt">Get Started</button>
              <button className="CreateNftsBt">Create NFTs</button>
            </div>
          </div>
          <div className="blockDiv">
            <img className="blockimg" src={chain} alt="" srcset="" />
          </div>
        </div>
        <div className="coinDiv">
            <p>Mini Coin</p>
            <p>Sage Coin</p>
            <p>Wine Coin</p>
            <p>Planet Coin</p>
            <p>Top up</p>
            <p>Mini Coin</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
