import { useState } from "react";
import menuData from "../data/menuData";
import MenuCard from "../components/MenuCard";

// MENU / PRODUCTS PAGE
function Menu() {
  // Two pieces of state: what the user typed in search, and which category button is active
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Build the list of category buttons from the data (no duplicates)
  const categories = ["All", ...new Set(menuData.map((dish) => dish.category))];

  // FILTER: keep only dishes that match BOTH the category and the search text
  // Analogy: a sieve that only lets matching dishes through.
  const filteredDishes = menuData.filter((dish) => {
    const matchesCategory = category === "All" || dish.category === category;
    const matchesSearch = dish.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="section">
      <h1 className="page-title">Our Menu</h1>

      {/* Search box (controlled input: its value comes from state) */}
      <input
        type="text"
        className="search"
        placeholder="🔍 Search for a dish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category buttons */}
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? "filter active" : "filter"}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Show cards, or a friendly message if nothing matched */}
      {filteredDishes.length > 0 ? (
        <div className="grid">
          {filteredDishes.map((dish) => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <p className="center">No dishes found. Try another search 🍽️</p>
      )}
    </div>
  );
}

export default Menu;
