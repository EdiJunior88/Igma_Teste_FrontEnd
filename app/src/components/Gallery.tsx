import ImageComponent from "./ImageComponent";
import "@/css/gallery.css";

import ImageCelular1 from "@/assets/celular1.webp";
import ImageCelular2 from "@/assets/celular2.webp";
import ImageCelular3 from "@/assets/celular3.webp";
import ImageCelular4 from "@/assets/celular4.webp";
import ImageCelular5 from "@/assets/celular5.webp";
import ImageCelular6 from "@/assets/celular6.webp";

const Gallery = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="column">
        <div className="flex flex-col image-container move-up gap-[47px]">
          <ImageComponent src={ImageCelular1} alt="imagem celular" />
          <ImageComponent src={ImageCelular2} alt="imagem celular" />
          <ImageComponent src={ImageCelular3} alt="imagem celular" />
          <ImageComponent src={ImageCelular4} alt="imagem celular" />
          <ImageComponent src={ImageCelular5} alt="imagem celular" />
          <ImageComponent src={ImageCelular6} alt="imagem celular" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
