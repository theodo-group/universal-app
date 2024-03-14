import { VideoPlayerProps } from "components/video/video.types";
import { ResizeMode, Video } from "expo-av";

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <Video
      style={{
        width: "100%",
        aspectRatio: 16 / 9,
      }}
      videoStyle={{ width: "100%" }}
      source={{ uri: url }}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
    />
  );
};
