import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/login';
import SignUp from '../screens/signup';

const Stack = createStackNavigator();

const StackConfig = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackConfig;
