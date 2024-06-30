import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

// eslint-disable-next-line react/prop-types
export default function Sidebar({ handleAddItem, handleRemoveAllItems, handleResetToInitial, handleMarkAllAsComplete, handleMarkAllAsIncomplete  }) {
  return (
    <div className="sidebar">
      <AddItemForm 
        handleAddItem={handleAddItem}/>
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems} 
        handleResetToInitial={handleResetToInitial} 
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete} />
    </div>
  )
}
