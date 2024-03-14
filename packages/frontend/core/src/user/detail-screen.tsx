import { VideoPlayer } from "@frontend/design-system";
import { View } from "react-native";

export function UserDetailScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <VideoPlayer url="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" />
    </View>
  );
}
