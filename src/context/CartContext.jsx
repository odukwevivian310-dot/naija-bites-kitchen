import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// CONTEXT
// Analogy: props are like passing a note hand-to-hand down a line of people.
// Context is like a notice board in the middle of the restaurant that EVERYONE can read.
// The cart lives on this notice board so Navbar, Menu and Cart pages all see the same cart.

const CartContext = createContext();

// The "Provider" wraps the whole app (see main.jsx) and holds the cart data + actions
export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("naija-bites-cart", []);

  // Add a dish. If it is already in the cart, just increase its quantity.
  function addToCart(dish) {
    const alreadyInCart = cart.find((item) => item.id === dish.id);

    if (alreadyInCart) {
      setCart(
        cart.map((item) =>
          item.id === dish.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...dish, qty: 1 }]);
    }
  }

  // Change quantity by +1 or -1. If it reaches 0, remove the item.
  function changeQty(id, amount) {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, qty: item.qty + amount } : item))
        .filter((item) => item.qty > 0)
    );
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  // Totals (reduce = add everything up one by one)
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Everything we put in "value" can be used by any component
  const value = { cart, addToCart, changeQty, removeItem, clearCart, totalItems, totalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// A small shortcut so components can write useCart() instead of useContext(CartContext)
export function useCart() {
  return useContext(CartContext);
}
