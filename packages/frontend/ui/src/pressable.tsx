import { ComponentProps } from "react";
import { GestureResponderEvent, Pressable as NativePressable } from "react-native";

type PressableProps = ComponentProps<typeof NativePressable>;

export const Pressable: React.FC<PressableProps> = ({ children, onPress, ...props }) => {
  const onPressWithLog = async (event: GestureResponderEvent) => {
    onPress && (await onPress(event));
    console.debug(`Clicked on pressable: ${props.id}`);
  };
  return (
    <NativePressable onPress={onPressWithLog} {...props}>
      {children}
    </NativePressable>
  );
};
