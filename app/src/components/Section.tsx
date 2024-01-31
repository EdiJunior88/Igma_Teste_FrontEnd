import ImageComponent from "./ImageComponent";
import Vector from "@/assets/vetorImage.svg";
import ImageSection from "@/assets/Image.png";

const Section = () => {
  return (
    <>
      <div className="flex justify-center">
        <ImageComponent
          src={ImageSection}
          alt="image lava"
          width="304px"
          height="504px"
        />
        <ImageComponent
          src={Vector}
          alt="vector svg"
          width="60px"
          height="157px"
          className="absolute left-16 top-56"
        />
      </div>
    </>
  );
};

export default Section;
