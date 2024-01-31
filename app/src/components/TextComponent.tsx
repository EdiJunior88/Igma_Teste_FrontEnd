import { InterfaceTextComponent } from "@/Interface/Interface";

const TextComponent = ({ text, className }: InterfaceTextComponent) => {
  return (
    <>
      <p className={className}>{text}</p>
    </>
  );
};

export default TextComponent;
