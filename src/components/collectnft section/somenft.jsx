import React from "react";
import "../collectnft section/somenft.css";
import glassdata from "../assets/big-glass-data.jpg";

const Somenft = () => {
  return (
    <div  >
      <h1 className="collectsome">Collect Some Nfts</h1>
      <div className="nftboxDiv">
        <div className="nftbox">
          <img src="" alt="" />
          <div className="nftTag">
            <div className="namepriceTag">
              <div>
                <p>Glass data</p>
                <p>SAGE</p>f
              </div>
              <p>0.5ETH</p>
            </div>
            <button> Place A Bid</button>
          </div>
        </div>
        <div className="nftbox" id="nftbox2">
          <img src="" alt="" />
          <div className="nftTag">
            <div className="namepriceTag">
              <div>
                <p>house data</p>
                <p>SAGE</p>
              </div>
              <p>0.5ETH</p>
            </div>
            <button> Place A Bid</button>
          </div>
        </div>
        <div className="nftbox" id="nftbox3">
          <img src="" alt="" />
          <div className="nftTag">
            <div className="namepriceTag">
              <div>
                <p>Glass data</p>
                <p>SAGE</p>
              </div>
              <p>0.5ETH</p>
            </div>
            <button> Place A Bid</button>
          </div>
        </div>
        <div className="nftbox" id="nftbox4">
          <img src="" alt="" />
          <div className="nftTag">
            <div className="namepriceTag">
              <div>
                <p>Digi chain</p>
                <p>SAGE</p>
              </div>
              <p>0.5ETH</p>
            </div>
            <button> Place A Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Somenft;
