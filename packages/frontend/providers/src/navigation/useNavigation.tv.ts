import {
  NavigatorScreenParams,
  useNavigation as useNativeNavigation,
} from "@react-navigation/native";
import { NavigationRouter } from "navigation/useNavigation.types";

export type RootTabParamList = {
  Home: undefined;
};

export type RootStackParamList = {
  TabNavigator: NavigatorScreenParams<RootTabParamList>;
  ProgramDetail: undefined;
};

export const useNavigation: NavigationRouter = () => {
  const { navigate } = useNativeNavigation();
  const navigateToDetail = () => {
    navigate("ProgramDetail");
  };
  return { navigateToDetail };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
