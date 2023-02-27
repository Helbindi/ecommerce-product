import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import ImageSlider from "./components/ImageSlider";
import Lightbox from "./components/Lightbox";
import { productData } from "./data/productData";
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
      if (prev.length > 0) {
        let updated = false;
        // Check if item already exist in Cart, if so update with new quantity
        prev.forEach((item) => {
          if (item.uid === product.uid) {
            item.quantity = product.quantity;
            updated = true;
          }
        });

        // Either update the existing cart or add a new item to card
        if (updated) {
          return [...prev];
        } else {
          return [...prev, product];
        }
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
      const updated = prev.filter((item) => item.uid !== product.uid);
      return [...updated];
    });
  }
  return (
    <div className="main-container">
      <Navigation cart={cart} removeFromCart={removeFromCart} />
      <section className="products-container">
        {productData.map((product) => (
          <div className="product-container" key={product.uid}>
            {isActive && (
              <Lightbox product={product} toggleLightbox={toggleLightbox} />
            )}
            <ImageSlider product={product} toggleLightbox={toggleLightbox} />
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
