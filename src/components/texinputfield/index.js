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
    const label = props.label ? props.label : 'nil';
    props.handleTextInput(input, label);
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
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  handleTextInput: PropTypes.func.isRequired,
};
