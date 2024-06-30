import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_auto_1fr_auto]">
      {isLoading && <Loader />}
      <div className="px-2 flex items-center justify-between text-stone-200 bg-stone-800">
        <p className="text-sm font-light">
          Made By:<span className="font-medium">Yousef Tarek</span>
        </p>
        <a
          className="underline text-sm"
          href="https://github.com/youseftrek/react-food-delivery"
        >
          Github repo &rarr;
        </a>
      </div>
      <Header />
      <div className="overflow-scroll scrollbar-hide">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
