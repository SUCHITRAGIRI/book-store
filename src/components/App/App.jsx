import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardSection from "../DisplayBookContainer/CardSection";
import DisplayBook from "../DisplayBookContainer/DisplayBook";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Footer from "../FooterContainer/Footer";
import { createContext, useState } from "react";

console.log(CardSection);
export let globalData = createContext();

function App() {
  const [searchData, serSearchData] = useState("");
  return (
    <globalData.Provider value={{ searchData, serSearchData }}>
      <Router basename={window.location.pathname || ""}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/results" element={<DisplayBook />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </globalData.Provider>
  );
}

export default App;
