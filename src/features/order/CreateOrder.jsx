import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { useState } from "react";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const userName = useSelector((state) => state.user.userName);
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-3 py-4">
      <h2 className="text-xl font-semibold mb-6">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="mb-3 flex flex-col gap-1">
          <label className="font-bold">First Name</label>
          <input
            type="text"
            defaultValue={userName}
            name="customer"
            required
            className="input"
          />
        </div>

        <div className="mb-3 flex flex-col gap-1">
          <label className="font-bold">Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input" />
            {formErrors?.phone && (
              <p className="text-xs sm:text-sm mt-1 text-red-500 bg-red-100 rounded-xl px-3 py-1.5">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-3 flex flex-col gap-1">
          <label className="font-bold">Address</label>
          <div>
            <input type="text" name="address" required className="input" />
          </div>
        </div>
        <div className="mb-10 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              className="w-5 h-5 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-1"
              // value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />

            <label htmlFor="priority" className="font-medium text-sm">
              Want to yo give your order priority?
            </label>
          </div>
          <p
            className={`text-xs text-stone-500 ${withPriority && "text-emerald-500"}`}
          >
            An extra 20% fees will be added to your bill if this box is checked!
          </p>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting
              ? "Placing Order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      "Please enter a valid phone number. We might need it to contact you.";
  }

  const newOrder = await createOrder(order);

  if (Object.keys(errors).length > 0) return errors;

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
