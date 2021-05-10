/**
 * SignUp Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {createUserAccount, displayAlert, setAlertContent} from '../../helper';
import TextInputField from '../../components/texinputfield';
import Button from '../../components/button';
import Styles from './styles';

const {width} = Dimensions.get('window');

const SignUp = ({navigation}) => {
  const [userName, setUserName] = useState('');

  const handleAccountCreation = async () => {
    let title = '';
    let message = '';
    if (userName && userName.trim().length >= 3) {
      const createAccountResult = await createUserAccount(userName);
      if (createAccountResult && createAccountResult.status) {
        const alertContent = setAlertContent(createAccountResult.status);
        title = alertContent.title;
        message = alertContent.message;
        if (createAccountResult.status === 'Success') {
          navigation.navigate('Login');
          return;
        }
      }
    } else {
      title = 'Validation Error';
      message =
        'Username should not be empty and should have minimum length of 3';
    }
    displayAlert(title, message);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.formContainer}>
        <Icon name="user-friends" size={width * 0.2} color="#DDBEC5" />
        <Text style={Styles.title}>Create Account on Forums App</Text>
        <TextInputField
          placeholder="Enter your username here"
          handleTextInput={setUserName}
        />
        <Button
          label="Create Account"
          handlePress={handleAccountCreation}
          backgroundColor="#758DE7"
        />
        <Button
          label="Go Back To Login"
          handlePress={handleGoBack}
          backgroundColor="#DDDA89"
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
