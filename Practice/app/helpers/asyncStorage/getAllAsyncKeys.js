import AsyncStorage from '@react-native-community/async-storage';

const getAllAsyncKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log('Error Getting Async Keys', e);
  }

  return keys;
};

export default getAllAsyncKeys;
