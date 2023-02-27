import React from "react";
import cartIcon from "../assets/images/icon-cart.svg";
import deleteIcon from "../assets/images/icon-delete.svg";

function CartItem({ item, removeFromCart }) {
  function handleDelete(e) {
    e.preventDefault();
    removeFromCart(item);
  }
  return (
    <div className="cart-product">
      <img className="item-img" src={cartIcon} alt="" />
      <p className="item-name">{item.name}</p>
      <p className="item-price">
        ${item.cost} x {item.quantity}
        <strong>${item.cost * item.quantity}</strong>
      </p>
      <img
        className="delete-img"
        src={deleteIcon}
        alt="delete-image"
        onClick={(e) => handleDelete(e)}
      />
    </div>
  );
}

export default CartItem;
