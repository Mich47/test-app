import { Avatar } from "./Avatar";
import { Button } from "../Button";
import { CardContainer } from "./CardContainer";
import { Description } from "./Description";
import { Logo } from "./Logo";
import { Picture } from "./Picture";
import { useState } from "react";

export const Card = ({ user }) => {
  const { avatar, tweets, user: name } = user;

  const [followers, setFollowers] = useState(parseInt(user.followers));
  const [isFollow, setIsFollow] = useState(false);

  return (
    <CardContainer>
      <Logo />
      <Picture />
      <Avatar avatar={avatar} name={name} />
      <Description followers={followers} tweets={tweets} />
      <div className="py-4 text-center">
        <Button
          isFollow={isFollow}
          text={isFollow ? "Following" : "Follow"}
          onClickFn={() => {
            setFollowers(isFollow ? followers - 1 : followers + 1);
            setIsFollow(!isFollow);
          }}
        />
      </div>
    </CardContainer>
  );
};
