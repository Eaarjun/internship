import React from "react";
import "./destination.css";
import empire from "../images/empire.jpg";
import rome from "../images/rome.jpg"
import tokyo from "../images/tokyo.jpg"

const Destination = () => {
  return (
    <>
      <div className="heading">
        <h1>Destination</h1>
      </div>
      {/* flex gallery  */}
      <div className="flex-container">

        <div className="flexCase">
          <div className="flex-item">
            <img src={empire} alt="empire-state-building" />
            <p>Empire State Building</p>
          </div>
        </div>

       
        <div className="flexCase">
          <div className="flex-item">
            <img src={rome} alt="empire-state-building" />
            <p>Rome</p>
          </div>
        </div>

        
        <div className="flexCase">
          <div className="flex-item">
            <img src={tokyo} alt="empire-state-building" />
            <p>Tokyo Japan</p>
          </div>
        </div>
        
        </div>
    </>
  );
};

export default Destination;
