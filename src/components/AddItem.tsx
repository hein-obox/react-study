// Instead of using React.FormEvent
import { FormEvent, useRef } from "react";

interface Props {
  onSubmitForm?: (event: FormEvent<HTMLFormElement>) => void;
}

// I've changed it only to be uniform with App.tsx form.
function AddItem(props: Props) {

  // I found it to be better practice because in the future you might accept more props and this looks a little better to my taste.
  const { onSubmitForm } = props;

  // Alternative way to store values (in this case: a pointer to the input element), without triggering re-renders:
  // useRef hook is used to store values without triggering re-rendering, as opposed to useState.
  // When useState values change, the dependant component rerenders, unless you use other hook inside of it to prevent re rendering (such as useEffect)
  // useRef variables are an object, and the value is stored in the 'current' property => inputEl.current 
  // The reason it is set to null, is because the initialization takes place before the component is rendered, and the input element is not yet created.
  // When the input element is created, by using ref={[variable name]}, a pointer to the input element is stored in the variable.
  // See 3rd return statement for an example of how to use it.
  const inputEl = useRef<HTMLInputElement>(null);

  // I've learned that it was better practice to use handlers for function props.
  // There's a name convention for that, prop arguments are named as you did: on[function name] and inner-component function are named [function name]Handler / handle[function name].
  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    onSubmitForm?.(event);
    if (inputEl.current) inputEl.current.value = '';
  }

  function handleChangeInput() {
    // logic
    // console.log(inputEl.current?.value);
  }

  // If you Do need to know the input value at all times:
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        ref={inputEl}
        name="item_name"
      />
      <input type="submit" value="Add Item" onChange={handleChangeInput} />
    </form>
  );
}

export default AddItem;