import React, { useState, useEffect } from "react";
import ins from "../assets/owner/instagram.png";
import twitter from "../assets/owner/twitter.png";
import check from "../assets/owner/check.png";
import "./main.css";

export default function Main({ selectedPunk, punkList }) {
  const [activedPunk, setActivedPunk] = useState(punkList[0]);

  useEffect(() => {
    setActivedPunk(punkList[selectedPunk]);
  }, [punkList, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkContainer">
          <img className="selectedPunk" src={activedPunk.image_url} alt="" />
        </div>

        <div className="punkDetails" style={{ color: "white" }}>
          <div className="title">{activedPunk.name}</div>
          <div className="id">#{activedPunk.id}</div>
        </div>
      </div>

      <div className="owner">
        <div className="ownerImgContainer">
          <img src={activedPunk.image_thumbnail_url} alt="" />
        </div>

        <div className="ownerDetails">
          <div className="nameAndHandle">
            <span></span>
            <div className="handler">
              <div className="handlerContainer">
                <img src={ins} alt="" style={{ width: "30px" }} />
              </div>
              <div className="handlerContainer">
                <img src={twitter} alt="" style={{ width: "30px" }} />
              </div>
              <div className="handlerContainer">
                <img src={check} alt="" style={{ width: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
