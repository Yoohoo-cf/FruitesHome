import Home from "./components/Home/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
