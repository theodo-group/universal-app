import { Image as ExpoImage } from "expo-image";
import { View } from "react-native";
import { FullResolution, ImageProps, PartialResolution } from "./image.props";

const isFullResolution = (
  resolution: FullResolution | PartialResolution
): resolution is FullResolution => {
  const fill = (resolution as FullResolution)?.fill;
  return !!fill;
};

export const Image: React.FC<ImageProps> = ({
  resolution,
  src,
  unoptimised = true,
  alt,
  absolutePosition = false,
}) => {
  console.log("tv image rendered");
  return (
    <View
      className="overflow-hidden rounded-lg"
      style={{
        height: isFullResolution(resolution) ? "100%" : resolution.height,
        width: isFullResolution(resolution) ? "100%" : resolution.width,
        position: absolutePosition ? "absolute" : "relative",
      }}
    >
      <ExpoImage
        source={
          "https://assets-global.website-files.com/64419b7d8385c10f0fb4c7d7/652fbde4c176225814062388_dan-1%20small.webp"
        }
        alt={alt}
        onError={(error) => {
          console.log(error);
        }}
        onLoad={(loadEvent) => {
          console.log("loading event", loadEvent);
        }}
        contentFit="cover"
        style={{
          height: isFullResolution(resolution) ? "100%" : resolution.height,
          width: isFullResolution(resolution) ? "100%" : resolution.width,
        }}
      />
    </View>
  );
};
