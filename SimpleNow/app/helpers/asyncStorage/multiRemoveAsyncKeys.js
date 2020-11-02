import AsyncStorage from '@react-native-community/async-storage';

const multiRemoveAsyncKeys = async (keys) => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {}
};

export default multiRemoveAsyncKeys;
