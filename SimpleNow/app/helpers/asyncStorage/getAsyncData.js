import AsyncStorage from '@react-native-community/async-storage';

const getAsyncData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};

export default getAsyncData;
