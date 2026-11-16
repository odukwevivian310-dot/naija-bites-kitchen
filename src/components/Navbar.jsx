import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// NAVBAR
// useState remembers if the mobile menu is open (true) or closed (false).
// Analogy: it's a light switch. Click the hamburger = flip the switch.
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart(); // read the cart count from the notice board

  // Close the menu after clicking a link (so it doesn't stay open on phones)
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        🍲 Naija Bites
      </Link>

      {/* Hamburger button: only visible on small screens (see CSS) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* className changes depending on state: "nav-links open" or just "nav-links" */}
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/menu" onClick={closeMenu}>Menu</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <NavLink to="/cart" onClick={closeMenu} className="cart-link">
          🛒 Cart <span className="badge">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
