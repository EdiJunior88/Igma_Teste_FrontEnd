import { InterfaceButtonComponent } from "@/Interface/Interface";

const ButtonComponent = ({
  type,
  text,
  className,
  disabled,
}: InterfaceButtonComponent) => {
  return (
    <div>
      <button type={type} className={className} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default ButtonComponent;
