import { View } from "react-native";
import { SolitoImage } from "solito/image";
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
  return (
    <View
      className="overflow-hidden rounded-lg"
      style={{
        height: isFullResolution(resolution) ? "100%" : resolution.height,
        width: isFullResolution(resolution) ? "100%" : resolution.width,
        position: absolutePosition ? "absolute" : "relative",
      }}
    >
      <SolitoImage
        {...resolution}
        unoptimized={unoptimised}
        src={src}
        alt={alt}
        contentFit="cover"
        style={{
          height: isFullResolution(resolution) ? "100%" : resolution.height,
          width: isFullResolution(resolution) ? "100%" : resolution.width,
        }}
      />
    </View>
  );
};
