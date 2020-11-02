import AsyncStorage from '@react-native-community/async-storage';

const getAllAsyncKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {}

  return keys;
};

export default getAllAsyncKeys;
