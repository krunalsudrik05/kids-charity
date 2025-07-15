import React from "react";
import "./ainfocard.css";

const Ainfocard = ({ title, info }) => {
  return (
    <div className="ainfo">
      <div className="card">
        <div className="card-header">
          <h5>{title}</h5>
        </div>
        <div className="card-body">
          <p className="card-title">{info}</p>
          <a href="#" className="btn">
            GO TO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ainfocard;
