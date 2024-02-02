import ImageComponent from "@/components/ImageComponent";
import Logo from "@/assets/LogoHeader.svg";
import Avatar from "@/assets/avatar.webp";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between h-20 sm:pr-6 xl:pr-20">
        <ImageComponent src={Logo} alt="logo svg" />
        <ImageComponent src={Avatar} alt="avatar" className="rounded-full xl:h-12" />
      </header>
    </>
  );
};

export default Header;
