import { useState } from "react";
import { initialItems } from "../lib/constant";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = function (newItemText) {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = function (id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = function (id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = function () {
    setItems([]);
  };

  const handleResetToInitial = function () {
    setItems(initialItems);
  };

  const handleMarkAllAsCompleted = function () {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = function () {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header
          totalItems={items.length}
          packedItems={items.filter((i) => i.packed).length}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleMarkAllAsCompleted={handleMarkAllAsCompleted}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleResetToInitial={handleResetToInitial}
          handleRemoveAllItems={handleRemoveAllItems}
          handleAddItem={handleAddItem}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
