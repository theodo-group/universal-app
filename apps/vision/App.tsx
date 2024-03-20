import {HomeScreen} from '@frontend/core';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HomeScreen />
      </ScrollView>
    </NavigationContainer>
  );
}

export default App;
