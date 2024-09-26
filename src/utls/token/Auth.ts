import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const storeTokens = async (
  accessToken: string,
  refreshToken: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    console.log('Tokens stored successfully');
  } catch (error) {
    console.log('Error storing tokens:', error);
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  try {
    const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    return accessToken;
  } catch (error) {
    console.log('Error getting access token:', error);
    return null;
  }
};

export const getRefreshToken = async (): Promise<string | null> => {
  try {
    const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
    return refreshToken;
  } catch (error) {
    console.log('Error getting refresh token:', error);
    return null;
  }
};

export const removeTokens = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
    console.log('Tokens removed successfully');
  } catch (error) {
    console.error('Error removing tokens:', error);
  }
};

interface Credentials {
  username: string;
  password: string;
}

interface Response {
  token: string;
  refreshToken: string;
}

export const authenticateUser = async (
  credentials: Credentials,
): Promise<Response> => {
  try {
    const response = await axios.post(
      'http://api.alanced.com/login',
      credentials,
    );
    return {
      token: response.data.token,
      refreshToken: response.data.refreshToken,
    };
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error; // You can handle errors in login by catching this
  }
};

export const login = async (
  credentials: Credentials,
  navigate: (screen: string) => void,
): Promise<void> => {
  try {
    const response: Response = await authenticateUser(credentials);
    if (response.token) {
      await storeTokens(response.token, response.refreshToken);
      navigate('Home');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
