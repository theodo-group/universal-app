import { Image } from "components/image";
import { Pressable } from "pressable";
import { View } from "react-native";
import { P } from "typography";

type CardProps = {
  title: string;
  image: string;
  imageAlt: string;
  cardId: string;
  onPress?: () => void;
};

export const Card: React.FC<CardProps> = ({ title, image, imageAlt, cardId, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]"
      id={cardId}
    >
      <View className="h-full w-full flex-col items-center overflow-hidden rounded-lg">
        <Image src={image} alt={imageAlt} resolution={{ fill: true }} absolutePosition />
        <View className="flex-1" />
        <View className="w-full items-center rounded-lg bg-white/70 px-2">
          <P numberOfLines={1} className="text-ellipsis text-center text-sm sm:text-base">
            {title}
          </P>
        </View>
      </View>
    </Pressable>
  );
};
