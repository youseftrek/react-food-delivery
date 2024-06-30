/*eslint-disable */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decItemQuantity,
  getCurrentQuantityById,
  incItemQuantity,
} from "./cartSlice";

export const UpdateItemQuantity = ({ pizzaId }) => {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button onClick={() => dispatch(decItemQuantity(pizzaId))} size="round">
        -
      </Button>
      <span className="font-semibold">{currentQuantity}</span>
      <Button onClick={() => dispatch(incItemQuantity(pizzaId))} size="round">
        +
      </Button>
    </div>
  );
};
