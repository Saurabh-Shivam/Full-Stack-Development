import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import Characters from "./pages/Characters";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {

  let category = true;

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home category={!category} />} />
        <Route path="/comics" element={<Comics category={category} />} />
        <Route path="/series" element={<Series category={category} />} />
        <Route path="/characters" element={<Characters category={category} />} />
        <Route path="/events" element={<Events category={category} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
