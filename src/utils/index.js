import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async keyName => {
  try {
    const jsonValue = await AsyncStorage.getItem(keyName);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log('Error while reading data');
    return {status: 'Error'};
  }
};

export const setData = async (keyName, data) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem(keyName, jsonData);
    return {status: 'Success'};
  } catch (error) {
    console.log('Error while writing data');
    return {status: 'Error'};
  }
};
