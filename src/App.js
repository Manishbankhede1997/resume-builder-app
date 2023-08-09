import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider
import store from "../src/Redux/Store";
import Detailpage from "./pages/DetailPage/Detailpage";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/AboutPage/About";

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/detailPage" element={<Detailpage />} />
            <Route path="/aboutPage" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
