import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({selectedItems, totalNumberOfItems}) {
  return (
    <header>
        <Logo />
        <Counter selectedItems={selectedItems} totalNumberOfItems={totalNumberOfItems}/>
    </header>
  )
}
