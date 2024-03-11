import { Card, H1, List, P } from "@frontend/design-system";
import { useNavigation } from "@frontend/providers";
import { Platform, View } from "react-native";

export function HomeScreen() {
  const cardList = [
    {
      id: "dans card id",
      title: "Dans Card please dont touch",
      imageAlt: "picture of dan",
      image:
        "https://assets-global.website-files.com/64419b7d8385c10f0fb4c7d7/652fbde4c176225814062388_dan-1%20small.webp",
    },
    {
      id: "dans card id2",
      title: "Dans Card please dont touch",
      imageAlt: "picture of dan",
      image:
        "https://assets-global.website-files.com/64419b7d8385c10f0fb4c7d7/652fbde4c176225814062388_dan-1%20small.webp",
    },
    {
      id: "dans card id3",
      title: "Dans Card please dont touch",
      imageAlt: "picture of dan",
      image:
        "https://assets-global.website-files.com/64419b7d8385c10f0fb4c7d7/652fbde4c176225814062388_dan-1%20small.webp",
    },
    {
      id: "dans card id4",
      title: "Dans Card please dont touch",
      imageAlt: "picture of dan",
      image:
        "https://assets-global.website-files.com/64419b7d8385c10f0fb4c7d7/652fbde4c176225814062388_dan-1%20small.webp",
    },
    {
      id: "dans card id5",
      title: "Dans Card please dont touch",
      imageAlt: "picture of dan",
      image:
        "https://assets-global.website-files.com/64419b7d8385c10f0fb4c7d7/652fbde4c176225814062388_dan-1%20small.webp",
    },
  ];
  const { navigateToDetail } = useNavigation();

  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Welcome to Solito.</H1>
      <View className="max-w-xl">
        <P className="text-center">
          Here is a basic starter to show you how you can navigate from one screen to another. This
          screen uses the same code on Next.js and React Native.
        </P>
      </View>
      <View className="w-full flex-1 items-center">
        <List
          horizontal
          estimatedItemSize={Platform.OS === "web" ? 300 : 200}
          data={cardList}
          title="Card List"
          renderItem={({ item: { id, image, imageAlt, title } }) => (
            <Card
              title={title}
              image={image}
              imageAlt={imageAlt}
              cardId={id}
              onPress={navigateToDetail}
            />
          )}
        />
      </View>
    </View>
  );
}
