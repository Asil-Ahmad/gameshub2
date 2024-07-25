import React, { useState } from "react";

const Cart = ({ cartItems, setCartItems }) => {
  const [price, setPrice] = useState(0);
  return (
    <div>
      {cartItems?.map((item) => (
        <div>
          <div>
            <img src={item.imgURL} alt="" />
            <p>{item.label}</p>
          </div>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button>Remove</button>
          </div>
        </div>
      ))}
      <div>
        <span>Total Price</span>
        <span>Rs - {price}</span>
      </div>
    </div>
  );
};

export default Cart;
