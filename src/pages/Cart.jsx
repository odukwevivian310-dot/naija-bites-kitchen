import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// CART PAGE
function Cart() {
  const { cart, changeQty, removeItem, clearCart, totalPrice } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleCheckout() {
    setOrderPlaced(true); // show the success message
    clearCart();          // empty the cart
  }

  // After checkout, show a thank-you message
  if (orderPlaced) {
    return (
      <div className="section center">
        <h1 className="page-title">🎉 Order Placed!</h1>
        <p>Thank you! Your food is being prepared and will arrive soon.</p>
        <Link to="/menu" className="btn" onClick={() => setOrderPlaced(false)}>
          Order more
        </Link>
      </div>
    );
  }

  // Empty cart message
  if (cart.length === 0) {
    return (
      <div className="section center">
        <h1 className="page-title">Your Cart 🛒</h1>
        <p>Your cart is empty. Hungry? Let's fix that!</p>
        <Link to="/menu" className="btn">Browse Menu</Link>
      </div>
    );
  }

  return (
    <div className="section">
      <h1 className="page-title">Your Cart 🛒</h1>

      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-img" />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₦{item.price.toLocaleString()} each</p>
            </div>

            {/* Quantity counter: - 2 + */}
            <div className="qty">
              <button onClick={() => changeQty(item.id, -1)}>−</button>
              <span>{item.qty}</span>
              <button onClick={() => changeQty(item.id, +1)}>+</button>
            </div>

            <strong className="line-total">₦{(item.price * item.qty).toLocaleString()}</strong>

            <button className="remove" onClick={() => removeItem(item.id)} aria-label="Remove item">
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ₦{totalPrice.toLocaleString()}</h2>
        <div className="hero-buttons">
          <button className="btn outline" onClick={clearCart}>Clear Cart</button>
          <button className="btn" onClick={handleCheckout}>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
