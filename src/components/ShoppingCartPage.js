import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
  const { cartItems, incrementItem, decrementItem, deleteItem } =
    useContext(CartContext);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Continue shopping</Link>
        </p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => incrementItem(item.id)}>+</button>
              <button onClick={() => decrementItem(item.id)}>-</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          ))}
          <h2>Total: ${totalCost}</h2>
          <button>Checkout (Coming Soon)</button>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
