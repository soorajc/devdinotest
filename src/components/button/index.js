/**
 * Button Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import Styles from './styles';

const Button = props => {
  return (
    <TouchableOpacity
      style={[Styles.button, {backgroundColor: props.backgroundColor}]}
      onPress={() => props.handlePress()}>
      <Text style={Styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  handlePress: PropTypes.func.isRequired,
};
