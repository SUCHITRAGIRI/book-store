import React from "react";
import "./GallaryCardContainer.css";

function GallaryCardContainer() {
  return (
    <div
      style={{
        // border: "solid white",
        height: "30rem",
        background: "black",
        marginTop: ".2rem",
      }}
    >
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a
              href="https://www.bookswagon.com/promo-best-seller/upto-45-off/34D89429CCC4"
              title="Upto 45% Discount"
            >
              <img
                className="d-block"
                src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/71_inr.jpg"
                alt="Upto 45% Discount"
                style={{ height: "30rem", maxWidth: "100%" }}
              />
            </a>
          </div>
          <div className="carousel-item">
            <a
              href="https://www.bookswagon.com/promo-best-seller/minimum-40-off/20E06FE2A5BC"
              title="Minimum 40% Discount and Above"
            >
              <img
                className="d-block"
                src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/70_inr.jpg"
                alt="Minimum 40% Discount and Above"
                style={{ height: "30rem", maxWidth: "100%" }}
              />
            </a>
          </div>
          <div className="carousel-item">
            <a
              href="https://www.bookswagon.com/book/midnight-library-matt-haig/9781786892720"
              title="A book for your comfort by Matt Haig, Add it to your TBR now"
            >
              <img
                className="d-block"
                src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/72_inr.jpg"
                alt="A book for your comfort by Matt Haig, Add it to your TBR now"
                style={{ height: "30rem", maxWidth: "100%" }}
              />
            </a>
          </div>
          <div className="carousel-item">
            <a
              href="https://www.bookswagon.com/promo/manga-mania-best-seller/9B7R9K3R2W"
              title="Fan of Manga Comics? Buy it now at discount"
            >
              <img
                className="d-block"
                src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/73_inr.jpg"
                alt="Fan of Manga Comics? Buy it now at discount"
                style={{ height: "30rem", maxWidth: "100%" }}
              />
            </a>
          </div>
          <div className="carousel-item">
            <a
              href="https://www.bookswagon.com/book/my-life-in-full-indra/9780593191798"
              title="Buy New Memoir that has moved the world"
            >
              <img
                className="d-block"
                src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/77_inr.jpg"
                alt="Buy New Memoir that has moved the world"
                style={{ height: "30rem", maxWidth: "100%" }}
              />
            </a>
          </div>
          <div className="carousel-item">
            <a
              href="https://www.bookswagon.com/book/house-in-cerulean-sea-tj/9781250816498"
              title="Fantasy Winner of 2021. If you haven't read it, you're missing out on a lot!"
            >
              <img
                className="d-block w-100"
                src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/76_inr.jpg"
                alt="Fantasy Winner of 2021. If you haven't read it, you're missing out on a lot!"
                style={{ height: "30rem", maxWidth: "100%" }}
              />
            </a>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default GallaryCardContainer;
