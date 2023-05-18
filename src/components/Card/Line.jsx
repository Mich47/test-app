export const Line = ({ children }) => {
  return (
    <div className="w-[380px] ml-[-20px] pt-[10px] pb-[52px]">
      <div className="relative h-2 shadow-lineShadow bg-white">{children}</div>
    </div>
  );
};
