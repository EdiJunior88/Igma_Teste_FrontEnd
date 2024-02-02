const Footer = () => {
  const textFooter = "Igma Delightful Digital Products Company";
  const textFooterCopyright = "© Copyright 2023";

  return (
    <div className="flex justify-between lg:pb-20 lg:pt-10 lg:text-sm xl:text-base lg:font-normal">
      <div>{textFooter}</div>
      <div>{textFooterCopyright}</div>
    </div>
  );
};

export default Footer;
