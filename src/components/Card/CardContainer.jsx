import PropTypes from "prop-types";

export const CardContainer = ({ children }) => {
  return (
    <div className="relative rounded-[20px] bg-blue-gradient p-5 w-[380px] h-[460px]">
      {children}
    </div>
  );
};

CardContainer.propTypes = {
  children: PropTypes.node,
};
