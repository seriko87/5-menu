import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";

const arr = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [category, setCategory] = useState(arr);
  const [menu, setMenu] = useState(items);

  const checkCategory = (cat) => {
    const newMenu = items.filter((item) => {
      return item.category === cat;
    });
    if (cat === "all") {
      setMenu(items);
    } else {
      setMenu(newMenu);
    }
  };

  return (
    <>
      <h1>Our Menu</h1>
      <Categories category={category} checkCategory={checkCategory} />
      <Menu props={menu} />
    </>
  );
}

export default App;
