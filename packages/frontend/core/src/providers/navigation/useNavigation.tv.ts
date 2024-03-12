import {
  NavigatorScreenParams,
  useNavigation as useNativeNavigation,
} from "@react-navigation/native";
import { NavigationRouter } from "./useNavigation.types";

export type RootTabParamList = {
  Home: undefined;
};

export type RootStackParamList = {
  TabNavigator: NavigatorScreenParams<RootTabParamList>;
  DetailPage: undefined;
};

export const useNavigation: NavigationRouter = () => {
  const { navigate } = useNativeNavigation();
  const navigateToDetailPage = () => {
    navigate("DetailPage");
  };
  return { navigateToDetailPage };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
