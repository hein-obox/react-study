// Instead of using React.FormEvent
import { FormEvent } from "react";

interface Props {
  onSubmitForm?: (event: FormEvent<HTMLFormElement>) => void;
  onChangeForm?: (newType: string) => void;
}

// I've changed it only to be uniform with App.tsx form.
function AddItem(props: Props) {

  // I found it to be better practice because in the future you might accept more props and this looks a little better to my taste.
  const { onSubmitForm } = props;

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
}

export default AddItem;