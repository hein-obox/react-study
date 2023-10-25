import { useState } from "react";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";
import "./assets/css/App.css";

function App() {
  const [newListItemValue, setNewListItemValue] = useState<string[]>(['Demo value']);

  function getFormControl(form: HTMLFormElement, name: string) {
    const control = form?.elements.namedItem(name);

    return control;
  }

  const handleAddItemSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputFieldElement = (
      getFormControl(event.currentTarget, "item_name") as HTMLInputElement
    );
    if (!inputFieldElement) return
    const inputFieldValue = inputFieldElement.value
    inputFieldElement.value = '';
    setNewListItemValue((prevlistItems) => [...prevlistItems, inputFieldValue]);
  };

  return (
    <>
      <ToDoList
        listItems={newListItemValue}
      />

      <AddItem
        onSubmitForm={handleAddItemSubmit}
      />
    </>
  );
}

export default App;