import React from "react";
import image from "../assets/images/image-product-1.jpg";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";

function Product({ data }) {
  return (
    <section className="product-item">
      <div className="img-container">
        <img className="product-img" src={image} alt="" />
      </div>

      <article className="product-info">
        <p className="product-company">Sneaker Company</p>
        <h2 className="product-name">Fall Limited Edition Sneakers</h2>
        <p className="product-desc">
          These low-profile sneakers are your perfect casual wear companion.
          Fearturing a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>

        <div className="product-pricing">
          <h2 className="product-price">$125.00</h2>
          <p className="product-discount">50%</p>
          <p className="product-cost">$250.00</p>
        </div>

        <div className="product-selection">
          <img src={minus} alt="minus-img" />
          <p className="product-amount">0</p>
          <img src={plus} alt="plus-img" />
        </div>

        <button className="btn cart-btn">Add to cart</button>
      </article>
    </section>
  );
}

export default Product;
