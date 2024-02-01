import { Formik } from "formik";
import { InterfaceFormik } from "@/Interface/Interface";

import ImageComponent from "./ImageComponent";
import TextComponent from "./TextComponent";
import Vector from "@/assets/vetorImage.svg";
import ImageLavaSection from "@/assets/Image.webp";
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
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import Gallery from "./Gallery";

const Section = () => {
  const textIntro = "Prazer, somos";
  const textDescription =
    "Acreditamos em um mundo onde experiências incríveis são essenciais.";
  const textSubDescription =
    "Unimos design e tecnologia para resolver problemas complexos de empresas. Criamos produtos digitais que revolucionam o relacionamento entre empresas e consumidores.";
  const textDescriptionCompanies =
    "Expressamos mais de 20 anos de experiência criando plataformas digitais para as maiores empresas do Brasil, impactando milhões de pessoas.";
  const textTitleNewsletter = "Assine nossa newsletter";
  const textDescriptionNewsletter =
    "Desenvolva-se conosco com conteúdos sobre  Tecnologia e Design a cada 15 dias.";
  const textNomeNewsletter = "Nome";
  const textEmailNewsletter = "Email";

  return (
    <>
      <section className="xl:grid xl:grid-cols-2 xl:grid-flow-row-dense auto-rows-auto justify-center content-center items-center">
        <div className="xl:grid xl:grid-cols-2 xl:col-span-2 xl:px-[102px] xl:pt-[120px]">
          <div className="relative">
            <ImageComponent
              src={ImageLavaSection}
              alt="image lava"
              className="xl:w-[422px] xl:h-[680px]"
            />
            <ImageComponent
              src={Vector}
              alt="vector svg"
              className="absolute left-[-18px] top-[173px] xl:w-[60px]"
            />
          </div>

          <div className="xl:w-[531px]">
            <div className="flex items-center gap-2">
              <TextComponent text={textIntro} className="text-sm" />
              <ImageComponent
                src={LogoIgma}
                alt="logo igma svg"
                className="xl:w-[72px]"
              />
            </div>
            <TextComponent
              text={textDescription}
              className="text-[40px] font-semibold pt-[64px] pb-[48px] m-0"
            />
            <TextComponent
              text={textSubDescription}
              className="text-[24px] leading-[150%] m-0"
            />
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-2 xl:col-span-2 items-center xl:py-[43px]">
          <div className="xl:w-[421px]">
            <TextComponent
              text={textDescriptionCompanies}
              className="text-2xl text-left font-semibold leading-[150%]"
            />
          </div>
          <div className="grid grid-cols-3 auto-rows-auto grid-flow-row-dense justify-center content-center items-start">
            <ImageComponent src={LogoAmbev} alt="logo ambev svg" />
            <ImageComponent src={LogoBayer} alt="logo bayer svg" />
            <ImageComponent src={LogoCentauro} alt="logo centauro svg" />
            <ImageComponent src={LogoComgas} alt="logo comgas svg" />
            <ImageComponent src={LogoCVC} alt="logo cvc svg" />
            <ImageComponent src={LogoGoogle} alt="logo google svg" />
            <ImageComponent src={LogoIDB} alt="logo idb svg" />
            <ImageComponent src={LogoHonda} alt="logo honda svg" />
            <ImageComponent src={LogoHSL} alt="logo hsl svg" />
            <ImageComponent src={LogoMRV} alt="logo mrv svg" />
            <ImageComponent
              src={LogoNeoEnergetica}
              alt="logo neoenergetica svg"
            />
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-2 xl:col-span-2 items-center xl:py-[43px]">
          <div className="xl:grid xl:grid-cols-1">
            <TextComponent
              text={textTitleNewsletter}
              className="text-[16px] text-left font-semibold leading-[150%]"
            />
            <TextComponent
              text={textDescriptionNewsletter}
              className="text-[24px] text-left font-semibold leading-[150%] xl:py-[48px]"
            />

            <Formik
              initialValues={{ email: "", name: "" }}
              validate={(values: InterfaceFormik) => {
                const errors: Partial<InterfaceFormik> = {};
                if (!values.email || !values.name) {
                  errors.name = "Nome obrigatório!";
                  errors.email = "Email obrigatório!";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.name = "Nome inválido";
                  errors.email = "Endereço de email inválido!";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert("Newsletter assinada com sucesso!");
                  setSubmitting(false);
                }, 400);
                values.email = "";
                values.name = "";
              }}>
              {({ values, errors, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <InputComponent
                    label={textNomeNewsletter}
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    className={`relative h-[64px] border-4 ${
                      errors.name
                        ? "border-transparent border-b-[#c62828]"
                        : "border-transparent border-b-[#211e1e]"
                    } bg-transparent pl-[55px]`}
                  />

                  {errors.name ? (
                    <div className="text-[#c62828] text-[14px] font-medium p-1">
                      {errors.name}
                    </div>
                  ) : null}

                  <div className="xl:pt-[24px] xl:pb-[56px]">
                    <InputComponent
                      label={textEmailNewsletter}
                      type="text"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      className={`relative h-[64px] border-4 ${
                        errors.name
                          ? "border-transparent border-b-[#c62828]"
                          : "border-transparent border-b-[#211e1e]"
                      } bg-transparent pl-[55px]`}
                    />

                    {errors.email ? (
                      <div className="text-[#c62828] text-[14px] font-medium p-1">
                        {errors.email}
                      </div>
                    ) : null}
                  </div>

                  <ButtonComponent
                    type="submit"
                    text="Assinar"
                    className="min-w-[160px] h-[56px] text-white bg-[#211e1e] cursor-pointer px-[24px]"
                  />
                </form>
              )}
            </Formik>
          </div>

          <div>
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
