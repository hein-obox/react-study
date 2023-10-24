interface Props {
    listItems: string[];
  }
  
  const ToDoList = ({ listItems }: Props) => {
    return (
      <>
        <h1>ToDo List</h1>
  
        <ul className="list-group">
          {listItems.map((listItem: string) => (
            <li className="list-group-item" key={listItem}>
              {listItem}
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default ToDoList;
  