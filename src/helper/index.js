import {Alert} from 'react-native';
import {getData, setData, removeData} from '../utils';

export const createUserAccount = async userName => {
  let newUserList = [];
  const currentUserList = await getData('USER_LIST');
  if (currentUserList && currentUserList.length > 0) {
    newUserList = currentUserList;
    const checkExistingUserNameIndex = currentUserList.findIndex(
      userId => userId === userName,
    );
    if (checkExistingUserNameIndex > -1) {
      return {status: 'User exist'};
    } else {
      newUserList.push(userName);
      const saveData = await setData('USER_LIST', newUserList);
      return saveData;
    }
  } else {
    newUserList.push(userName);
    const saveData = await setData('USER_LIST', newUserList);
    return saveData;
  }
};

export const checkUserCredentials = async userName => {
  const currentUserList = await getData('USER_LIST');
  if (currentUserList && currentUserList.length > 0) {
    const checkExistingUserNameIndex = currentUserList.findIndex(
      userId => userId === userName,
    );
    if (checkExistingUserNameIndex > -1) {
      return {status: 'Success'};
    } else {
      return {status: 'Invalid User'};
    }
  }
};

export const displayAlert = (title, message) => {
  Alert.alert(title, message);
};

export const setAlertContent = status => {
  let content = {title: '', message: ''};
  switch (status) {
    case 'Success':
      content.title = 'Success';
      content.message = 'Account created successfully';
      break;
    case 'Error':
      content.title = 'Error';
      content.message =
        'Some error occured. Unable to perform the operation. Try again';
      break;
    case 'User exist':
      content.title = 'Message';
      content.message = 'Username already taken. Try another one';
      break;
    case 'Invalid User':
      content.title = 'Message';
      content.message =
        'Username does not exist. Username is case-sensitive please check your username';
      break;
    default:
      content.title = '';
      content.message = '';
  }
  return content;
};

export const getPosts = async type => {
  const posts = await getData(type);
  if (posts && posts.length > 0) {
    return posts;
  } else {
    return [];
  }
};

export const setPost = async (type, data) => {
  const status = await setData(type, data);
  return status;
};

export const getCurrentUser = async () => {
  const currentUser = await getData('CURRENT_USER');
  return currentUser;
};

export const setCurrentUser = async userName => {
  const status = await setData('CURRENT_USER', userName);
  return status;
};

export const removeCurrentUser = async userName => {
  const status = await removeData('CURRENT_USER');
  return status;
};

export const publishComment = async (type, postId, comment) => {
  let newComments = [];
  let currentPostList = await getData(type);

  if (currentPostList && currentPostList.length > 0) {
    const checkExistingPostIndex = currentPostList.findIndex(
      item => item.id === postId,
    );
    if (checkExistingPostIndex > -1) {
      newComments = currentPostList[checkExistingPostIndex]['comments'];
      newComments.push(comment);
      currentPostList['comments'] = newComments;
      const saveData = await setData(type, currentPostList);
      return {status: 'Success', data: saveData};
    } else {
      return {status: 'Error', data: 'no data found'};
    }
  } else {
    return {status: 'Error', data: 'no data found'};
  }
};

export const loadComments = async (type, postId) => {
  let currentPostList = await getData(type);
  if (currentPostList && currentPostList.length > 0) {
    const checkExistingPostIndex = currentPostList.findIndex(
      item => item.id === postId,
    );
    if (checkExistingPostIndex > -1) {
      const comments = currentPostList[checkExistingPostIndex]['comments'];
      return {status: 'Success', data: comments};
    } else {
      return {status: 'Error', data: []};
    }
  } else {
    return {status: 'Not Found', data: []};
  }
};
