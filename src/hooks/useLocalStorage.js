import { useState, useEffect } from "react";

// CUSTOM HOOK
// Analogy: useState is a normal notebook that gets wiped when you close the app.
// This hook is a notebook that ALSO copies everything into the browser's drawer
// (localStorage), so when the customer comes back, their cart is still there.
export default function useLocalStorage(key, startingValue) {
  // 1. When the app first loads, check the drawer for saved data
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : startingValue;
    } catch (error) {
      return startingValue; // if anything goes wrong, just start fresh
    }
  });

  // 2. Every time the value changes, copy it into the drawer (useEffect = side effect)
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
