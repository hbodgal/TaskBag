import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

// eslint-disable-next-line react/prop-types
export default function Sidebar() {
  return (
    <div className="sidebar">
      <AddItemForm />
      <ButtonGroup />
    </div>
  )
}
