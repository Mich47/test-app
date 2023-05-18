export const Button = ({ text = "Follow", handleClick, isFollow }) => {
  return (
    <button
      className={`rounded-[10px] py-[14px] mx-auto w-[196px] shadow-btnShadow ${
        isFollow ? "bg-green" : "bg-white"
      } font-medium uppercase text-black text-lg leading-[22px]`}
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
