import { Link } from "react-router-dom";

export const ButtonBack = () => {
  return (
    <Link
      to={"/"}
      className="w-24 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-sm text-center font-semibold font-medium text-white shadow-btnShadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
    >
      Back
    </Link>
  );
};
