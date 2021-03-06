/**
 * Login Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StackActions} from '@react-navigation/native';

import {
  checkUserCredentials,
  displayAlert,
  setAlertContent,
  setCurrentUser,
} from '../../helper';
import TextInputField from '../../components/texinputfield';
import Button from '../../components/button';
import Styles from './styles';
import appConfig from '../../config';

const {width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = async () => {
    let title = '';
    let message = '';
    if (userName && userName.trim().length >= 3) {
      const loginResult = await checkUserCredentials(userName);
      if (loginResult && loginResult.status) {
        if (loginResult.status === 'Success') {
          await setCurrentUser(userName);
          navigation.dispatch(StackActions.replace('Home'));
          return;
        } else {
          const alertContent = setAlertContent(loginResult.status);
          title = alertContent.title;
          message = alertContent.message;
        }
      } else {
        title = 'Error';
        message = 'No data available. Create a user first';
      }
    } else {
      title = 'Validation Error';
      message =
        'Username should not be empty and should have minimum length of 3';
    }
    displayAlert(title, message);
  };

  return (
    <SafeAreaView
      style={[Styles.container, {backgroundColor: appConfig.backgroundColor}]}>
      <View style={Styles.formContainer}>
        <Icon name="user-friends" size={width * 0.2} color="#DDBEC5" />
        <Text style={Styles.title}>{appConfig.title}</Text>
        <TextInputField
          placeholder="Enter username ( case-sensitive )"
          handleTextInput={setUserName}
        />
        <Button
          label={appConfig.loginButtonLabel}
          handlePress={handleLogin}
          backgroundColor={appConfig.loginButtonColor}
        />
        <Button
          label={appConfig.signUpButtonLabel}
          handlePress={handleSignUp}
          backgroundColor={appConfig.signUpButtonColor}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
