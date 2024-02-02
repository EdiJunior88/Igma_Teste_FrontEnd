const Footer = () => {
  const textFooter = "Igma Delightful Digital Products Company";
  const textFooterCopyright = "© Copyright 2023";

  return (
    <div className="mx-6 flex flex-col justify-between gap-2 pb-20 pt-10 text-sm font-normal lg:mx-0 lg:flex-row lg:gap-0 lg:pb-20 lg:pt-10 lg:text-sm lg:font-normal xl:text-base">
      <div>{textFooter}</div>
      <div>{textFooterCopyright}</div>
    </div>
  );
};

export default Footer;
