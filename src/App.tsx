import { FormEvent, useState } from "react";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";
import "./assets/css/App.css";

const App = () => {
  const [itemArray, setItemArray] = useState<string[]>([ 'Demo value' ]);

  function getFormControl(form: HTMLFormElement, name: string) {
    const control = form?.elements.namedItem(name);

    return control;
  }

  const handleAddItemSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputFieldValue = (
      getFormControl(event.currentTarget, "item_name") as HTMLInputElement
    )?.value;

    setItemArray((prevlistItems) => [ ...prevlistItems, inputFieldValue ]);
  };

  const handleOnDeleteClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const itemValue = event.currentTarget.id,
      itemArrayIndex = itemArray.indexOf( itemValue );

    setItemArray((prevlistItems) => [...prevlistItems.slice(0, itemArrayIndex), ...prevlistItems.slice(itemArrayIndex + 1)] );
  };

  const handleOnUpdateClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const itemValue = event.currentTarget.previousSibling?.nodeValue?.toString(),
      itemArrayIndex = + ( event.currentTarget.dataset.index ?? 0 );

    const newList = itemArray.map( ( listItem, index ) => itemArrayIndex === index 
      ? listItem = itemValue
      : listItem );

    setItemArray( newList );
  }

  return (
    <>
      <ToDoList
        listItems={itemArray}
        onDeleteClickHandler={handleOnDeleteClickHandler}
        onUpdateClickHandler={handleOnUpdateClickHandler}
      />

      <AddItem
        onSubmitForm={handleAddItemSubmit}
      />
    </>
  );
};

export default App;