/**
 * TextInputField Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, TextInput, Keyboard} from 'react-native';
import PropTypes from 'prop-types';

import Styles from './styles';

const TextInputField = props => {
  const handleTextChange = input => {
    props.handleTextInput(input);
  };
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.textInput}
        onChangeText={text => handleTextChange(text)}
        placeholder={props.placeholder}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
    </View>
  );
};

export default TextInputField;

TextInputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleTextInput: PropTypes.func.isRequired,
};
