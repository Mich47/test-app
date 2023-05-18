import { Avatar } from "./Avatar";
import { Button } from "../Button";
import { CardContainer } from "./CardContainer";
import { Description } from "./Description";
import { Logo } from "./Logo";
import { Picture } from "./Picture";
import { useState } from "react";

export const Card = ({ user, isLoading }) => {
  const { avatar, tweets, user: name } = user;

  const [followers, setFollowers] = useState(parseInt(user.followers));
  const [isFollow, setIsFollow] = useState(false);

  return isLoading ? (
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-[20px] bg-indigo-300 w-[380px] h-[460px]"></div>
    </div>
  ) : (
    <CardContainer>
      <Logo />
      <Picture />
      <Avatar avatar={avatar} name={name} />
      <Description followers={followers} tweets={tweets} />
      <div className="py-4 text-center">
        <Button
          isFollow={isFollow}
          text={isFollow ? "Following" : "Follow"}
          handleClick={() => {
            setFollowers(isFollow ? followers - 1 : followers + 1);
            setIsFollow(!isFollow);
          }}
        />
      </div>
    </CardContainer>
  );
};
