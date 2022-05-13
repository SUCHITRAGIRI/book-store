import React from "react";
import "./FeatureAuthor.css";

function FeatureAuthor() {
  return (
    <div className="feature-continue">
      <h2
        style={{
          color: "#d51912",
          textAlign: "center",
          paddingTop: "2rem",
        }}
      >
        Featured Author
      </h2>
      <div className="authors-cont">
        <img
          className="circle-img"
          src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/stephen-edwin-king.jpg"
          alt="avatar_img"
        />
        <img
          className="circle-img"
          src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/gayle-forman.jpg"
          alt="avatar_img"
        />
        <img
          className="circle-img"
          src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/dr-shashi-tharoor-2.jpg"
          alt="avatar_img"
        />
        <img
          className="circle-img"
          src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/dillian.jpg"
          alt="avatar_img"
        />
        <img
          className="circle-img"
          src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/download.jpg"
          alt="avatar_img"
        />
        <img
          className="circle-img"
          src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/sylvia2.jpg"
          alt="avatar_img"
        />
        <img
          className="circle-img"
          src="	https://d2g9wbak88g7ch.cloudfront.net/authorimages/arundhatistory_647_100316054702.jpg"
          alt="avatar_img"
        />
      </div>
    </div>
  );
}

export default FeatureAuthor;
