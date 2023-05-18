import avatarDefault from "../../assets/avatar.svg";
import { Line } from "./Line";

export const Avatar = ({ avatar, name }) => {
  return (
    <Line>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full mx-auto border-8 border-white bg-[#5735A4]">
        <div className="w-20 h-20 rounded-full shadow-userShadow ml-[-8px] mt-[-8px] p-2">
          <img
            className="w-full h-full rounded-full"
            src={avatar ?? avatarDefault}
            alt={name ?? "avatar"}
          />
        </div>
      </div>
    </Line>
  );
};
