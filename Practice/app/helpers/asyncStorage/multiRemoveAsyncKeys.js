import AsyncStorage from '@react-native-community/async-storage';

const multiRemoveAsyncKeys = async (keys) => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    console.log('Error removing multi keys', e);
  }
};

export default multiRemoveAsyncKeys;
