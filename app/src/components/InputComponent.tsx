import { InterfaceInputComponent } from "@/Interface/Interface";

const InputComponent = ({
  name,
  id,
  type,
  className,
  value,
  placeholder,
  disabled,
  onChange,
}: InterfaceInputComponent) => {
  return (
    <>
      <label htmlFor={id}>
        <div className="flex flex-col justify-center">
          <input
            type={type}
            name={name}
            id={id}
            className={className}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
          />
        </div>
      </label>
    </>
  );
};

export default InputComponent;
