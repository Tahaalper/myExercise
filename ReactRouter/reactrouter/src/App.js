import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/404";
import ProductDetail from "./Pages/ProductDetail";
function App() {
  return (
    <div> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/product-detail/:productId" element={<ProductDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
