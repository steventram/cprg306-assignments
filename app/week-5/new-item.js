"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  let incrementDisabled = false;
  let decrementDisabled = false;

  if (quantity == 1) {
    decrementDisabled = true;
  }
  if (quantity == 20) {
    incrementDisabled = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let item = {
      itemName: name,
      itemQuantity: quantity,
      itemCategory: category,
    };

    setName("");
    setQuantity(1);
    setCategory("produce");

    alert(`
      Name: ${item.itemName}
      Quantity: ${item.itemQuantity}
      Category: ${item.itemCategory}
      `);
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>item name</label>
        <input type="text" onChange={handleNameChange} value={name} required />
      </div>

      <div>
        <p
          className="pt-2 text-white text-2xl"
          onChange={handleQuantityChange}
          value={quantity}
        >
          Quantity: {quantity}
        </p>
        <div className="p-3 space-x-2">
          <button
            type="button"
            onClick={decrement}
            className="w-28 font-bold bg-red-400 text-white hover:bg-red-700  disabled:bg-slate-400 active:bg-red-300 rounded-xl"
            disabled={decrementDisabled}
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className="w-28 font-bold bg-green-400 text-white hover:bg-green-700  disabled:bg-slate-400 active:bg-green-300 rounded-xl"
            disabled={incrementDisabled}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label>produce category</label>
        <select onChange={handleCategoryChange} value={category}>
          <option selected value="produce">
            produce
          </option>
          <option value="dairy">dairy</option>
          <option value="bakery">bakery</option>
          <option value="meat">meat</option>
          <option value="frozen foods">frozen foods</option>
          <option value="canned goods">canned goods</option>
          <option value="dry goods">dry goods</option>
          <option value="beverages">beverages</option>
          <option value="snacks">snacks</option>
          <option value="household">household</option>
          <option value="other">other</option>
        </select>
      </div>
      <div>
        <button className="border-slate-800 border-2">Add to List</button>
      </div>
    </form>
  );
}
