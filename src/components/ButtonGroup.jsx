import Button from "./Button";

export default function ButtonGroup({
  handleMarkAllAsCompleted,
  handleMarkAllAsIncomplete,
  handleResetToInitial,
  handleRemoveAllItems,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsCompleted} buttonType="secondary">
        Mark all as completed
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
