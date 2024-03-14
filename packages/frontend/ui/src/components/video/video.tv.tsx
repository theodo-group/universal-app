import { VideoPlayerProps } from "components/video/video.types";
import { StyleSheet } from "react-native";
import Video from "react-native-video";

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <Video
      // Can be a URL or a local file.
      source={{ uri: url }}
      style={styles.backgroundVideo}
      controls
    />
  );
};

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
