import PropTypes from "prop-types";
import { STATUS } from "../../constants/status.constants";

export const Button = ({ status, text, onClickFn }) => {
  return (
    <button
      disabled={status === STATUS.loading}
      type="button"
      onClick={onClickFn}
      className="rounded-lg bg-indigo-600 px-8 py-2.5 text-lg font-semibold font-medium text-white shadow-btnShadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  status: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClickFn: PropTypes.func,
};
