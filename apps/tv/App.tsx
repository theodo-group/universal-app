import { HomeScreen, RootStackParamList, RootTabParamList, UserDetailScreen } from "@frontend/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Directions, SpatialNavigation } from "react-tv-space-navigation";

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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="TabNavigator"
      >
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="DetailPage" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
