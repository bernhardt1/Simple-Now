import AsyncStorage from '@react-native-community/async-storage';

const getAsyncData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error Getting Data', e);
  }
};

export default getAsyncData;
