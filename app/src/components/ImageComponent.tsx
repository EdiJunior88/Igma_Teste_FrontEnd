import { InterfaceImageComponent } from "@/Interface/Interface";

const ImageComponent = ({
  src,
  alt,
  className,
}: InterfaceImageComponent) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
      />
    </>
  );
};

export default ImageComponent;
