import { InterfaceInputComponent } from "@/Interface/Interface";

const InputComponent = ({
  label,
  name,
  id,
  type,
  className,
  value,
  onChange
}: InterfaceInputComponent) => {
  return (
    <>
      <label htmlFor={id}>
        <div className="flex flex-col justify-center">
          <div className="absolute">{label}</div>
          <input
            type={type}
            name={name}
            id={id}
            className={className}
            value={value}
            onChange={onChange}
          />
        </div>
      </label>
    </>
  );
};

export default InputComponent;
