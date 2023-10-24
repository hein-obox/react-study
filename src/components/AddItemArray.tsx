interface Props {
  formInputValue: string;
  onSubmitForm?: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeForm?: (newType: string) => void;
}

const AddItemArray = ({ formInputValue, onSubmitForm, onChangeForm }: Props) => {
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input name="item_name" value={formInputValue} onChange={(event) => onChangeForm?.(event.target.value)} />

        <input type="submit" />
      </form>
    </>
  );
};

export default AddItemArray;
