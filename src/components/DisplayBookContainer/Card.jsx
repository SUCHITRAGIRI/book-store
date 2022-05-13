import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-cont">
      <a target="_blank" rel="noreferrer" href={props.previewLink}>
        <img
          className="card-img-top"
          src={props.imageThumbnail}
          alt={props.alt}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        />
      </a>
    </div>
  );
}

export default Card;
