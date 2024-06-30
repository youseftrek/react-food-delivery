/*eslint-disable */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { delItem } from "./cartSlice";

export const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <Button size="small" onClick={() => dispatch(delItem(pizzaId))}>
      delete
    </Button>
  );
};
