import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../them/Styles';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios, {AxiosError} from 'axios';
import {GOOGLE_SING_UP_URL, POST_CLIENT} from '../../utls/api/AlancedApi';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import qs from 'qs';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

type RootStackParamList = {
  Login: undefined;
};

const SignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [first_Name, setFirst_Name] = useState('');
  const [last_Name, setLast_Name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [googleLoading, setGoogleLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const signInNavigationButton = () => {
    navigation.navigate('Login');
  };

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

  const validTextInput = () => {
    if (first_Name.trim().length < 2) {
      Alert.alert('Name should have at least 2 characters');
      return false;
    }
    if (last_Name.trim().length < 2) {
      Alert.alert('Name should have at least 2 characters');
      return false;
    }
    const emailPattern =
      /^[\w\.\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailPattern.test(email.trim())) {
      Alert.alert(
        'Invalid Email Format',
        'Please enter a valid email address.',
      );
      return false;
    }
    const passwordPattern = /^[A-Z][a-z]*@[0-9]+$/;
    if (!passwordPattern.test(password.trim())) {
      Alert.alert('Password Min 8 chars, 1 digit, 1 upper, 1 lower, 1 special');
      return false;
    }
    return true;
  };

  const registration = async () => {
    if (!validTextInput()) return;
    setLoading(true);

    try {
      const formData = qs.stringify({
        email: email.trim(),
        first_Name: first_Name.trim(),
        last_Name: last_Name.trim(),
        password: password,
        password2: password,
        type: 'HIRER',
      });

      const response = await axios.post(POST_CLIENT, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      navigation.navigate('Login');
      Alert.alert('Success', 'Registration successfully completed!');
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data;
        console.log('Error: ', errorMessage);

        if (error.response?.status === 400) {
          Alert.alert(
            'Registration Failed',
            'An account with this email already exists.',
          );
        }
      } else {
        Alert.alert(
          'Error',
          'Unable to connect to the server. Please check your internet connection.',
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const setGoogleRegistration = async () => {
    setGoogleLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await GoogleSignin.signOut();
      console.log(userInfo);

      const details = {
        email: userInfo.data?.user.email,
        first_Name: userInfo.data?.user.givenName,
        last_Name: userInfo.data?.user.familyName,
        type: 'HIRER',
      };
      console.log(details);

      const response = await axios.post(GOOGLE_SING_UP_URL, details);

      if (response.data.message === 'Email already exists') {
        Alert.alert("Error', 'This email already exists");
      } else {
        Alert.alert(
          'Success',
          `${details.type.toLowerCase()} Registration Successful`,
        );
        navigation.navigate('Login');
      }
    } catch (error) {
      if (error) {
        console.error('Google Sign-In Error: ', error);
      } else {
        console.error('Error: ', error);
      }
      Alert.alert('Error', 'Google Sign-In failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <View style={styles.viewOuterContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txtSignUp}>Create Your Free Hirer Account</Text>
        <View>
          <View>
            <Text style={styles.txtFirst}>First Name</Text>
            <View style={styles.inputPassword}>
              <FontAwesome5
                name="user-alt"
                color={'black'}
                size={18}
                style={{marginVertical: 14, paddingRight: 10}}
              />
              <TextInput
                placeholder="Enter First Name"
                style={{width: '90%', fontSize: 18}}
                value={first_Name}
                onChangeText={setFirst_Name}
              />
            </View>
          </View>

          <View>
            <Text style={styles.txtFirst}>Last Name</Text>
            <View style={styles.inputPassword}>
              <FontAwesome5
                name="user-alt"
                color={'black'}
                size={18}
                style={{marginVertical: 14, paddingRight: 10}}
              />
              <TextInput
                placeholder="Enter Last Name"
                style={{width: '90%', fontSize: 18}}
                value={last_Name}
                onChangeText={setLast_Name}
              />
            </View>
          </View>

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
          <LinearGradient
            style={{borderRadius: 10, height: 50, marginTop: 10}}
            colors={['#0909E9', '#00D4FF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            {loading ? (
              <ActivityIndicator
                size="small"
                color="#FFFFFF"
                style={{paddingTop: 15}}
              />
            ) : (
              <TouchableOpacity onPress={registration}>
                <Text style={styles.txtApplySign}>Sign Up</Text>
              </TouchableOpacity>
            )}
          </LinearGradient>

          <View style={styles.highContainer}>
            <View style={styles.line}></View>
            <Text style={styles.homeTxt}>or</Text>
            <View style={styles.line}></View>
          </View>

          <LinearGradient
            style={{
              borderRadius: 10,
              height: 50,
              padding: 1,
              marginVertical: 10,
            }}
            colors={['#0909E9', '#00D4FF']}>
            <TouchableOpacity onPress={setGoogleRegistration}>
              <View style={styles.SignUpTouch}>
                <Image source={require('../../assets/appImages/Google.png')} />
                <Text style={styles.SignUpGoogleTxt}>
                  {' '}
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>

          <View style={styles.txtAccount}>
            <Text style={styles.signUpTxt}>Already have an account?</Text>
            <TouchableOpacity onPress={signInNavigationButton}>
              <Text style={styles.logtxtStyle}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
