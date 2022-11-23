import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
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
import NewWallet from './screens/NewWallet';
import SecurityAccess from './screens/SecurityAccess';
import ChangePassword from './screens/ChangePassword';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // Turn off all navigation header. If need to shown please set on useEffect in every page needed.
          headerShown: false,
          // Change all background color to WHITE. (Default: Gray)
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding}/>
        <Stack.Screen name="CREATE NEW WALLET" component={NewWallet}/>
        <Stack.Screen name="SECURITY ACCESS" component={SecurityAccess}/>
        <Stack.Screen name="CHANGE PASSWORD" component={ChangePassword}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>Hello</Text>
    // </View>
  );
};

export default App;
