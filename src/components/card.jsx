import React from "react";
import weth from "../assets/weth.png";
import "./card.css";

export default function Card({ id, name, traits, image }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} alt="" className="wethImage" />
          <div className="price">{traits[0].value}</div>
        </div>
      </div>
    </div>
  );
}
