import { useAuth } from "@/providers/useAuth";
import { useNavigate } from "react-router-dom";

/* Components */
import ButtonComponent from "@/components/ButtonComponent";
import TextComponent from "@/components/TextComponent";

const Login = () => {
  const { user, login } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const textLogin = "Seja bem-vindo ao site";
  const textLogout = "Isso é um adeus mesmo?";

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to the home page
  };

  const handleLogin = () => {
    login({
      id: "1",
      name: "Anonymous",
      email: "anonymous@teste.com.br",
    });
    navigate("/");
  };

  return (
    <div>
      {user ? (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-10 font-plusjacarta text-xl">
          {" "}
          <TextComponent text={textLogout} className="xl:text-base" />
          <ButtonComponent
            text="Sair"
            onClick={handleLogout}
            className="h-12 min-w-[120px] cursor-pointer bg-[#211e1e] px-10 text-sm text-white xl:h-14 xl:min-w-[160px] xl:px-12 xl:text-base"
          />
        </div>
      ) : (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-10 font-plusjacarta text-xl">
          <TextComponent text={textLogin} className="xl:text-base" />
          <ButtonComponent
            text="Entrar"
            onClick={handleLogin}
            className="h-12 min-w-[120px] cursor-pointer bg-[#211e1e] px-10 text-sm text-white xl:h-14 xl:min-w-[160px] xl:px-12 xl:text-base"
          />
        </div>
      )}
    </div>
  );
};

export default Login;
