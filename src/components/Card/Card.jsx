import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { CardContainer } from "./CardContainer";
import { Description } from "./Description";
import { Logo } from "./Logo";
import { Picture } from "./Picture";
import { useState } from "react";
import PropTypes from "prop-types";

export const Card = ({ user, toggleUserIsFollowing }) => {
  const { id, isFollowing, avatar, tweets, user: name } = user;

  const [followers, setFollowers] = useState(parseInt(user.followers));

  return (
    <CardContainer>
      <Logo />
      <Picture />
      <Avatar avatar={avatar} name={name} />
      <Description followers={followers} tweets={tweets} />
      <div className="py-4 text-center">
        <Button
          isFollowing={isFollowing}
          text={isFollowing ? "Following" : "Follow"}
          onClickFn={() => {
            setFollowers(isFollowing ? followers - 1 : followers + 1);
            toggleUserIsFollowing(id);
          }}
        />
      </div>
    </CardContainer>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isFollowing: PropTypes.bool,
  }),
  toggleUserIsFollowing: PropTypes.func.isRequired,
};
