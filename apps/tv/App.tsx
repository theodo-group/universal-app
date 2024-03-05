import { HomeScreen, UserDetailScreen } from "@frontend/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Directions, SpatialNavigation } from "react-tv-space-navigation";
import { SpatialNavigationDeviceTypeProvider } from "react-tv-space-navigation/dist/spatial-navigation/context/DeviceContext";

SpatialNavigation.configureRemoteControl({
  remoteControlSubscriber: (callback) => {
    const mapping = {
      ArrowRight: Directions.RIGHT,
      ArrowLeft: Directions.LEFT,
      ArrowUp: Directions.UP,
      ArrowDown: Directions.DOWN,
      Enter: Directions.ENTER,
    };

    const eventId = window.addEventListener("keydown", (keyEvent) => {
      callback(mapping[keyEvent.code as keyof typeof mapping]);
    });

    return eventId;
  },

  remoteControlUnsubscriber: (eventId) => {
    window.removeEventListener("keydown", eventId);
  },
});

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export type RootTabParamList = {
  Home: undefined;
};

export type RootStackParamList = {
  TabNavigator: undefined;
  ProgramDetail: { programInfo: { id: string } };
};

const App = () => {
  return (
    <NavigationContainer>
      <SpatialNavigationDeviceTypeProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="TabNavigator"
        >
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="ProgramDetail" component={UserDetailScreen} />
        </Stack.Navigator>
      </SpatialNavigationDeviceTypeProvider>
    </NavigationContainer>
  );
};

export default App;
