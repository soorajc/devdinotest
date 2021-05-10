import {Alert} from 'react-native';
import {getData, setData} from '../utils';

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
      content.title = 'Error';
      content.message = 'Username does not exist.';
      break;
    default:
      content.title = '';
      content.message = '';
  }
  return content;
};
