import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/login';
import SignUp from '../screens/signup';
import Home from '../screens/home';
import PostList from '../screens/postlist';
import PostDetails from '../screens/postdetails';

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
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostList"
        component={PostList}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export default StackConfig;
