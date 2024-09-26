import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  Alert,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import styles from '../../them/Styles';
import {GOOGLE_LOGIN_URL, LOGIN_URl} from '../../utls/api/AlancedApi';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

const storeTokens = async (accessToken, refreshToken) => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  } catch (error) {
    console.log('Error storing tokens:', error);
  }
};

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1026126229817-16o82irfo6hvr0hhg4i3h425h1li4sv8.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await axios.post(LOGIN_URl, {email, password});
      const {access, refresh} = response.data.data.token;
      if (access && refresh) {
        await storeTokens(access, refresh);
        setLoading(false);
        navigation.navigate('HomeScreens');
      } else {
        throw new Error('Token not found');
      }
    } catch (err) {
      Alert.alert('check the email and password');
      setLoading(false);
      console.log('error', err);
    }
  };
  const checkEmailExists = async email => {
    try {
      const response = await axios.post(
        'https://api.alanced.com/account/check-email/',
        {email},
      );
      // console.log("Response", response);
      return response.data;
    } catch (error) {
      console.error(
        'Error checking email existence:',
        error.response ? error.response.data : error.message,
      );
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', JSON.stringify(userInfo, null, 2));

      const email = userInfo.data.user.email;
      console.log('User Email:', email);

      if (!email) {
        throw new Error('Email not available from Google Sign-In');
      }

      const emailCheckResponse = await checkEmailExists(email);

      if (emailCheckResponse?.exists) {
        const payload = {
          email,
          type: emailCheckResponse.type,
        };

        const loginResponse = await axios.post(GOOGLE_LOGIN_URL, payload);
        const responseData = loginResponse.data;
        console.log(responseData);
        const {access, refresh} = responseData.data.token;

        if (access && refresh) {
          await storeTokens(access, refresh);
          setGoogleLoading(false);
          navigation.navigate('HomeScreens');
        } else {
          Alert.alert('Error', 'Login failed. Token not found.');
        }
      } else {
        Alert.alert(
          'Error',
          "You're not a Registered user. Please sign up first.",
        );
      }
    } catch (error) {
      console.error(
        'Login failed:',
        error.response ? error.response.data : error.message,
      );
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <View style={styles.viewOuterContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txtSignUp}>
          Welcome Sign In to Learn Encourage Share, Continue.
        </Text>
        <View>
          <Text style={styles.txtFirst}>Email</Text>
          <View style={styles.inputPassword}>
            <MaterialCommunityIcons
              name="email"
              color={'black'}
              size={22}
              style={{marginVertical: 14, paddingRight: 10}}
            />
            <TextInput
              placeholder="Enter Email"
              style={{width: '90%', fontSize: 18}}
              value={email}
              onChangeText={text => setEmail(text.toLowerCase())}
            />
          </View>
        </View>
        <Text style={styles.txtFirst}>Password</Text>
        <View style={styles.inputPassword}>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Entypo
              name={isPasswordVisible ? 'lock-open' : 'lock'}
              size={22}
              color={'black'}
              style={{marginVertical: 14, paddingRight: 10}}
            />
          </TouchableOpacity>
          <TextInput
            style={{width: '82%', fontSize: 18}}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            secureTextEntry={!isPasswordVisible}
          />

          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
              color={'blue'}
              size={22}
              style={{marginVertical: 14}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.resetContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.logtxtStyle}>Forget Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpContainerBtn}>
          <LinearGradient
            style={{borderRadius: 10, height: 50}}
            colors={['#0909E9', '#00D4FF']}>
            <TouchableOpacity
              style={styles.buttonsign}
              onPress={handleSignIn}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator
                  size="small"
                  color="#FFF"
                  style={{paddingTop: 15}}
                />
              ) : (
                <Text style={styles.txtApplySign}>Sign In</Text>
              )}
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.highContainer}>
          <View style={styles.line}></View>
          <Text style={styles.homeTxt}>or</Text>
          <View style={styles.line}></View>
        </View>
        <LinearGradient
          style={{borderRadius: 10, height: 50, padding: 1, marginTop: 10}}
          colors={['#0909E9', '#00D4FF']}>
          <TouchableOpacity
            onPress={handleGoogleLogin}
            disabled={googleLoading}>
            {googleLoading ? (
              <ActivityIndicator
                size="small"
                color="white"
                style={{paddingTop: 15}}
              />
            ) : (
              <View style={styles.SignUpTouch}>
                <Image
                  source={require('../../assets/appImages/Google.png')}
                  style={styles.GoogleImagStyle}
                />
                <Text style={styles.SignUpGoogleTxt}>Sign Up With Google</Text>
              </View>
            )}
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.txtAccount}>
          <Text style={styles.signUpTxt}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.logtxtStyle}> Create an account</Text>
          </TouchableOpacity>
          <Text style={styles.signUpTxt}> It takes less than a minute.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
