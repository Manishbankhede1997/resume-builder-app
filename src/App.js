import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailpage from "./pages/DetailPage/Detailpage";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
