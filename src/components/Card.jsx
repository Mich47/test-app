import { Avatar } from "./Avatar";
import { CardContainer } from "./CardContainer";
import { Line } from "./Line";
import { Logo } from "./Logo";
import { Picture } from "./Picture";

export const Card = () => {
  return (
    <CardContainer>
      <Logo />
      <Picture />
      <Line />
      <Avatar />
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
    </CardContainer>
  );
};
