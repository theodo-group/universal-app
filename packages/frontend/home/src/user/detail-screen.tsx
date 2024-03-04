import { Text, View } from "react-native";
import { TextLink } from "solito/link";
import { useParams } from "solito/navigation";

export function UserDetailScreen() {
  const { id } = useParams();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  );
}
