import { STATUS } from "../../constants/status.constants";

export const ButtonLoadMore = ({ status, onClickFn }) => {
  return (
    <button
      disabled={status === STATUS.loading}
      type="button"
      onClick={onClickFn}
      className="w-[196px] rounded-lg bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold font-medium text-white uppercase shadow-btnShadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
    >
      Load more...
    </button>
  );
};
