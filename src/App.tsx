import { FormEvent, useState } from "react";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";
import "./assets/css/App.css";

const App = () => {
  const [itemArray, setItemArray] = useState<string[]>( [ 'Demo value' ] );

  function getFormControl( form: HTMLFormElement, name: string ) {
    const control = form?.elements.namedItem( name );

    return control;
  }

  const handleAddItemSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    const inputFieldValue = (
      getFormControl( event.currentTarget, "item_name" ) as HTMLInputElement
    )?.value;

    setItemArray(( prevlistItems ) => [ ...prevlistItems, inputFieldValue ] );
  };

  const handleOnDeleteClickHandler = ( deleteIndex: number ) => {
    setItemArray( ( prevlistItems ) => prevlistItems.filter( ( _, currIndex ) => currIndex !== deleteIndex ) );
  };

  const handleOnUpdateClickHandler = ( itemValue: string, itemArrayIndex: number ) => {
    setItemArray( prevList => prevList.map( ( listItem, index ) => itemArrayIndex === index
      ? itemValue
      : listItem ) );
    // // Alt
    // setItemArray(prevList => [...prevList.slice(0, itemArrayIndex), itemValue, ...prevList.slice(itemArrayIndex + 1)]);
  }

  return (
    <>
      <ToDoList
        listItems={ itemArray }
        onDeleteClickHandler={ handleOnDeleteClickHandler }
        onUpdateClickHandler={ handleOnUpdateClickHandler }
      />

      <AddItem
        onSubmitForm={ handleAddItemSubmit }
      />
    </>
  );
};

export default App;