import { InterfaceImageComponent } from "@/Interface/Interface";

const ImageComponent = ({ src, alt, width, height, className }: InterfaceImageComponent) => {
  return (
    <div>
      <img src={src} alt={alt} width={width} height={height} className={className} />
    </div>
  );
};

export default ImageComponent;
