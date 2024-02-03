import { User } from "@/providers/useUser";

export interface InterfaceImageComponent {
  src: string;
  alt: string;
  className?: string;
}

export interface InterfaceTextComponent {
  text: string;
  className?: string;
}

export interface InterfaceInputComponent {
  label: string;
  name: string;
  id: string;
  type: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InterfaceButtonComponent {
  type?: "submit" | "reset" | "button";
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface InterfaceFormik {
  name: string;
  email: string;
}

export interface InterfaceUseUsers {
  id: string;
  name: string;
  email: string;
  authToken?: string;
}

export interface InterfaceAuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}
