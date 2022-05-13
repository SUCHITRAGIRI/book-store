import React from "react";
import FeatureAuthor from "../FeatureAuthors/FeatureAuthor";
import Footer from "../FooterContainer/Footer";
import GallaryCardContainer from "../GallaryContainer/GallaryCardContainer";
import NavBar from "../NavBar/NavBar";

function Home() {
  return (
    <div className="App">
      <div className="flat-banner">
        <img
          src="	https://d2g9wbak88g7ch.cloudfront.net/promotionimages/1_alltimefavourite.jpg"
          alt="banner img"
          style={{ maxWidth: "100%", marginTop: "6rem" }}
        />
      </div>
      <GallaryCardContainer />
      <FeatureAuthor />
    </div>
  );
}

export default Home;
