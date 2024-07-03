import { useRef, useState } from "react";
import Button from "./Button";
// import { useItemContext } from "../lib/hooks";
import { useItemsStore } from "../store/itemsStore";

export default function AddItemForm() {
    // const {handleAddItem} = useItemContext();
    const handleAddItem = useItemsStore((state) => state.addItem);
    const [itemText, setItemText] = useState("");
    const inputRef = useRef();

    const handleSubmit = (e) => {
            e.preventDefault();
    
            if(!itemText.trim()) {
                // alert
                document.querySelector("input").focus();
                inputRef.current.focus();
                return;
            }
            
            handleAddItem(itemText);
            setItemText("");
        }
  return (
    <form onSubmit={handleSubmit}>
        <h2>Add a Task</h2>
        <input 
        type="text" 
        ref={inputRef}
        value={itemText} 
        onChange={(e) => {
            setItemText(e.target.value);
        }}
        autoFocus
        />
        <Button>Add a Task</Button>
    </form>
  )
}
