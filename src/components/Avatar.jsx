import avatar from "../assets/avatar.svg";

export const Avatar = () => {
  return (
    <div className="max-w-fit rounded-full mx-auto border-8 border-blue shadow-userShadow">
      <img src={avatar} alt="avatar" />
    </div>
  );
};
