import ImageComponent from "./ImageComponent";
import TextComponent from "./TextComponent";
import Vector from "@/assets/vetorImage.svg";
import ImageSection from "@/assets/Image.png";
import LogoIgma from "@/assets/logotipoIgma.svg";
import LogoAmbev from "@/assets/ambev.svg";
import LogoBayer from "@/assets/bayer.svg";
import LogoCentauro from "@/assets/centauro.svg";
import LogoComgas from "@/assets/comgas.svg";
import LogoCVC from "@/assets/cvc.svg";
import LogoGoogle from "@/assets/google.svg";
import LogoHonda from "@/assets/honda.svg";
import LogoHSL from "@/assets/hsl.svg";
import LogoIDB from "@/assets/idb.svg";
import LogoMRV from "@/assets/mrv.svg";
import LogoNeoEnergetica from "@/assets/neoenergia.svg";

const Section = () => {
  const textIntro = "Prazer, somos";
  const textDescription =
    "Acreditamos em um mundo onde experiências incríveis são essenciais.";
  const textSubDescription =
    "Unimos design e tecnologia para resolver problemas complexos de empresas. Criamos produtos digitais que revolucionam o relacionamento entre empresas e consumidores.";
  const textDescriptionCompanies =
    "Expressamos mais de 20 anos de experiência criando plataformas digitais para as maiores empresas do Brasil, impactando milhões de pessoas.";

  return (
    <>
      <section className="sm:grid sm:grid-cols-2 sm:grid-flow-row-dense auto-rows-auto justify-center content-center items-center">
        <div className="sm:grid sm:grid-cols-2 sm:col-span-2 sm:px-24 sm:pt-[120px]">
          <div className="relative mx-auto">
            <ImageComponent
              src={ImageSection}
              alt="image lava"
              className="sm:w-[422px] sm:h-[680px] 2xl:w-[525px]"
            />
            <ImageComponent
              src={Vector}
              alt="vector svg"
              className="absolute left-[-18px] top-[173px] sm:w-[60px]"
            />
          </div>

          <div className="min-w-[384px] w-[531px] max-w-[663px]">
            <div className="flex items-center gap-2">
              <TextComponent text={textIntro} className="text-sm" />
              <ImageComponent
                src={LogoIgma}
                alt="logo igma svg"
                className="sm:w-[72px]"
              />
            </div>
            <TextComponent
              text={textDescription}
              className="text-[40px] font-semibold pt-16 pb-8 m-0"
            />
            <TextComponent
              text={textSubDescription}
              className="text-2xl leading-[150%] m-0"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-2 sm:col-span-2 items-center sm:py-[43px]">
          <TextComponent
            text={textDescriptionCompanies}
            className="text-2xl text-left font-semibold leading-[150%] sm:w-[421px] h-[15px]"
          />
          <div className="grid grid-cols-3 auto-rows-auto grid-flow-row-dense justify-center content-center items-start">
            <ImageComponent src={LogoAmbev} alt="logo ambev svg" />
            <ImageComponent src={LogoBayer} alt="logo bayer svg" />
            <ImageComponent src={LogoCentauro} alt="logo centauro svg" />
            <ImageComponent src={LogoComgas} alt="logo comgas svg" />
            <ImageComponent src={LogoCVC} alt="logo cvc svg" />
            <ImageComponent src={LogoGoogle} alt="logo google svg" />
            <ImageComponent src={LogoHonda} alt="logo honda svg" />
            <ImageComponent src={LogoHSL} alt="logo hsl svg" />
            <ImageComponent src={LogoIDB} alt="logo idb svg" />
            <ImageComponent src={LogoMRV} alt="logo mrv svg" />
            <ImageComponent
              src={LogoNeoEnergetica}
              alt="logo neoenergetica svg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
