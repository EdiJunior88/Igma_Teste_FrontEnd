import { useState } from "react";
import { Formik } from "formik";
import { InterfaceFormik } from "@/Interface/Interface";

/* Components */
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import Gallery from "./Gallery";

/* Images */
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
import Loading from "@/assets/loading.svg";

const Section = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  const TextButtonNewsletter = "Assinar Newsletter";

  const images = [
    LogoAmbev,
    LogoBayer,
    LogoCentauro,
    LogoComgas,
    LogoCVC,
    LogoGoogle,
    LogoHonda,
    LogoHSL,
    LogoIDB,
    LogoMRV,
    LogoNeoEnergetica,
  ];

  return (
    <>
      <section className="auto-rows-auto content-center items-center justify-center xl:grid xl:grid-flow-row-dense xl:grid-cols-2">
        <div className="xl:col-span-2 xl:grid xl:grid-cols-2 xl:px-[102px] xl:pt-[120px]">
          <div className="relative">
            <ImageComponent
              src={ImageLavaSection}
              alt="image lava"
              className="xl:h-[680px] xl:w-[422px]"
            />
            <ImageComponent
              src={Vector}
              alt="vector svg"
              className="absolute xl:left-[-18px] xl:top-[261px] xl:w-[60px]"
            />
          </div>

          <div className="xl:w-[531px]">
            <div className="xl:flex xl:items-center xl:gap-4">
              <TextComponent text={textIntro} className="xl:text-base" />
              <ImageComponent
                src={LogoIgma}
                alt="logo igma svg"
                className="xl:w-20"
              />
            </div>
            <TextComponent
              text={textDescription}
              className="xl:m-0 xl:pb-12 xl:pt-16 xl:text-[40px] xl:font-semibold xl:leading-[120%]"
            />
            <TextComponent
              text={textSubDescription}
              className="m-0 xl:text-2xl xl:font-semibold xl:leading-[150%]"
            />
          </div>
        </div>

        <div className="items-center xl:col-span-2 xl:grid xl:grid-cols-2 xl:py-[62px]">
          <div className="xl:w-[421px]">
            <TextComponent
              text={textDescriptionCompanies}
              className="xl:text-left xl:text-2xl xl:font-semibold xl:leading-[150%]"
            />
          </div>
          <div className="xl:grid xl:grid-flow-row-dense xl:auto-rows-auto xl:grid-cols-3 xl:content-center xl:items-start xl:justify-center">
            {images.map((image, index) => (
              <ImageComponent
                key={index}
                src={image}
                alt={`logo empresa ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="xl:col-span-2 xl:flex xl:items-center xl:justify-between xl:pb-16">
          <div className="w-72 xl:col-span-1 xl:flex xl:flex-col">
            <TextComponent
              text={textTitleNewsletter}
              className="xl:text-left xl:text-base xl:font-normal xl:leading-[120%]"
            />
            <TextComponent
              text={textDescriptionNewsletter}
              className="leading-[150%] xl:py-12 xl:text-left xl:text-2xl xl:font-semibold"
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
                setIsSubmitting(true);
                setTimeout(() => {
                  alert("Newsletter assinada com sucesso!");
                  setSubmitting(false);
                  setIsSubmitting(false);
                }, 4000);
                values.email = "";
                values.name = "";
              }}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <InputComponent
                    label={textNomeNewsletter}
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    placeholder="Nome"
                    disabled={isSubmitting}
                    onChange={handleChange}
                    className={`relative h-[64px] border-[2px] hover:border-[3px] ${
                      errors.name
                        ? "border-transparent border-b-[#c62828]"
                        : "border-transparent border-b-[#211e1e]"
                    } bg-transparent placeholder:text-[#211e1e]`}
                  />

                  {errors.name ? (
                    <div className="p-1 text-[14px] font-medium text-[#c62828]">
                      {errors.name}
                    </div>
                  ) : null}

                  <div className="xl:pb-[56px] xl:pt-[24px]">
                    <InputComponent
                      label={textEmailNewsletter}
                      type="text"
                      name="email"
                      id="email"
                      value={values.email}
                      placeholder="Email"
                      disabled={isSubmitting}
                      onChange={handleChange}
                      className={`relative h-[64px] border-[2px] hover:border-[3px] ${
                        errors.name
                          ? "border-transparent border-b-[#c62828]"
                          : "border-transparent border-b-[#211e1e]"
                      } bg-transparent placeholder:text-[#211e1e]`}
                    />

                    {errors.email ? (
                      <div className="p-1 text-[14px] font-medium text-[#c62828]">
                        {errors.email}
                      </div>
                    ) : null}
                  </div>

                  {isSubmitting ? (
                    <div className="flex items-center">
                      <ButtonComponent
                        type="submit"
                        text={TextButtonNewsletter}
                        disabled={isSubmitting}
                        className="mr-7 h-[56px] min-w-[160px] cursor-pointer bg-[#211e1e] px-[24px] text-white"
                      />
                      <ImageComponent
                        src={Loading}
                        alt="logo igma svg"
                        className="xl:w-10"
                      />
                    </div>
                  ) : (
                    <ButtonComponent
                      type="submit"
                      text={TextButtonNewsletter}
                      disabled={isSubmitting}
                      className="h-[56px] min-w-[160px] cursor-pointer bg-[#211e1e] px-[24px] text-white"
                    />
                  )}
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
