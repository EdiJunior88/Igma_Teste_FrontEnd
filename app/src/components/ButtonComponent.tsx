import { InterfaceButtonComponent } from "@/Interface/Interface";

const ButtonComponent = ({
  type,
  text,
  className,
  disabled,
  onClick,
}: InterfaceButtonComponent) => {
  return (
    <div>
      <button type={type} className={className} disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default ButtonComponent;
