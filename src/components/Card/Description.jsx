import PropTypes from "prop-types";

export const Description = ({ followers, tweets }) => {
  return (
    <div className="mx-auto flex flex-col gap-4 items-center">
      <h3 className="font-medium uppercase text-white text-xl leading-6">
        {tweets} tweets
      </h3>
      <h3 className="font-medium uppercase text-white text-xl leading-6">
        {followers.toLocaleString("en-US")} followers
      </h3>
    </div>
  );
};

Description.propTypes = {
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.string.isRequired,
};
