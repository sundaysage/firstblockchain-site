import React from "react";
import "../collectnft section/somenft.css";
import glassdata from "../assets/big-glass-data.jpg";

const Somenft = () => {
  return (
    <div className="fathersomenft">
      <h1 className="collectsome">Collect Some Nfts</h1>
      <div className="nftboxDiv">
        <div className="nftboxing">
          <div className="imgdiv"></div>
          <div className="nftTag">
            <div  className="tagflex">
              <div>
                <p>Glass data</p>
                <p>SAGE</p>
              </div>
              <p>0.5ETH</p>
            </div>
            <button> Place A Bid</button>
          </div>

        </div>
        <div className="nftboxing">
          <div className="imgdiv"></div>
          <div className="nftTag">
            <div  className="tagflex">
              <div>
                <p>Glass data</p>
                <p>SAGE</p>
              </div>
              <p>0.5ETH</p>
            </div>
            <button> Place A Bid</button>
          </div>
        </div>

        <div className="nftboxing">
          <div className="imgdiv"></div>
          <div className="nftTag">
            <div  className="tagflex">
              <div>
                <p>Glass data</p>
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
