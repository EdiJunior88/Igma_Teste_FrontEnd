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
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InterfaceButtonComponent {
  type?: "submit" | "reset" | "button";
  text: string;
  className?: string;
}

export interface InterfaceFormik {
  name: string;
  email: string;
}