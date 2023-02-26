import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import ImageSlider from "./components/ImageSlider";
import Lightbox from "./components/Lightbox";
import "./index.css";

function App() {
  const [isActive, setisActive] = useState(false);
  const [cart, setCart] = useState([]);

  function toggleLightbox() {
    if (!isActive) {
      setisActive(true);
    } else {
      setisActive(false);
    }
  }

  /* Function Todo: Add product to cart
      input: Product - thumbnail, name, finalPrice, quantity
      output: Add product as Object to cart State array 
  */
  function addCart() {}

  /* Function Todo: Remove product to cart
      input: Something to identify cart item
      output: remove product from cart State array 
  */
  function removeCart() {}
  return (
    <div className="main-container">
      <Navigation />
      {isActive && <Lightbox toggleLightbox={toggleLightbox} />}
      <section className="product-container">
        <ImageSlider toggleLightbox={toggleLightbox} />
        <Product />
      </section>
    </div>
  );
}

export default App;
