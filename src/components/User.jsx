import React, { useState } from "react";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

function User() {
  return (
    <div className="user-container">
      <img className="cart-img" src={cart} alt="shopping-cart-image" />
      <img className="avatar-img" src={avatar} alt="user-avatar-image" />
    </div>
  );
}

export default User;
