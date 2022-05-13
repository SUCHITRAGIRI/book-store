import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardSection from "../DisplayBookContainer/CardSection";
import DisplayBook from "../DisplayBookContainer/DisplayBook";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Footer from "../FooterContainer/Footer";

console.log(CardSection);

function App() {
  return (
   
      <Router>
         <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/results" element={<DisplayBook />}></Route>
        </Routes>
        <Footer />
        </div>
      </Router>
   
  );
}

export default App;
