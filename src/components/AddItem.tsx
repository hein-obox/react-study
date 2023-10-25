// Instead of using React.FormEvent
import { FormEvent } from "react";

interface Props {
  onSubmitForm?: (event: FormEvent<HTMLFormElement>) => void;
}

const AddItem = ({ onSubmitForm }: Props) => {

  // I've learned that it was better practice to use handlers for function props.
  // There's a name convention for that, prop arguments are named as you did: on[function name] and inner-component function are named [function name]Handler / handle[function name].
  function handleSubmitForm(event: FormEvent<HTMLFormElement>) { onSubmitForm?.(event); }

  // To avoid re-renders of this component, this is an alternative, as long as you don't need to know the input value at all times
  return (
    <form onSubmit={handleSubmitForm}>
      <input name="item_name" />
      <input type="submit" value="Add Item" />
    </form>
  );
};

export default AddItem;