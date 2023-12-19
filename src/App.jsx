import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import PageNotfound from "./components/PageNotfound";
import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";


function App() {
  return (
    <>
    <Nav />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </>
  );
}

export default App
