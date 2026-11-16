import { useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menuData";
import MenuCard from "../components/MenuCard";

function Home() {
  // INTERACTIVE ELEMENT: "Surprise me" button picks a random dish.
  // Starts as null (nothing picked yet).
  const [surprise, setSurprise] = useState(null);

  function pickRandomDish() {
    const randomIndex = Math.floor(Math.random() * menuData.length);
    setSurprise(menuData[randomIndex]);
  }

  // Only show the first 3 dishes as "featured"
  const featured = menuData.slice(0, 3);

  return (
    <div>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-text">
          <h1>Naija Bites Kitchen</h1>
          <h2>Welcome! Real Nigerian food, delivered hot to your door. 🔥</h2>
          <p>
            We cook your favourite Nigerian meals the way mama makes them: fresh
            ingredients, bold flavours and generous portions. Order in a few
            taps and relax while we do the cooking.
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn">Order Now</Link>
            <Link to="/about" className="btn outline">Our Story</Link>
          </div>
        </div>
        <img src="/images/hero.svg" alt="Delicious Nigerian food" className="hero-img" />
      </section>

      {/* ---------- SURPRISE ME ---------- */}
      <section className="section center">
        <h2>Can't decide what to eat?</h2>
        <button className="btn" onClick={pickRandomDish}>🎲 Surprise Me</button>

        {/* Conditional rendering: only show the box if a dish was picked */}
        {surprise && (
          <div className="surprise-box">
            <p>How about...</p>
            <h3>{surprise.name} (₦{surprise.price.toLocaleString()})</h3>
            <p>{surprise.description}</p>
            <Link to="/menu" className="btn small">Go to menu</Link>
          </div>
        )}
      </section>

      {/* ---------- FEATURED DISHES ---------- */}
      <section className="section">
        <h2 className="section-title">Customer Favourites</h2>
        <div className="grid">
          {/* .map() loops over the array and makes one card per dish */}
          {featured.map((dish) => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* ---------- WHY US ---------- */}
      <section className="section light">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="grid">
          <div className="info-box"><h3>🚚 Fast Delivery</h3><p>Hot food at your door in 45 minutes or less.</p></div>
          <div className="info-box"><h3>🌶️ Authentic Taste</h3><p>Traditional recipes made with real local ingredients.</p></div>
          <div className="info-box"><h3>💰 Fair Prices</h3><p>Big portions that will not break your pocket.</p></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
