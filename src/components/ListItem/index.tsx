import * as C from "./styles";
import { useState } from "react";
import { Item } from "../../types/item";

type Props = {
  item: Item;
};

function ListItem({ item }: Props) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </C.Container>
  );
}

export default ListItem;
