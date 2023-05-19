import image from "../../assets/images/picture.png";
import imageWebp from "../../assets/images/picture.webp";

export const Picture = () => {
  return (
    <div className="py-1 h-44">
      <picture>
        <source srcSet={imageWebp} type="image/webp" />
        <img
          className="mx-auto max-h-full"
          src={image}
          alt="background-image"
        />
      </picture>
    </div>
  );
};
