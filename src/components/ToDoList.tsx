import { useRef } from "react";

interface Props {
    listItems: string[];
    onDeleteClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
    onUpdateClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
  }
  
  const ToDoList = ({ listItems, onDeleteClickHandler, onUpdateClickHandler }: Props) => {
    return (
      <>
        <h1>ToDo List</h1>
  
        <ul className="list-group">
          {listItems.map((listItem: string, index: number) => (
            <li className="list-group-item" key={listItem}>
              <input
                value={listItem}
                className="list-group-edit-field"
                onChange={  (event) => event.target.value}
              />

              <button
                className="list-group-edit-button"
                data-index={ index }
                onClick={onUpdateClickHandler}
              >Update</button>

              <button
                className="list-group-delete-button"
                id={listItem}
                onClick={onDeleteClickHandler}
              >Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default ToDoList;

function setState(arg0: { listItem: string; }) {
  throw new Error("Function not implemented.");
}
  