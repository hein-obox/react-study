interface Props {
    listItems: string[];
    onDeleteClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
  }
  
  const ToDoList = ({ listItems, onDeleteClickHandler }: Props) => {
    return (
      <>
        <h1>ToDo List</h1>
  
        <ul className="list-group">
          {listItems.map((listItem: string) => (
            <li className="list-group-item" key={listItem}>
              <span>{listItem}</span>

              <button
                id={listItem}
                onClick={onDeleteClickHandler}
              >Delete item</button>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default ToDoList;
  