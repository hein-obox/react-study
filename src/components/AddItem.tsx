import { FormEvent, useRef } from "react";

interface Props {
  onSubmitForm?: (event: FormEvent<HTMLFormElement>) => void;
}

const AddItem = ({ onSubmitForm }: Props) => {
  const inputElement = useRef<HTMLInputElement | null>(null);

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    onSubmitForm?.(event);
    if (inputElement.current) inputElement.current.value = '';
  }

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input
          ref={inputElement}
          name="item_name"
        />

        <input type="submit" value="Add Item" />
      </form>
    </>
  );
};

export default AddItem;