const Footer = () => {
  const textFooter = "Igma Delightful Digital Products Company";
  const textFooterCopyright = "₢ Copyright 20223";

  return (
    <div className="flex justify-between pt-10 pb-20 text-base font-medium">
      <div>{textFooter}</div>
      <div>{textFooterCopyright}</div>
    </div>
  );
};

export default Footer;
