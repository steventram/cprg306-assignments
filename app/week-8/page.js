"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page7() {
  let itemList = itemsData.map((item) => ({ ...item }));

  const [items, setItems] = useState(itemList);

  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (addedItem) => {
    setItems([...items, addedItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItem = item.name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    setSelectedItemName(cleanedItem.toLowerCase().split(",")[0].trim());
  };

  return (
    <main className="bg-orange-200 p-5">
      <h1 className="font-bold text-4xl m-5 underline text-center">
        Shopping List
      </h1>
      <div className="flex justify-center">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
