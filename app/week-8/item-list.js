"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  if (sortBy == "name") items.sort((a, b) => a.name.localeCompare(b.name));

  if (sortBy == "category")
    items.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      else {
        return a.quantity - b.quantity;
      }
    });

  const changeSortByEvent = (event) => setSortBy(event.target.value);

  return (
    <main>
      <div className="flex justify-center items-center">
        <h2>Sort By: </h2>
        <button
          type="button"
          className={`border-2 border-black p-1 hover:bg-red-500 active:bg-red-700 flex-row mr-2 ${
            sortBy == "name" ? "bg-red-700" : "bg-red-300"
          }`}
          onClick={changeSortByEvent}
          value={"name"}
        >
          Name
        </button>
        <button
          type="button"
          className={`border-2 border-black p-1 hover:bg-red-500 active:bg-red-700 ${
            sortBy == "category" ? "bg-red-700" : "bg-red-300"
          }`}
          onClick={changeSortByEvent}
          value={"category"}
        >
          Category
        </button>
      </div>

      <div className="text-center">
        {items.map((item) => (
          <Item
            shoppingItem={item}
            key={item.id}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </div>
    </main>
  );
}
