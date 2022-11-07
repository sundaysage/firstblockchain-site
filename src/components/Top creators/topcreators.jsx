import React from "react";
import "../Top creators/topcreators.css";
import blueguy from "../assets/alien.png"

const topcreators = () => {
  return (
    <div className="maintopcreators">
      <div className="topcreatorsDiv">
        <h1>Top Creators</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          temporibus, nemo at cupiditate voluptatum voluptates beatae hic
          accusamus ex dolore praesentium obcaecati perspiciatis quidem odio!
          Deserunt maiores nostrum quod modi.
        </p>
      </div>
      <div className="cardContainer">
        <div className="card">
          <div className="imageDiv"></div>
          <p>Emenike </p>
          <a href="">
            <button>Purchase</button>
          </a>
        </div>
        <div className="card">
          <div className="imageDiv"></div>
          <p>Sunday</p>
          <a href="">
            <button>Purchase</button>
          </a>
        </div>
        <div className="card">
          <div className="imageDiv"></div>
          <p>Sage </p>
          <a href="">
            <button>Purchase</button>
          </a>
        </div>
        <div className="card">
          <div className="imageDiv"></div>
          <p>Ukpo </p>
          <a href="">
            <button>Purchase</button>
          </a>
        </div>
      </div>

      <div className="fatheraliendiv">
        <div className="aliendiv">
          <img src={blueguy} alt="" />
        </div>
        <div className="updatediv">
          <h2>Subscribe And Get Lastest News Update About NFTs.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            aspernatur tenetur. Eius molestiae unde ipsa. Eius accusantium,
            tempore quo animi commodi aut sapiente ullam provident iusto error
            sequi illum porro.
          </p>
          <a href="mailto:semenike60@gmail.com"><button>Mail</button></a>
        </div>
      </div>
    </div>
  );
};

export default topcreators;
