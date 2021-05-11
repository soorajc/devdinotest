/**
 * Comment Panel Component
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

const CommentPanel = props => {
  const {comment} = props;
  return (
    <View style={Styles.commentTile} key={comment.id}>
      <Text style={Styles.userName}>{comment.user} : </Text>
      <Text style={Styles.comment}>{comment.comment}</Text>
      <Text style={Styles.commentTimeStamp}>
        Commented On: {dayjs(comment.time).format('LLL')}
      </Text>
    </View>
  );
};

export default CommentPanel;

CommentPanel.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }),
};
