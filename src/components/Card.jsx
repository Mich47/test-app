import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { CardContainer } from "./CardContainer";
import { Description } from "./Description";
import { Logo } from "./Logo";
import { Picture } from "./Picture";

export const Card = () => {
  return (
    <CardContainer>
      <Logo />
      <Picture />
      <Avatar />
      <Description />
      <Button />
    </CardContainer>
  );
};
