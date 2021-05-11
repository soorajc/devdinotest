/**
 * Card Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import Styles from './styles';

const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

const Card = props => {
  const {post} = props;
  return (
    <View style={Styles.postDetailsContainer}>
      <Text style={Styles.postContent}>{post.body}</Text>
      <Text style={Styles.postMetaDataLabel}>Author: {post.user}</Text>
      <Text style={Styles.postMetaDataLabel}>
        Posted On: {dayjs(post.time).format('LLL')}
      </Text>
    </View>
  );
};

export default Card;

Card.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
      }),
    ),
  }),
};
