import ToDoItem from "./ToDoItem";

interface Props {
  listItems: string[];
  onDeleteClickHandler: ( index: number ) => void;
  onUpdateClickHandler: ( itemValue: string, itemArrayIndex: number ) => void;
}

const ToDoList = ( { listItems, onDeleteClickHandler, onUpdateClickHandler } : Props ) => {
  return (
    <>
      <h1>ToDo List</h1>

      <ul className="list-group">
        { listItems.map( ( listItem: string, index: number ) => (
          <ToDoItem
            key={ listItem }
            listItem={ listItem }
            index={ index }
            onDeleteClickHandler={ onDeleteClickHandler }
            onUpdateClickHandler={ onUpdateClickHandler }
          />
        ) ) }
      </ul>
    </>
  );
};

export default ToDoList;

function setState( arg0: { listItem: string; } ) {
  throw new Error( "Function not implemented." );
}
