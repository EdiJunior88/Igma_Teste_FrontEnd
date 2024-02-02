const Footer = () => {
  const textFooter = "Igma Delightful Digital Products Company";
  const textFooterCopyright = "© Copyright 2023";

  return (
    <div className="flex justify-between pb-20 pt-10 text-base font-medium">
      <div>{textFooter}</div>
      <div>{textFooterCopyright}</div>
    </div>
  );
};

export default Footer;
