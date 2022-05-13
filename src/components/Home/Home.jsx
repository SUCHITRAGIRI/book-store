import React from "react";
import FeatureAuthor from "../FeatureAuthors/FeatureAuthor";
import GallaryCardContainer from "../GallaryContainer/GallaryCardContainer";
import CollectionSection from "./CollectionSection";

function Home() {
  return (
    <div className="App">
      <CollectionSection />
      <div className="flat-banner">
        <img
          src="	https://d2g9wbak88g7ch.cloudfront.net/promotionimages/1_alltimefavourite.jpg"
          alt="banner img"
          style={{ maxWidth: "100%", marginTop: ".2rem" }}
        />
      </div>
      <GallaryCardContainer />
      <FeatureAuthor />
    </div>
  );
}

export default Home;
