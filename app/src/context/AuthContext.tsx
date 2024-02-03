import { createContext } from "react";
import { InterfaceAuthContext } from "@/Interface/Interface";

export const AuthContext = createContext<InterfaceAuthContext>({
  user: null,
  setUser: () => {},
});
