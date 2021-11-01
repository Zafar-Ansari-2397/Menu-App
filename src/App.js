import React, { useState } from "react";
import Categories from "./components/Categories";
import items from "./components/data";
import Menu from "./components/Menu";

function App() {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  console.log(allCategories);

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => category === item.category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Food Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
