// import { seconaryButtons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems, 
  handleResetToInitial, 
  handleMarkAllAsComplete, 
  handleMarkAllAsIncomplete
}) {
  const secondaryButtons = [
    {
        text: '"Mark All as complete"',
        onClick: handleMarkAllAsComplete
    },
    {
        text: 'Mark all as incomplete',
        onClick: handleMarkAllAsIncomplete
    },
    {
        text: 'Reset to initial',
        onClick: handleResetToInitial
    },
    {
        text: 'Remove all items',
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
