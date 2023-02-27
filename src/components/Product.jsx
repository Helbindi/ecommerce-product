import React, { useState } from "react";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import cart from "../assets/images/icon-cart.svg";

function Product({ product, addToCart }) {
  const [quantity, setQuanitity] = useState(0);

  const finalCost =
    product.sale > 0
      ? ((product.cost * (100 - product.sale)) / 100).toFixed(2)
      : product.cost.toFixed(2);

  function handleIncrement(e) {
    e.preventDefault();
    setQuanitity((prev) => {
      return prev + 1;
    });
  }

  function handleDecrement(e) {
    e.preventDefault();
    if (quantity > 0) {
      setQuanitity((prev) => {
        return prev - 1;
      });
    }
  }

  function handleClick(e) {
    e.preventDefault();
    if (quantity > 0) {
      const cartItem = {
        image: product.images[0].thumbnail,
        name: product.name,
        cost: finalCost,
        quantity: quantity,
      };
      addToCart(cartItem);
    } else {
      return console.error("Cannot add zero items to Shopping Cart");
    }
  }
  return (
    <section className="product-item">
      <article className="product-info">
        <p className="product-company">{product?.company}</p>
        <h2 className="product-name">{product?.name}</h2>
        <p className="product-desc">{product?.desc}</p>

        <div className="product-pricing">
          <h2 className="product-price">${finalCost}</h2>
          <p className="product-discount">{product?.sale}%</p>
          <p className="product-cost">${product?.cost.toFixed(2)}</p>
        </div>

        <div className="interface-container">
          <div className="product-selection">
            <img
              src={minus}
              alt="minus-img"
              onClick={(e) => handleDecrement(e)}
            />
            <p className="product-quantity">{quantity}</p>
            <img
              src={plus}
              alt="plus-img"
              onClick={(e) => handleIncrement(e)}
            />
          </div>

          <button className="btn cart-btn" onClick={(e) => handleClick(e)}>
            <img src={cart} alt="" />
            Add to cart
          </button>
        </div>
      </article>
    </section>
  );
}

export default Product;
