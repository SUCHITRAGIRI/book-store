import React, { useState } from "react";
import "./NavBar.css";
import "bootstrap-icons/font/bootstrap-icons.css"; //not working bootstrap icons here!
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import CardSection from "../DisplayBookContainer/CardSection";
import DisplayBook from "../DisplayBookContainer/DisplayBook";

function NavBar() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_BOOK_API_KEY);
  
  const navigate = useNavigate();

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("You clicked submit." + book);
    //
    navigate("/results", <DisplayBook result={result} />);
  }

  return (
    <div className="nav-main">
      <div className="row">
        {/* logo */}
        <div className="col-sm1">
          <a href={"https://www.bookswagon.com/"}>
            <img
              src={"https://www.bookswagon.com/images/logos/logo-new.png"}
              id="ctl00_imglogo"
              alt="Bookswagon-24x7 online bookstore"
            />
          </a>
        </div>
        {/* serch box */}
        <div className="col-sm2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-10"
                placeholder="Search by Title, Author, Publisher"
                autoComplete="off"
                onChange={handleChange}
              />
              <button className="btn btn-warning" type="submit">
                <FaSearch style={{ fontSize: "1.8rem" }} />
              </button>
            </div>
          </form>
        </div>
        {/* result pass as prop */}
      </div>
    </div>
  );
}

export default NavBar;
