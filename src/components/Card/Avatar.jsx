import PropTypes from "prop-types";
import avatarDefault from "../../assets/images/avatar.png";

export const Avatar = ({ avatar, name }) => {
  return (
    <div className="relative z-10 mx-auto before:content-[''] before:absolute before:-z-10 before:top-1/2 before:left-[-150px] before:transform before:-translate-y-1/2 before:w-[380px] before:h-2 before:shadow-lineShadow before:bg-white">
      <div className="w-20 h-20 rounded-full border-8 border-white bg-[#5735A4]">
        <div className="w-20 h-20 rounded-full shadow-userShadow ml-[-8px] mt-[-8px] p-2">
          <img
            className="w-full h-full rounded-full"
            src={avatar ? avatar : avatarDefault}
            alt={name ? name : "avatar"}
          />
        </div>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};
