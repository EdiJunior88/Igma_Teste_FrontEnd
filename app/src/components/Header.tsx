import ImageComponent from "@/components/ImageComponent";
import Logo from "@/assets/LogoHeader.svg";
import Avatar from "@/assets/avatar.webp";

const Header = () => {
  return (
    <>
      <header className="flex h-20 items-center justify-between mb-6 sm:mb-0 pr-5 lg:pr-8 xl:pr-20">
        <ImageComponent src={Logo} alt="logo svg" className="w-20 sm:w-auto sm:h-auto" />
        <ImageComponent
          src={Avatar}
          alt="avatar"
          className="h-10 rounded-full lg:h-10 xl:h-12"
        />
      </header>
    </>
  );
};

export default Header;
