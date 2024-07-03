// import { seconaryButtons } from "../lib/constants";
import { useItemsStore } from "../store/itemsStore";
import Button from "./Button";
// import { useItemContext } from "../lib/hooks";

export default function ButtonGroup() {
  // const {
  //   handleMarkAllAsComplete,
  //   handleMarkAllAsIncomplete,
  //   handleResetToInitial,
  //   handleRemoveAllItems
  // } = useItemContext();
  // commented this and added store
  const handleMarkAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const handleMarkAllAsIncomplete = useItemsStore((state) => state.markAllAsIncomplete);
  const handleResetToInitial = useItemsStore((state) => state.resetToInitial);
  const handleRemoveAllItems = useItemsStore((state) => state.removeAllItems);

    const secondaryButtons = [
    {
        text: '"Mark all as Complete"',
        onClick: handleMarkAllAsComplete
    },
    {
        text: 'Mark all as Incomplete',
        onClick: handleMarkAllAsIncomplete
    },
    {
        text: 'Reset to Initial',
        onClick: handleResetToInitial
    },
    {
        text: 'Remove all Tasks',
        onClick: handleRemoveAllItems
    }
  ];

  return (
    <section className="button-group">
        {
            secondaryButtons.map(({text, onClick}) => {
                return <Button key={text} buttonType="secondary" onClick={onClick}>{ text }</Button>
            })
        }
    </section>
  )
}
