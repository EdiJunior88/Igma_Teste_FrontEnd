import ButtonComponent from "@/components/ButtonComponent";
import Logout from "@/components/LogoutComponent";
import { useAuth } from "@/providers/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

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
      <h1>TELA DE LOGIN DO USUARIO</h1>
      <button onClick={handleLogin}>Login</button>
      <ButtonComponent text="Logout" onClick={handleLogout} />
    </div>
  );
};

export default Login;
