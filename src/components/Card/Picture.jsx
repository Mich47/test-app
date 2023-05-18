import image from "../../assets/picture.svg";

export const Picture = () => {
  return (
    <div className="py-1 h-44">
      <img className="mx-auto" src={image} alt="image" />
    </div>
  );
};
