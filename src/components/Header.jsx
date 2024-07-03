import Counter from "./Counter";
import Logo from "./Logo";
// import { useItemContext } from "../lib/hooks";
import { useItemsStore } from "../store/itemsStore";

export default function Header() {
  // const {
  //   selectedItems,
  //   totalNumberOfItems
  // } = useItemContext();
  const selectedItems = useItemsStore(state => state.totalSelectedItems);
  const totalNumberOfItems = useItemsStore(state => state.totalNumberOfItems);

  return (
    <header>
        <Logo />
        <Counter selectedItems={selectedItems} totalNumberOfItems={totalNumberOfItems}/>
    </header>
  )
}
