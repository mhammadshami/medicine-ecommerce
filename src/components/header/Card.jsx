import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { product } from "../../assets/data/data";
import CardItems from "./CartIems";
import { useSelector } from "react-redux";

const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(null);
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  // total
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nooverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {cartItems.map((item) => (
          <CardItems
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
        <div className="checkOut">
          <button>
            <span>Proceed To Checkout</span>
            <label htmlFor="">$ {total}</label>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
