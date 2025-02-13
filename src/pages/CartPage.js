import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/counter/cardSlice";
import "./styles/cartPage.css"

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h1 className="text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center mt-3">Your cart is empty!</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-md-4 mb-3">
              <div className="card cart h-100">
                <img
                  src={item.thumbnail}
                  className="card-img-cart"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <p className="card-text">{item.description}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
