interface Props {
  listItems: string[];
  item1: string;
  productType?: string;
}

const ToDoList = ({ listItems, item1, productType }: Props) => {
  return (
    <>
      <h1>ToDoList</h1>

      <ul className="list-group">
        {listItems.map((listItem: string) => (
          <li className="list-group-item" key={listItem}>
            {listItem}
          </li>
        ))}

        <li className="list-group-item" key={item1}>{item1}</li>
        <li className="list-group-item" key={productType}>{productType}</li>
      </ul>
    </>
  );
};

export default ToDoList;
