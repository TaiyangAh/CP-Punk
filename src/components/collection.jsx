import React from "react";
import Card from "./card";
import "./collection.css";

export default function Collection({ punkList, setSelectedPunk }) {
  return (
    <div className="collection">
      {punkList.map((punk) => (
        <div
          key={punk.id}
          onClick={() => {
            setSelectedPunk(punk.token_id);
          }}
        >
          <Card
            key={punk.id}
            id={punk.id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
      ))}
    </div>
  );
}
