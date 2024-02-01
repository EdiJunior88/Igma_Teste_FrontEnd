import { InterfaceInputComponent } from "@/Interface/Interface";

const InputComponent = ({
  label,
  name,
  id,
  type,
  className,
}: InterfaceInputComponent) => {
  return (
    <>
      <label htmlFor={id}>
        <div className="flex flex-col justify-center">
          <div className="absolute">{label}</div>
          <input type={type} name={name} id={id} className={className} />
        </div>
      </label>
    </>
  );
};

export default InputComponent;
