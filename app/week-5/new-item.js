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
    <form onSubmit={handleSubmit} className="bg-indigo-900 p-2 rounded-md">
      <div>
        <input
          type="text"
          placeholder="Item name"
          className="rounded-md text-center w-full border-2 border-slate-400"
          onChange={handleNameChange}
          value={name}
          required
        />
      </div>

      <div>
        <p
          className="pt-2 text-white text-2xl text-center"
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

      <div className="flex justify-center items-center">
        {/* <label>produce category</label> */}
        <select
          onChange={handleCategoryChange}
          value={category}
          className="text-center mb-3 rounded-md p-1 border-2 border-slate-400"
        >
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
      <div className="flex justify-center items-center">
        <button className="border-2 border-slate-400 bg-white flex justify-center align-middle rounded-md text-sm p-1 hover:bg-sky-500 active:bg-cyan-800">
          Add to List
        </button>
      </div>
    </form>
  );
}
