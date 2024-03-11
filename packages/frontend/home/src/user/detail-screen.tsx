import { Text, View } from "react-native";
import { TextLink } from "solito/link";

export function UserDetailScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`User ID: id`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  );
}
