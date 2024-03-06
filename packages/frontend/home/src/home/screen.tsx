import { Card, H1, List, P, TextLink } from "@frontend/design-system";
import { useQuery } from "@tanstack/react-query";
import { GraphQLClient, gql } from "graphql-request";
import { Platform, Pressable, View } from "react-native";

const NEXT_API_URL = Platform.OS === "web" ? "/api" : "http://localhost:3000/api";
const GRAPHQL_ENDPOINT = "/graphql";

const graphQLClient = new GraphQLClient(NEXT_API_URL + GRAPHQL_ENDPOINT);

interface UserData {
  getUsers: {
    id: string;
    login: string;
    avatar_url: string;
  }[];
}

export const getUsers = async () => {
  //TODO: move to be shared in a package. (and use instead of rohans pokemon)
  const { getUsers } = await graphQLClient.request<UserData>(gql`
    query ExampleQuery {
      getUsers {
        id
        login
        avatar_url
      }
    }
  `);
  return getUsers;
};

type HomeScreenProps = {
  data?: { id: string; name: string; url: string }[];
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ data }) => {
  const query = useQuery({ queryKey: ["test"], queryFn: getUsers });

  if (query.data === undefined) return null;
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Welcome to Solito.</H1>
      <View className="max-w-xl">
        <P className="text-center">
          Here is a basic starter to show you how you can navigate from one screen to another. This
          screen uses the same code on Next.js and React Native.
        </P>
        {query?.error ? (
          <P className="text-center">Data fetching error (if exists): {query.error?.message}</P>
        ) : null}
      </View>
      <View className="h-[32px]" />
      <View className="flex-row space-x-8">
        <TextLink href="/user/fernando">Regular Link</TextLink>
      </View>
      <View className="w-full flex-1 items-center">
        <List
          horizontal
          estimatedItemSize={Platform.OS === "web" ? 300 : 200}
          data={query.data}
          title="Card List"
          renderItem={({ item: { id, avatar_url, login } }) => (
            <Card title={login} image={avatar_url} imageAlt={login} cardId={id} />
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
