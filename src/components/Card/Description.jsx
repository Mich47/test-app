import PropTypes from "prop-types";

export const Description = ({ followers, tweets }) => {
  return (
    <div className="py-[10px] mx-auto flex flex-col gap-4 items-center">
      <h3 className="font-medium uppercase text-white text-xl">
        {tweets} tweets
      </h3>
      <h3 className="font-medium uppercase text-white text-xl">
        {followers.toLocaleString("en-US")} followers
      </h3>
    </div>
  );
};

Description.propTypes = {
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.string.isRequired,
};
