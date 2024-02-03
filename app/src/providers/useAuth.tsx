import { useEffect, useState } from "react";
import { useUser, User } from "./useUser";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const { addUser, removeUser } = useUser();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    addUser(user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    removeUser();
  };

  return { user, login, logout, setUser };
};
