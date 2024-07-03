import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

// this file was used earlier 
export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
      // const itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'));
  // const [items, setItems] = useState(itemsFromLocalStorage || initialItems);
  // or
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('items')) || initialItems);
  const totalNumberOfItems = items.length;
  const selectedItems = items.filter(item => item.packed).length;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false
    };
    let newItems = [...items, newItem];
    setItems(newItems);
  }

  const handleRemoveAllItems = () => {
    setItems([]);
  }

  const handleResetToInitial = () => {
    setItems(initialItems);
  }

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  }

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  }

  const handleDeleteItem = (itemId) => {
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
  };

  const handleToggleItem = (itemId) => {
    const newItems = items.map(item => {
        if(item.id === itemId) {
          return {...item, packed: !item.packed}
        }
        return item;
      }
    );
    setItems(newItems);
  }

  return <ItemsContext.Provider value={{
    items,
    handleAddItem,
    handleDeleteItem,
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleRemoveAllItems,
    handleResetToInitial,
    handleToggleItem,
    totalNumberOfItems,
    selectedItems
    }}>
    {children}
    </ItemsContext.Provider>
}
