import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./index.css";

// main.jsx is the front door of the app.
// It finds <div id="root"> in index.html and draws our App inside it.
// BrowserRouter  -> lets us switch pages without reloading
// CartProvider   -> puts the cart on the "notice board" for every component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
