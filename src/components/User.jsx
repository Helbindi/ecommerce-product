import React, { useState } from "react";
import cartIcon from "../assets/images/icon-cart.svg";
import avatarIcon from "../assets/images/image-avatar.png";
import deleteIcon from "../assets/images/icon-delete.svg";

function User() {
  const [isActive, setIsActive] = useState(false);

  const userCart = (
    <div className="user-cart">
      <p className="cart-title">Cart</p>
      <hr />
      <div className="cart-product">
        <img className="item-img" src={cartIcon} alt="" />
        <p className="item-name">Product Name</p>
        <p className="item-price">
          Product Cost x 3 <strong>Total</strong>
        </p>
        <img className="delete-img" src={deleteIcon} alt="" />
        <button className="btn checkout-btn">Checkout</button>
      </div>
    </div>
  );

  function handleActive(e) {
    e.preventDefault();
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  return (
    <div className="user-container">
      <img
        className="cart-img"
        src={cartIcon}
        alt="shopping-cart-image"
        onClick={(e) => handleActive(e)}
      />
      <img
        className="avatar-img hover"
        src={avatarIcon}
        alt="user-avatar-image"
        onClick={(e) => handleActive(e)}
      />
      {isActive && userCart}
    </div>
  );
}

export default User;
