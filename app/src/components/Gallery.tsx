import ImageComponent from "./ImageComponent";
import "@/css/gallery.css";

import ImageCelular1 from "@/assets/celular1.webp";
import ImageCelular2 from "@/assets/celular2.webp";
import ImageCelular3 from "@/assets/celular3.webp";
import ImageCelular4 from "@/assets/celular4.webp";
import ImageCelular5 from "@/assets/celular5.webp";
import ImageCelular6 from "@/assets/celular6.webp";
import InfiniteLooper from "./InfiniteLooper";

const Gallery = () => {
  const images = [
    ImageCelular1,
    ImageCelular2,
    ImageCelular3,
    ImageCelular4,
    ImageCelular5,
    ImageCelular6,
  ];

  return (
    <div className="flex gap-x-[17px]">
      <InfiniteLooper speed={20} direction="up">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            alt={`imagem celular ${index + 1}`}
            className="image-component"
          />
        ))}
      </InfiniteLooper>

      <InfiniteLooper speed={20} direction="down">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            alt={`imagem celular ${index + 1}`}
            className="image-component"
          />
        ))}
      </InfiniteLooper>

      <InfiniteLooper speed={35} direction="up">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            alt={`imagem celular ${index + 1}`}
            className="image-component"
          />
        ))}
      </InfiniteLooper>

      <InfiniteLooper speed={50} direction="down">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            alt={`imagem celular ${index + 1}`}
            className="image-component"
          />
        ))}
      </InfiniteLooper>
    </div>
  );
};

export default Gallery;
