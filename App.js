import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding/index';
import NewWallet from './screens/NewWallet';
import SecurityAccess from './screens/SecurityAccess';

const Stack = createNativeStackNavigator();

const App = () => {
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
        {/* <Stack.Screen name="SECURITY ACCESS" component={SecurityAccess}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
