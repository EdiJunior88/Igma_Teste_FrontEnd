import { InterfaceButtonComponent } from "@/Interface/Interface";

const ButtonComponent = ({ type, text, className }: InterfaceButtonComponent) => {
  return (
    <div>
      <button type={type} className={className}>{text}</button>
    </div>
  );
};

export default ButtonComponent;
