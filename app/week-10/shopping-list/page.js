"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
// import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service.js";

export default function Page7() {
  const { user } = useUserAuth();

  // let itemList = itemsData.map((item) => ({ ...item }));

  const [items, setItems] = useState([]);

  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (item) => {
    const id = await addItem(user.uid, item);
    setItems([...items, { id: id, ...item }]);
  };

  const handleItemSelect = (item) => {
    const cleanedItem = item.name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    setSelectedItemName(cleanedItem.toLowerCase().split(",")[0].trim());
  };

  return (
    <main>
      {user ? (
        <div className="bg-orange-200 p-5">
          <h1 className="font-bold text-4xl m-5 underline text-center">
            Shopping List
          </h1>
          <div className="flex justify-center">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center text-3xl font-bold">
          <p>You must be logged in to view this page</p>
        </div>
      )}
    </main>
  );
}
