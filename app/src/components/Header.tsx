import ImageComponent from "@/components/ImageComponent";
import Logo from "@/assets/LogoHeader.svg";
import Avatar from "@/assets/avatar.png";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between h-20 sm:pr-6 xl:pr-20">
        <ImageComponent src={Logo} alt="logo svg" width="120px" height="42px" />
        <ImageComponent
          src={Avatar}
          alt="avatar"
          width="40px"
          height="40px"
          className="rounded-full"
        />
      </header>
    </>
  );
};

export default Header;
