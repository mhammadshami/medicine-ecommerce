import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  const incCartitems = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };

  const decCartitems = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="img">
            <img src={cover} alt="" />
            <button className="remove flexCenter">
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <p>{name}</p>
            <label htmlFor="">Unit Price ${price}</label>
            <div className="price">
              <div className="qty flexCent">
                <button className="plus" onClick={incCartitems}>
                  {" "}
                  <AiOutlinePlus />
                </button>
                <button className="num">{quantity}</button>
                <button className="minus" onClick={decCartitems}>
                  <AiOutlineMinus />
                </button>
              </div>
              <div className="priceTitle">${totalPrice.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
