import React from "react";
import "./CardSection.css";
import Card from "./Card";

function CardSection(props) {
  let result = props.result;
  return (
    <div className="cards-cont">
      {result.map((book) => {
        return (
          <Card
            previewLink={book.volumeInfo.previewLink}
            imageThumbnail={book.volumeInfo?.imageLinks?.thumbnail}
            alt={book.title}
          />
        );
      })}
    </div>
  );
}

export default CardSection;
