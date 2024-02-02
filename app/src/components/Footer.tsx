const Footer = () => {
  const textFooter = "Igma Delightful Digital Products Company";
  const textFooterCopyright = "© Copyright 2023";

  return (
    <div className="flex justify-between xl:pb-20 xl:pt-10 xl:text-base xl:font-normal">
      <div>{textFooter}</div>
      <div>{textFooterCopyright}</div>
    </div>
  );
};

export default Footer;
