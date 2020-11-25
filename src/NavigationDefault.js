import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './screens/Login/Main';
import Logon from './screens/Login/Logon';
import Logged from './Navigation';

function NavigationDefault(){
  return(
    <Stack.Navigator 
      initialRouteName="Logon"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Logon" component={Logon} />
      <Stack.Screen name="Logged" component={Logged} />
    </Stack.Navigator>
  )
}

export default NavigationDefault;