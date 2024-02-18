import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enable or not

  const [alert, setAlert] = useState(null); // show alert

  const showAlert = (message, type) => {
    // type parameter will take the bootstrap types for whowing different types of alert
    // here alert has become an object
    setAlert({
      msg: message,
      type: type,
    });
    // code to automatically hide the alert message after few seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // function for toggle mode and alert
  const toggleMode = (cls) => {
    // For adding multiple color mode buttons
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#192734";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
    

      {/* <About /> */}
    </>
  );
}

export default App;
