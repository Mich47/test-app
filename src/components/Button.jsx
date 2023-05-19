export const Button = ({ text = "Follow", onClickFn, isFollow }) => {
  return (
    <button
      className={`rounded-[10px] py-3.5 mx-auto w-[196px] shadow-btnShadow ${
        isFollow ? "bg-green" : "bg-white"
      } font-medium font-semibold uppercase text-black text-lg leading-[22px]`}
      type="button"
      onClick={onClickFn}
    >
      {text}
    </button>
  );
};
