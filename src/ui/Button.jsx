import { Link } from "react-router-dom";

/* eslint-disable */
function Button({ children, disabled, to, size = "", onClick }) {
  const primaryStyles =
    "bg-yellow-400 hover:bg-yellow-300 uppercase font-semibold text-sm text-stone-800 px-4 py-3 inline-block tracking-wide rounded-full transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-yellow-600  focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-1";
  const smallStyles =
    "bg-yellow-400 hover:bg-yellow-300 uppercase font-semibold text-xs text-stone-800 px-3 py-1.5 inline-block tracking-wide rounded-full transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-1";
  const smallSecStyles =
    "hover:bg-stone-300 uppercase font-semibold text-stone-500 text-sm hover:text-stone-800 px-4 py-2.5 border-2 border-stone-400 inline-block tracking-wide rounded-full transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-stone-600 focus:outline-none focus:ring focus:ring-stone-500 focus:ring-offset-1";
  const roundStyles =
    "bg-yellow-400 hover:bg-yellow-300 uppercase font-semibold text-sm text-stone-800 w-8 h-8 inline-block tracking-wide rounded-full transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-yellow-600  focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-1";
  if (to) {
    return (
      <Link
        to={to}
        className={`${size === "small" ? smallStyles : size === "smallSec" ? smallSecStyles : primaryStyles}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${size === "small" ? smallStyles : size === "smallSec" ? smallSecStyles : size === "round" ? roundStyles : primaryStyles}`}
    >
      {children}
    </button>
  );
}

export default Button;
