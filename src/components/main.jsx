import React, { useState, useEffect } from "react";
import ins from "../assets/owner/instagram.png";
import twitter from "../assets/owner/twitter.png";
import more from "../assets/owner/more.png";
import "./main.css";

export default function Main({ selectedPunk, punkList }) {
  const [activedPunk, setActivedPunk] = useState(punkList[0]);

  useEffect(() => {
    setActivedPunk(punkList[selectedPunk]);
  }, [punkList, selectedPunk]);

  return (
    <div className="main">
      <div className="punkContainer">
        <img className="selectedPunk" src={activedPunk.image_url} alt="" />
      </div>

      <div className="punkDetails" style={{ color: "white" }}>
        <div className="title">
          {activedPunk.name}
          <span className="id">#{activedPunk.token_id}</span>
        </div>
        <div className="ownerImgContainer">
          <img src={activedPunk.owner.profile_img_url} alt="" />
          <div className="ownerAddress">{activedPunk.owner.address}</div>
        </div>
      </div>

      <div className="nameAndHandle">
        <div className="handler">
          <div className="handlerContainer">
            <img src={ins} alt="" style={{ width: "30px" }} />
          </div>
          <div className="handlerContainer">
            <img src={twitter} alt="" style={{ width: "30px" }} />
          </div>
          <div className="handlerContainer">
            <img src={more} alt="" style={{ width: "30px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
