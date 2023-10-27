import { FormEvent, useState } from "react";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";
import "./assets/css/App.css";

function App() {
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

  return (
    <>
      <ToDoList
        listItems={itemArray}
        onDeleteClickHandler={handleOnDeleteClickHandler}
      />

      <AddItem
        onSubmitForm={handleAddItemSubmit}
      />
    </>
  );
}

export default App;