import { A, Card, H1, List, P, TextLink } from "@frontend/design-system";
import { useNavigation } from "@frontend/providers";
import { Platform, Pressable, View } from "react-native";

type HomeScreenProps = {
  data?: { id: string; name: string; url: string }[];
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ data }) => {
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
      {data && (
        <View className="w-full flex-1 items-center">
          <List
            horizontal
            estimatedItemSize={Platform.OS === "web" ? 300 : 200}
            data={data}
            title="Next Server Component List"
            renderItem={({ item: { id, name } }) => (
              <Pressable className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]" id={id}>
                <View className="h-full w-full flex-col items-center overflow-hidden rounded-lg bg-slate-200">
                  <View className="flex-1" />
                  <View className="w-full items-center rounded-lg bg-white/70 px-2">
                    <P numberOfLines={1} className="text-ellipsis text-center text-sm sm:text-base">
                      {name}
                    </P>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
};
