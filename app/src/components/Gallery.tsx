import ImageComponent from "./ImageComponent";
import "@/css/gallery.css";

import ImageCelular1 from "@/assets/image_celular/celular01.webp";
import ImageCelular2 from "@/assets/image_celular/celular02.webp";
import ImageCelular3 from "@/assets/image_celular/celular03.webp";
import ImageCelular4 from "@/assets/image_celular/celular04.webp";
import ImageCelular5 from "@/assets/image_celular/celular05.webp";
import ImageCelular6 from "@/assets/image_celular/celular06.webp";
import ImageCelular7 from "@/assets/image_celular/celular07.webp";
import ImageCelular8 from "@/assets/image_celular/celular08.webp";
import ImageCelular9 from "@/assets/image_celular/celular09.webp";
import ImageCelular10 from "@/assets/image_celular/celular10.webp";
import ImageCelular11 from "@/assets/image_celular/celular11.webp";
import ImageCelular12 from "@/assets/image_celular/celular12.webp";
import InfiniteLooper from "./InfiniteLooper";

const Gallery = () => {
  const images = [
    ImageCelular1,
    ImageCelular2,
    ImageCelular3,
    ImageCelular4,
    ImageCelular5,
    ImageCelular6,
    ImageCelular7,
    ImageCelular8,
    ImageCelular9,
    ImageCelular10,
    ImageCelular11,
    ImageCelular12,
  ];

  return (
    <div className="flex gap-x-[17px]">
      <InfiniteLooper speed={30} direction="up">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            alt={`imagem celular ${index + 1}`}
            className="image-component lg:w-[113px] xl:w-auto"
          />
        ))}
      </InfiniteLooper>

      <InfiniteLooper speed={20} direction="down">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            alt={`imagem celular ${index + 1}`}
            className="image-component lg:w-[113px] xl:w-auto"
          />
        ))}
      </InfiniteLooper>

      <InfiniteLooper speed={45} direction="up">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            alt={`imagem celular ${index + 1}`}
            className="image-component lg:w-[113px] xl:w-auto"
          />
        ))}
      </InfiniteLooper>

      <InfiniteLooper speed={60} direction="down">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            src={image}
            alt={`imagem celular ${index + 1}`}
            className="image-component lg:w-[113px] xl:w-auto"
          />
        ))}
      </InfiniteLooper>
    </div>
  );
};

export default Gallery;
