import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import Characters from "./pages/Characters";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import { url } from "./data.js";
import { useEffect, useState } from "react";

function App() {
  const [cardValue, setCardValue] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const jsonData = await res.json();
      // Save data
      setCardValue(jsonData.data.results);
      console.log("Printing card value in app js file");
      console.log(cardValue);
      console.log("printing json data");
      console.log(jsonData);
    } catch (error) {
      console.log("Data Not Found");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home cardValue={cardValue} />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/series" element={<Series />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
