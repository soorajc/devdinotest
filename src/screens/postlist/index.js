/**
 * PostList Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import dayjs from 'dayjs';

import {getPosts, displayAlert, setPost, getCurrentUser} from '../../helper';
import dummyData from './dummypost';
import Button from '../../components/button';
import Styles from './styles';
import TextInputField from '../../components/texinputfield';

const PostList = ({navigation, route}) => {
  const [loading, setLoader] = useState(false);
  const [postData, setpostData] = useState([]);
  const [postDetails, setPostDetails] = useState({title: '', body: ''});
  const {type} = route.params;

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoader(true);
    const posts = await getPosts(type);
    if (posts && posts.length > 0) {
      setpostData(posts);
    } else {
      const defaultData = dummyData[type];
      await setPost(type, defaultData);
      setpostData(defaultData);
    }
    setLoader(false);
  };

  const showPostDetails = post => {
    navigation.navigate('PostDetails', {post, type});
  };

  const handlePostSubmit = async () => {
    const currentUser = await getCurrentUser();
    if (type === 'Announcements' && currentUser !== 'Admin') {
      displayAlert('Message', 'Only username Admin can post in this forum');
    } else {
      createPost(currentUser);
    }
  };

  const createPost = async currentUser => {
    const time = dayjs().format();
    setLoader(true);
    if (
      postDetails &&
      postDetails.title.trim().length > 0 &&
      postDetails.body.trim().length > 0
    ) {
      const postId = '#id' + time + Math.random();
      let postObject = {
        id: postId,
        user: currentUser,
        title: postDetails.title,
        body: postDetails.body,
        time: time,
        comments: [],
      };
      let newPosts = [];
      newPosts = postData;
      newPosts.push(postObject);
      newPosts.reverse();
      setpostData(newPosts);
      const result = await setPost(type, newPosts);
      if (result.status !== 'Success') {
        displayAlert('Message', 'Unable to create post try again');
      }
      setLoader(false);
    } else {
      setLoader(false);
      displayAlert('Input Error', 'Fill all the fields');
    }
  };

  const handlePostForm = (value, label) => {
    if (label === 'title') {
      setPostDetails({
        ...postDetails,
        title: value,
      });
    } else {
      setPostDetails({
        ...postDetails,
        body: value,
      });
    }
  };

  const renderListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => showPostDetails(item)}
        style={Styles.listItem}>
        <Text style={Styles.postTitle}>
          {index + 1} {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.title}>{type} forum</Text>
      <Text style={Styles.sectionTitle}>Create New Post: </Text>
      <View style={Styles.formContainer}>
        <TextInputField
          placeholder="Enter post title"
          label="title"
          handleTextInput={handlePostForm}
        />
        <TextInputField
          placeholder="Enter post description"
          label="body"
          handleTextInput={handlePostForm}
        />
        <Button
          label="Create Post"
          handlePress={handlePostSubmit}
          backgroundColor="#E7476C"
        />
      </View>
      <Text style={Styles.sectionTitle}>Available Posts: </Text>
      {loading ? (
        <View style={Styles.loadingContainer} />
      ) : (
        <View style={Styles.listContainer}>
          <FlatList
            data={postData}
            extraData={postData}
            contentContainerStyle={Styles.listInnerContainer}
            renderItem={renderListItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PostList;
