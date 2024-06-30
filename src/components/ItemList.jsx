import { useState } from "react";
import EmptyVeiw from "./EmptyVeiw";
import Select from "react-select";


const sortingOptions = [
{
  label: 'sort by Default',
  value: 'default'
},
{
  label: 'sort by packed',
  value: 'packed'
},
{
  label: 'sort by unpacked',
  value: 'unpacked'
}
];
export default function ItemList({ items, handleDeleteItem, handleToggleItem }) {
  const [sortBy, setSortBy] = useState('default');

  // here we dont want to modify original copy of items. so, we use [...items] to create new copy of array.
  const sortedItems = [...items].sort((a, b) => {
    if(sortBy === 'packed') {
      return b.packed - a.packed;
    }
    if(sortBy === 'unpacked') {
      return a.packed - b.packed;
    }
    return;
  })

  return (
    <ul className="item-list"> 
      {
        items.length === 0 ? <EmptyVeiw /> : null
        // items.length === 0 && <EmptyVeiw />
      }
      {
                items.length > 0 ? <section className="sorting">
                  <Select 
                    options={sortingOptions} 
                    onChange={(option) => setSortBy(option.value)}
                    default  
                  />
                </section> : null
      }
      {
      sortedItems.map((item) => {
        return <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem} 
        handleToggleItem={handleToggleItem}/>;
      })}
    </ul>
  );
}

function Item({item, handleDeleteItem, handleToggleItem}) {
  return(
    <li className="item">
      <label>
      <input onChange={() => handleToggleItem(item.id)} checked={item.packed} type="checkbox"/>
        {item.name}
      </label>
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      </li>
  )
}