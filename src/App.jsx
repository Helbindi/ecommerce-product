import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import ImageSlider from "./components/ImageSlider";
import Lightbox from "./components/Lightbox";
import { productData } from "./data/productImages";
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
  function addToCart(product) {
    setCart((prev) => {
      // Check if item already exist in Cart, if so update with new quantity
      if (prev.length > 0) {
        prev.forEach((item) => {
          if (item.name === product.name) {
            item.quantity = product.quantity;
          }
        });
        return [...prev];
      } else {
        return [...prev, product];
      }
    });
  }

  /* Function Todo: Remove product to cart
      input: Something to identify cart item
      output: remove product from cart State array 
  */
  function removeFromCart(product) {
    setCart((prev) => {
      const updated = prev.filter((item) => item.name !== product.name);
      return [...updated];
    });
  }
  return (
    <div className="main-container">
      <Navigation cart={cart} removeFromCart={removeFromCart} />
      {isActive && <Lightbox toggleLightbox={toggleLightbox} />}
      <section className="product-container">
        <ImageSlider toggleLightbox={toggleLightbox} />
        {productData.map((product) => (
          <Product key={product.name} product={product} addToCart={addToCart} />
        ))}
      </section>
    </div>
  );
}

export default App;
