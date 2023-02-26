import React, { useState } from "react";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import cart from "../assets/images/icon-cart.svg";

function Product() {
  const [amount, setAmount] = useState(0);
  const product = {
    name: "Fall Limited Edition Sneakers",
    company: "Sneaker Company",
    desc: "These low-profile sneakers are your perfect casual wear companion. Fearturing a durable rubber outer sole, they'll withstand everything the weather can offer.",
    cost: 250,
    sale: 50,
  };

  const finalCost =
    product.sale > 0
      ? ((product.cost * (100 - product.sale)) / 100).toFixed(2)
      : product.cost.toFixed(2);

  function handleIncrement(e) {
    e.preventDefault();
    setAmount((prev) => {
      return prev + 1;
    });
  }

  function handleDecrement(e) {
    e.preventDefault();
    if (amount > 0) {
      setAmount((prev) => {
        return prev - 1;
      });
    }
  }
  return (
    <section className="product-item">
      <article className="product-info">
        <p className="product-company">{product.company}</p>
        <h2 className="product-name">{product.name}</h2>
        <p className="product-desc">{product.desc}</p>

        <div className="product-pricing">
          <h2 className="product-price">${finalCost}</h2>
          <p className="product-discount">{product.sale}%</p>
          <p className="product-cost">${product.cost.toFixed(2)}</p>
        </div>

        <div className="interface-container">
          <div className="product-selection">
            <img
              src={minus}
              alt="minus-img"
              onClick={(e) => handleDecrement(e)}
            />
            <p className="product-amount">{amount}</p>
            <img
              src={plus}
              alt="plus-img"
              onClick={(e) => handleIncrement(e)}
            />
          </div>

          <button className="btn cart-btn">
            <img src={cart} alt="" />
            Add to cart
          </button>
        </div>
      </article>
    </section>
  );
}

export default Product;
