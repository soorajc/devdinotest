/**
 * PostDetails Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import dayjs from 'dayjs';

import Styles from './styles';
import Button from '../../components/button';
import TextInputField from '../../components/texinputfield';
import Card from '../../components/card';
import CommentPanel from '../../components/commentpanel';
import {
  publishComment,
  getCurrentUser,
  loadComments,
  displayAlert,
} from '../../helper';
const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

const PostDetails = ({route}) => {
  const {post, type} = route.params;
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getCommentList(type, post.id);
  }, []);

  const handleCommentSubmit = async () => {
    if (comment && comment.trim().length > 0) {
      const id = post.id;
      const currentUser = await getCurrentUser();
      const time = dayjs().format();
      const commentId = '#id' + time + Math.random();
      let commentObject = {
        id: commentId,
        user: currentUser,
        comment,
        time,
      };
      const commentStatus = await publishComment(type, id, commentObject);
      if (commentStatus.status === 'Success') {
        let newCommentList = [...commentList];
        newCommentList.push(commentObject);
        setCommentList(newCommentList);
        displayAlert('Success', 'Comment published successfully');
      } else {
        displayAlert('Message', 'Unable to post comment try again');
      }
    } else {
      displayAlert('Error', 'Comment should not be empty');
    }
  };

  const getCommentList = async (postType, postId) => {
    const comments = await loadComments(postType, postId);
    if (comments && comments.data && comments.data.length > 0) {
      setCommentList(comments.data);
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView contentContainerStyle={Styles.scrollView}>
        <Text style={Styles.postTitle}>{post.title}</Text>
        <Card post={post} />
        <View style={Styles.formContainer}>
          <TextInputField
            placeholder="Enter your comment"
            label="comment"
            handleTextInput={setComment}
          />
          <Button
            label="Submit Comment"
            handlePress={handleCommentSubmit}
            backgroundColor="#E7476C"
          />
        </View>
        <Text style={Styles.sectionTitle}>Available Comments:</Text>
        <View style={Styles.commentContainer}>
          {commentList &&
            commentList.map(commentItem => (
              <CommentPanel comment={commentItem} key={commentItem.id} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostDetails;
