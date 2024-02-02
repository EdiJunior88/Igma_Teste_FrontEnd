const Footer = () => {
  const textFooter = "Igma Delightful Digital Products Company";
  const textFooterCopyright = "© Copyright 2023";

  return (
    <div className="mx-6 flex justify-between lg:mx-0 lg:pb-20 lg:pt-10 lg:text-sm lg:font-normal xl:text-base">
      <div>{textFooter}</div>
      <div>{textFooterCopyright}</div>
    </div>
  );
};

export default Footer;
