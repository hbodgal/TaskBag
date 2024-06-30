import { useState } from "react"
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"
import { initialItems } from "../lib/constants"

function App() {
  const [items, setItems] = useState(initialItems);
  const totalNumberOfItems = items.length;
  const selectedItems = items.filter(item => item.packed).length;
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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header totalNumberOfItems={totalNumberOfItems} selectedItems={selectedItems}/>
        <ItemList items={items} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem}/>
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          />
      </main>
      <Footer />
    </>
  )
}

export default App;
