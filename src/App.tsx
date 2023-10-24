import Alert from "./components/Alert";
import "./App.css";
import Test from "./Test";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import AddItem from "./components/AddItem";
import AddItemArray from "./components/AddItemArray";
import Heading from "./components/Heading";
import ToDoListArray from "./components/ToDoListArray";

function App() {
  const [inputValue, setInputValue] = useState( '' );
  const [productType, setProductType] = useState<undefined | string>("");
  const [newListItemValue, setNewListItemValue] = useState<string[]>(
    ['first', 'second']
  );

  const [item1, setItem1] = useState("Item 1");

  // 👇️ const employees: {salary: number;name: string;}[]
  const [employees, setEmployees] = useState<
    { salary: number; name: string }[]
  >([]);

  const [listItems, setListItems] = useState<
    string[]
  >(['first','second']);

  function getFormControl(form: HTMLFormElement, name: string) {
    const control = form?.elements.namedItem(name);

    return control;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputField = (
      getFormControl(event.currentTarget, "item_name") as HTMLInputElement
    )?.value;

    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { salary: 100, name: inputField },
    ]);
  };

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
      <ToDoListArray listItems={newListItemValue} />

      <AddItemArray
        formInputValue={inputValue}
        onSubmitForm={handleAddItemSubmit}
        onChangeForm={setInputValue}
      />

      
      <br />
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="item_name" />

          <input type="submit" />
        </form>

        {employees.map((employee, index) => {
          return (
            <div key={index}>
              <h2>
                salary: {employee.salary} / name: {employee.name}
              </h2>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Heading title="abc" timeStamp={new Date().getMonth()} />
      <ToDoList
        listItems={listItems}
        item1={item1}
        productType={productType}
      ></ToDoList>
      <br />
      <br />
      <br />
      Add item
      <AddItem
        productTypeValue={productType}
        onProductTypeChange={setProductType}
      />
    </>
  );
}

function AppBak() {
  const name = "Yes",
    items = ["Ajax", "Psv"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const myClickHandler = () => setAlertDisplay(true),
    myAlertClickHandler = () => setAlertDisplay(false);

  const [alertDisplay, setAlertDisplay] = useState(false);

  return (
    <>
      <Button type="secondary" text="Warning testje" onClick={myClickHandler} />
      {alertDisplay && (
        <Alert onAlertClick={myAlertClickHandler}>
          Text with <strong>HTML</strong>
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
      <h1>Hi hi {name}</h1>;
      <Test />
    </>
  );
}

export default App;
