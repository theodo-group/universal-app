import { Pressable } from "pressable";
import { P } from "typography";
const variantColors = {
  default: "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600",
  primary: "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600",
};

interface ButtonProps {
  onPress: () => void;
  text: string;
  variant: keyof typeof variantColors;
}

const InternalButton = ({ onPress, text, variant = "primary" }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`${variantColors[variant]} my-2 flex w-full justify-center rounded-md px-3 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
    >
      <P className={`${variantColors[variant]} my-2.5 text-center`}>{text}</P>
    </Pressable>
  );
};

export const Button = (props: Omit<ButtonProps, "variant">) => {
  return <InternalButton {...props} variant="primary" />;
};

Button.primary = (props: Omit<ButtonProps, "variant">) => {
  return <InternalButton {...props} variant="primary" />;
};
