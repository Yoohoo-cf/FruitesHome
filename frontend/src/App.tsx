import Home from "./components/Home/Home";
import "./index.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <Home />;

  const content = (
    <>
      <Navbar viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer />
    </>
  );
  return content;
}

export default App;
