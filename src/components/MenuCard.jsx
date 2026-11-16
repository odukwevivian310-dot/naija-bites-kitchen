import { useState } from "react";
import { useCart } from "../context/CartContext";

// MENU CARD (reusable component)
// Analogy: a cookie cutter. We write it ONCE, then stamp it out for every dish.
// The "dish" prop is the dough: different dish data = different cookie.
function MenuCard({ dish }) {
  const { addToCart } = useCart();

  // Each card remembers by itself if it was "favourited" (useState)
  const [liked, setLiked] = useState(false);

  // Small message that appears after adding to cart
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(dish);
    setAdded(true);
    // hide the message again after 1.5 seconds
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="card">
      <img src={dish.image} alt={dish.name} className="card-img" />

      <div className="card-body">
        <div className="card-top">
          <h3>{dish.name}</h3>
          {/* onClick = event handling. Flip liked between true and false */}
          <button
            className="heart"
            onClick={() => setLiked(!liked)}
            aria-label="Favourite"
          >
            {liked ? "❤️" : "🤍"}
          </button>
        </div>

        <span className="tag">{dish.category}</span>
        <p className="card-desc">{dish.description}</p>

        <div className="card-bottom">
          {/* toLocaleString adds commas: 3500 -> 3,500 */}
          <strong className="price">₦{dish.price.toLocaleString()}</strong>
          <button className="btn small" onClick={handleAdd}>
            {added ? "Added ✔" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
