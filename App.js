import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding/index';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // Turn off all navigation header. If need to shown please set on useEffect in every page needed.
          headerShown: false,
          headerBackTitleVisible: false,
          headerBackVisible: false,
          // Change all background color to WHITE. (Default: Gray)
          contentStyle:{
            backgroundColor:'#FFFFFF'
          }
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
