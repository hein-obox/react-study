import { useState } from "react";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";
import "./assets/css/App.css";

function App() {
  const [inputValue, setInputValue] = useState( '' );

  const [newListItemValue, setNewListItemValue] = useState<string[]>([ 'Demo value' ]);

  function getFormControl(form: HTMLFormElement, name: string) {
    const control = form?.elements.namedItem(name);

    return control;
  }

  const handleAddItemSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputFieldValue = (
      getFormControl(event.currentTarget, "item_name") as HTMLInputElement
    )?.value;

    setNewListItemValue((prevlistItems) => [ ...prevlistItems, inputFieldValue ]);
    setInputValue('');
  };

  return (
    <>
      <ToDoList
        listItems={newListItemValue}
      />

      <AddItem
        formInputValue={inputValue}
        onSubmitForm={handleAddItemSubmit}
        onChangeForm={setInputValue}
      />
    </>
  );
}

export default App;