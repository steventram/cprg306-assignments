"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page7() {
  let itemList = itemsData.map((item) => ({ ...item }));

  const [items, setItems] = useState(itemList);

  const handleAddItem = (addedItem) => {
    setItems([...items, addedItem]);
  };

  return (
    <main className="bg-orange-200 p-5">
      <h1 className="font-bold text-4xl m-5 underline text-center">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
