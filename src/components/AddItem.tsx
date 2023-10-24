interface Props {
  productTypeValue?: string;
  onProductTypeChange?: (newType: string) => void;
}

const AddItem = ({ productTypeValue, onProductTypeChange }: Props) => {
  return (
    <>
      <form>
        <input
          value={productTypeValue}
          onChange={(event) => onProductTypeChange?.(event.target.value)}
        />
      </form>
    </>
  );
};

export default AddItem;
