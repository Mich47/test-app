import PropTypes from "prop-types";

export const Button = ({ text = "Follow", onClickFn, isFollowing }) => {
  return (
    <button
      className={`rounded-[10px] py-3.5 mx-auto w-[196px] shadow-btnShadow ${
        isFollowing
          ? "bg-green hover:bg-greenHover"
          : "bg-white hover:bg-whiteHover"
      } font-medium font-semibold uppercase text-black text-lg leading-[22px] transition-colors`}
      type="button"
      onClick={onClickFn}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool,
  onClickFn: PropTypes.func,
};
