import React from "react";
import Card from "./card";
import "./collection.css";

export default function Collection({ punkList }) {
  return (
    <div className="collection">
      {punkList.map((punk) => (
        <div key={punk.id}>
          <Card
            key={punk.id}
            id={punk.id}
            name={punk.name}
            traits={punk.traits}
            img={punk.image_url}
          />
        </div>
      ))}
    </div>
  );
}
