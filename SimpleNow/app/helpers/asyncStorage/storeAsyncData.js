import AsyncStorage from '@react-native-community/async-storage';

const storeAsyncData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {}
};

export default storeAsyncData;
