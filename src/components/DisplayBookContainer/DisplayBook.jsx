import CardSection from "./CardSection";
import { useContext } from "react";
import { globalData } from "../App/App";

function DisplayBook(props) {
  let { searchData } = useContext(globalData);
  console.log(searchData);
  let result = searchData;
  return (
    <div
      className="display-container"
      style={{ border: "solid green", marginTop: "10rem" }}
    >
      <h1>Book Search App</h1>
      <CardSection result={result} />
    </div>
  );
}

export default DisplayBook;
