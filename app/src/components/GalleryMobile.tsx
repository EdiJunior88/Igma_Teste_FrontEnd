import ImageComponent from "./ImageComponent";
import InfiniteLooperMobile from "./InfiniteLooperMobile";
import "@/css/gallery.css";

import ImageCelular1 from "@/assets/celular1.webp";
import ImageCelular2 from "@/assets/celular2.webp";
import ImageCelular3 from "@/assets/celular3.webp";
import ImageCelular4 from "@/assets/celular4.webp";
import ImageCelular5 from "@/assets/celular5.webp";
import ImageCelular6 from "@/assets/celular6.webp";

const GalleryMobile = () => {
  const images = [
    ImageCelular1,
    ImageCelular2,
    ImageCelular3,
    ImageCelular4,
    ImageCelular5,
    ImageCelular6,
  ];

  return (
    <div className="flex flex-row">
      <InfiniteLooperMobile speed={5} direction="left">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            alt={`imagem celular ${index + 1}`}
            className="image-component w-[113px]"
          />
        ))}
      </InfiniteLooperMobile>
    </div>
  );
};

export default GalleryMobile;
