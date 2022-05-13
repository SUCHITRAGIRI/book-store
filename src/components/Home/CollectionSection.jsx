import React from "react";
import "./CollectionSection.css";

function CollectionSection() {
  return (
    <div className="collection-main-cont">
      <div className="left-section">
        <ul style={{ listStyleType: "none" }}>
          <li>Book</li>
          <li>
            <a href="https://www.bookswagon.com/promo-best-seller/new-arrivals/99325F010C89">
              New Arrivals
            </a>
          </li>
          <li>
            <a href="https://www.bookswagon.com/promo-best-seller/box-sets/389DA2389287">
              Box Sets
            </a>
          </li>
          <li>
            <a href="https://www.bookswagon.com/promo-best-seller/best-seller/03AC998EBDC2">
              Best sellers
            </a>
          </li>
          <li>
            <a href="https://www.bookswagon.com/promo/fiction-books/9D7S5K6U3M">
              Fiction Books
            </a>
          </li>
          <li>
            <a href="https://www.bookswagon.com/promo-best-seller/award-winning/2109CDC4B4DC">
              Award Winners
            </a>
          </li>
          <li>
            <a href="https://www.bookswagon.com/featured-authors">
              Featured Authors
            </a>
          </li>
        </ul>
      </div>
      <div className="right-section">
        <a href="https://play.google.com/store/apps/details?id=com.bookswagon">
          <img
            src="https://www.bookswagon.com/images/svg/android_withhover.svg"
            alt="android-logo"
            style={{ height: "95%" }}
          />
        </a>
      </div>
    </div>
  );
}

export default CollectionSection;
