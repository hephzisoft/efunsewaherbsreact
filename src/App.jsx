
import { Routes, Route } from "react-router-dom";
import PageNotfound from "./components/PageNotfound";
import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {
  return (
    <>
<SpeedInsights/>
      <Nav />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App
