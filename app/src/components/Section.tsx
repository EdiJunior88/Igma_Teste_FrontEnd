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
        <div className="flex flex-col lg:col-span-2 lg:grid lg:grid-cols-2 lg:px-14 lg:pb-20 lg:pt-6 xl:px-[102px] xl:pt-[120px]">
          <div className="relative order-last">
            <ImageComponent
              src={ImageLavaSection}
              alt="image lava"
              className="h-[560px] pl-6 lg:h-[504px] xl:h-[680px] xl:w-[422px]"
            />
            <ImageComponent
              src={Vector}
              alt="vector svg"
              className="absolute left-1.5 top-[202px] lg:left-[-18px] lg:top-[174px] lg:w-[60px] xl:top-[261px]"
            />
          </div>

          <div className="mx-6 lg:w-[384px] xl:w-[531px]">
            <div className="flex gap-2 lg:flex lg:items-center lg:gap-2 xl:gap-4">
              <TextComponent text={textIntro} className="xl:text-base" />
              <ImageComponent
                src={LogoIgma}
                alt="logo igma svg"
                className="lg:w-[73px] xl:w-20"
              />
            </div>
            <TextComponent
              text={textDescription}
              className="pb-8 pt-16 text-[32px] font-semibold leading-[120%] lg:pb-8 lg:pt-16 lg:text-[32px] lg:font-semibold lg:leading-[120%] xl:m-0 xl:pb-12 xl:text-[40px]"
            />
            <TextComponent
              text={textSubDescription}
              className="m-0 pb-20 text-base font-semibold leading-[150%] lg:text-base lg:font-semibold lg:leading-[150%] xl:text-2xl"
            />
          </div>
        </div>

        <div className="mx-6 items-center lg:col-span-2 lg:grid lg:grid-cols-2 lg:pb-20 xl:pb-[62px]">
          <div className="lg:w-[304px] xl:w-[421px]">
            <TextComponent
              text={textDescriptionCompanies}
              className="pb-10 pt-20 text-base font-semibold leading-[150%] lg:pb-0 lg:pt-0 lg:text-left lg:text-base lg:font-semibold lg:leading-[150%] xl:text-2xl"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid lg:grid-flow-row-dense lg:auto-rows-auto lg:grid-cols-3 lg:content-center lg:items-start lg:justify-center">
            {images.map((image, index) => (
              <ImageComponent
                key={index}
                src={image}
                alt={`logo empresa ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mx-6 lg:col-span-2 lg:flex lg:items-center lg:justify-between lg:pb-20 xl:pb-16">
          <div className="lg:col-span-1 lg:flex lg:w-[300px] lg:flex-col xl:w-72">
            <TextComponent
              text={textTitleNewsletter}
              className="pb-12 pt-20 text-sm font-normal leading-[120%] lg:pb-0 lg:pt-0 lg:text-left lg:text-sm lg:font-normal lg:leading-[120%] xl:text-base"
            />
            <TextComponent
              text={textDescriptionNewsletter}
              className="pb-12 text-base font-semibold leading-[150%] lg:py-12 lg:pb-0 lg:text-left lg:text-base lg:font-semibold lg:leading-[150%] xl:text-2xl"
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

                  <div className=" pb-14 pt-6 lg:pb-14 lg:pt-6">
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
                      className="h-12 min-w-[120px] cursor-pointer bg-[#211e1e] px-10 text-sm text-white xl:h-14 xl:min-w-[160px] xl:px-12 xl:text-base"
                    />
                  )}
                </form>
              )}
            </Formik>
          </div>

          <div className="py-20 lg:w-[542px] lg:py-0 xl:w-auto">
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
