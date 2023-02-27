import React, { useState } from "react";
import cartIcon from "../assets/images/icon-cart.svg";
import avatarIcon from "../assets/images/image-avatar.png";
import CartItem from "./CartItem";

function User({ cart, removeFromCart }) {
  const [isActive, setIsActive] = useState(false);

  const userCart = (
    <div className="user-cart">
      <p className="cart-title">Cart</p>
      <hr />

      {cart?.map((item) => (
        <CartItem key={item.name} item={item} removeFromCart={removeFromCart} />
      ))}

      {cart.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <button className="btn checkout-btn" onClick={(e) => handleCheckOut(e)}>
          Checkout
        </button>
      )}
    </div>
  );

  function handleCheckOut(e) {
    e.preventDefault();
    if (cart.length > 0) {
      console.log("checkout");
    } else {
      console.error("Shopping Cart is empty");
    }
  }

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
      <div className="cart-container">
        <img
          className="cart-img"
          src={cartIcon}
          alt="shopping-cart-image"
          onClick={(e) => handleActive(e)}
        />
        {cart.length > 0 && <span className="cart-amount">{cart.length}</span>}
      </div>
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
