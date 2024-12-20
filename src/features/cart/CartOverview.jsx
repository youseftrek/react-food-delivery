import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartItems, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const TotalCartItems = useSelector(getTotalCartItems);
  const TotalCartPrice = useSelector(getTotalCartPrice);
  if (!TotalCartItems) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 text-sm md:text-base fixed bottom-0 w-full">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{TotalCartItems} pizzas</span>
        <span>{formatCurrency(TotalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
