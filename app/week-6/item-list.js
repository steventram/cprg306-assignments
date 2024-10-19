"use client";

import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
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
      {/* <Item shoppingItem={items.map((item) => item)} key={item.id} /> */}
      <Item shoppingItem={items[0]} />
      <Item shoppingItem={items[1]} />
      <Item shoppingItem={items[2]} />
      <Item shoppingItem={items[3]} />
      <Item shoppingItem={items[4]} />
      <Item shoppingItem={items[5]} />
      <Item shoppingItem={items[6]} />
      <Item shoppingItem={items[7]} />
      <Item shoppingItem={items[8]} />
      <Item shoppingItem={items[9]} />
      <Item shoppingItem={items[10]} />
      <Item shoppingItem={items[11]} />
    </main>
  );
}
