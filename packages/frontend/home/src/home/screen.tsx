import { A, H1, P, TextLink } from "@frontend/design-system";
import { View } from "react-native";

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Welcome to Solito.</H1>
      <View className="max-w-xl">
        <P className="text-center">
          Here is a basic starter to show you how you can navigate from one screen to another. This
          screen uses the same code on Next.js and React Native.
        </P>
        <P className="text-center">
          Solito is made by <A href="https://twitter.com/fernandotherojo">Fernando Rojo</A>.
        </P>
        <P className="text-center">
          NativeWind is made by <A href="https://twitter.com/mark__lawlor">Mark Lawlor</A>.
        </P>
      </View>
      <View className="h-[32px]" />
      <View className="flex-row space-x-8">
        <TextLink href="/user/fernando">Regular Link</TextLink>
      </View>
    </View>
  );
}
