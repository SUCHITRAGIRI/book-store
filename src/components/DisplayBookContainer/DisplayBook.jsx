import CardSection from "./CardSection";

function DisplayBook(props) {
  console.log(props.result);
  let result = props.result;
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
