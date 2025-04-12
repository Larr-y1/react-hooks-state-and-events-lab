
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false); // 1. Set up state

  // 2. Use state to conditionally apply class
  const appClass = darkMode ? "App dark" : "App light";

  // 3. Add an event handler to toggle the state
  function handleDarkModeClick() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* 4. Attach event handler to button */}
        <button onClick={handleDarkModeClick}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

