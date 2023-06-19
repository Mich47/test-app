import PropTypes from "prop-types";
import { Logo } from "./Logo";

export const CardContainer = ({ children }) => {
  return (
    <div className="relative rounded-[20px] bg-blue-gradient p-5 w-[380px] h-[460px]">
      <Logo />
      <div className="flex flex-col gap-[26px] pt-[158px] pb-4 px-4 w-full h-full bg-picture bg-no-repeat bg-top-2 bg-custom">
        {children}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  children: PropTypes.node,
};
