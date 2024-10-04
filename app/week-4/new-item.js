"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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
  return (
    <main className="bg-gray-900-200">
      <p className="pt-2 text-white text-2xl">Quantity: {quantity}</p>
      <div className="p-3 space-x-2">
        <button
          onClick={decrement}
          className="w-28 font-bold bg-red-400 text-white hover:bg-red-700  disabled:bg-slate-400 active:bg-red-300 rounded-xl"
          disabled={decrementDisabled}
        >
          -
        </button>
        <button
          onClick={increment}
          className="w-28 font-bold bg-green-400 text-white hover:bg-green-700  disabled:bg-slate-400 active:bg-green-300 rounded-xl"
          disabled={incrementDisabled}
        >
          +
        </button>
      </div>
    </main>
  );
}
