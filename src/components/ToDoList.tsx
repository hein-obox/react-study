interface Props {
  listItems: string[];
}

// I've changed it only to be uniform with App.tsx form.
function ToDoList ({ listItems }: Props) {

  return (
    <section className="todo-list-container">
      <h1>ToDo List</h1>

      <ul className="list-group">
        {listItems.map((listItem: string) => (

          // For more complex examples, you might want to create a component for each list item.
          <li className="list-group-item" key={listItem}>
            {listItem}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ToDoList;
