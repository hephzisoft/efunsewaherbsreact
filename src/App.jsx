
import { Routes, Route } from "react-router-dom";
import PageNotfound from "./components/PageNotfound";
import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";


function App() {
  return (
    <>
      <Nav />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
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
