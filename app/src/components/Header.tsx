import { Link } from "react-router-dom";
import ImageComponent from "@/components/ImageComponent";
import Logo from "@/assets/LogoHeader.svg";
import Avatar from "@/assets/avatar.webp";
import AvatarLogout from "@/assets/avatarLogout.svg";
import { useAuth } from "@/providers/useAuth";

const Header = () => {
  const { user } = useAuth();

  return (
    <>
      <header className="mb-6 flex h-20 items-center justify-between pr-5 sm:mb-0 lg:pr-8 xl:pr-20">
        <ImageComponent
          src={Logo}
          alt="logo svg"
          className="w-20 sm:h-auto sm:w-auto"
        />
        {user ? (
          <Link to="/login">
            <ImageComponent
              src={Avatar}
              alt="avatar"
              className="h-10 rounded-full lg:h-10 xl:h-12"
            />
          </Link>
        ) : (
          <Link to="/login">
            <ImageComponent
              src={AvatarLogout}
              alt="avatar"
              className="h-10 rounded-full lg:h-10 xl:h-12"
            />
          </Link>
        )}
      </header>
    </>
  );
};

export default Header;
