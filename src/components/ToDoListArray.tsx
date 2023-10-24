interface Props {
    listItems: string[];
  }
  
  const ToDoListArray = ({ listItems }: Props) => {
    return (
      <>
        <h1>ToDoList Nieuw</h1>
  
        <ul className="list-group">
          {listItems.map((listItem: string) => (
            <li className="list-group-item" key={listItem}>
              {listItem}
            </li>
          ))}
        </ul>

        <br /><br /><br /><br /><br /><br />
      </>
    );
  };
  
  export default ToDoListArray;
  