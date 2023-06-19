import PropTypes from "prop-types";
import avatarDefault from "../../assets/images/avatar.png";

export const Avatar = ({ avatar, name }) => {
  return (
    <div className="w-20 h-20 rounded-full mx-auto border-8 border-white bg-[#5735A4]">
      <div className="w-20 h-20 rounded-full shadow-userShadow ml-[-8px] mt-[-8px] p-2">
        <img
          className="w-full h-full rounded-full"
          src={avatar ? avatar : avatarDefault}
          alt={name ? name : "avatar"}
        />
      </div>
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};
